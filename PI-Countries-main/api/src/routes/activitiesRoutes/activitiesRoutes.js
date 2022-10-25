const {Router} = require('express');
const activitiesRoutes = Router();
const {Activity, Country} = require('../../db.js');


activitiesRoutes.post('/', async (req, res) => {
  try {
    let allCountries = await Country.findAll();
    if(!allCountries.length) throw ('cannot find any country to relate to the activity');

    let {name, difficulty, duration, season, countries} = req.body;
    if(!name || !season || !countries.length) throw Error('there is incopleted fields');

    await Activity.create({name,difficulty,duration,season,});
    let act = await Activity.findOne({
      where: {
        name: name
      }
    });
    
    countries.forEach(async (c) => {
      await act.setCountries(c)
    });
    
    res.send(`${name.toUpperCase()} has been saved succefully in the DB`);
    
  }catch(e) {
    typeof(e) === 'string' ? res.status(400).send(e)
    : res.status(500).json({
      msg: 'an unexpected error appeared in the server',
      error: e
    });
  }
})

activitiesRoutes.get('/', async (req, res) => {
  try {
    const result = await Activity.findAll({attributes: ['name']});
    if(result.length) {
      let activities = [...result].map((activity) => activity.name);
      return res.json(activities);
    }
    res.json(result);
  }
  catch(e) {
    res.status(404).send('cannot find activities');
  }
})

module.exports = activitiesRoutes