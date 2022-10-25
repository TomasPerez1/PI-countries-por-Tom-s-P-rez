const {Router} = require('express');
const { Op } = require('sequelize');
const countriesRoutes = Router();
const {Country, Activity } = require('../../db.js');
const loadData = require('./loadData.js');
const fixCountryRelations = require('./fixCountryRelations.js');
const fixDetailRelations = require('./fixDetailRelations.js')

countriesRoutes.get('/', async (req, res) => {
  try {
    let isLoaded = await Country.findAll()
    if(!isLoaded.length) {
      const data = await loadData()
      if(!data.length) throw ('external API failed')
      await Country.bulkCreate(data);
    }

    let {name} = req.query
    if(!name) {
      let result = await Country.findAll({
        attributes: ['id', 'name', 'img', 'region', 'population'],
        include: [{model: Activity}]
      })
      if(!result.length) throw ('cannot find any country in the DB');

      let allCountries = [...result].map((country) => fixCountryRelations(country))
      return res.json(allCountries);
    }
    else {
      
      let result1 = await Country.findAll({
        attributes: ['id', 'name', 'img', 'region', 'population'],
        where: {
          name: {
            [Op.or]: {
              [Op.substring] : name,
              [Op.eq] : `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
            }
          }
        },
        include: [{model: Activity}]
      });

      let result2 = await Country.findAll({
        attributes: ['id', 'name', 'img', 'region', 'population'],
        where: {
          name: {
            [Op.substring] : `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`, 
          }
        },
        include: [{model: Activity}]
      });

      let join = result1.concat(result2)
      
      if(join.length) {
        let isAlready = {}
        let finalResult = join.filter((c) => !isAlready[c.id] ? isAlready[c.id] = true : false)

        let allCountries = [...finalResult].map((country) => fixCountryRelations(country));
        return res.json(allCountries)
      }
      
      throw (`sorry, cannot find any country matching with ${name}`);
    } 
  }
  catch(e) {
    typeof(e) === 'string' ? res.status(404).send(e)
    : res.status(500).json({
      msg: 'an unexpected error appeared in the server',
      error: e
    });
  }
});

countriesRoutes.get('/:id', async (req, res) => {
  try {
    let {id} = req.params;
    console.log(id)
    let exactCountry = await Country.findOne({
      where: {id: id},
      include: [{model: Activity}]
    })
    if(!exactCountry) throw (`cannot find a country with id: ${id}`);
    
    if(exactCountry.activities.length) {
      const country = fixDetailRelations({...exactCountry})
      return res.json(country)
    }
    return res.json(exactCountry);
  }
  catch(e) {
    console.log(e)
    typeof(e) === 'string' ? res.status(404).send(e)
    : res.status(500).json({
      msg: 'an unexpected error appeared in the server',
      error: e
    });
  }
})

module.exports = countriesRoutes