function fixDetailRelations(country) {
  if(country.activities.length) {
    let fixedActivities = country.activities.map(a =>  {
      return {
        name: a.name,
        difficulty: a.difficulty,
        duration: a.duration,
        season: a.season
      }
    });
    country.dataValues.activities = fixedActivities
    return {...country.dataValues};
  }
  return country
}

module.exports = fixDetailRelations