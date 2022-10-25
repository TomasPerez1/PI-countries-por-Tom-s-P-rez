const axios = require('axios')

async function loadData() {
  let info = await axios.get('https://restcountries.com/v3/all')
  let data = info.data.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      img: c.flags[1],
      region: c.region,
      subregion:c.subregion,
      capital: c.capital ? c.capital[0] : c.name.official,
      area: c.area,
      population: c.population
    }
  })
  return data
}

module.exports = loadData