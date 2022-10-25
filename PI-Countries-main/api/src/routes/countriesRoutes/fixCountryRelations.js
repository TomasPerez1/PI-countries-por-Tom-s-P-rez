function fixCountryRelations(country) {
  if(country.activities.length) {
    let fixedActivities = country.activities.map(a => a.name);
    country.dataValues.activities = fixedActivities
    return {...country.dataValues};
  }
  return country
}

module.exports = fixCountryRelations