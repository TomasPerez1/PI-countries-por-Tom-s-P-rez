function fixActivityRelations(activity) {
  if(activity.countries.length) {
    let fixedCountries = activity.countries.map(c => c = {
      id: c.id,
      name: c.name,
    })
    activity.dataValues.countries = fixedCountries
    return {...activity.dataValues}
  }
  return activity
}

module.exports = fixActivityRelations