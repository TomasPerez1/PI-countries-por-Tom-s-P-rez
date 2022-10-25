export function filterRegion(coutries, region) {
  const result = coutries.filter((c) => c.region === region)
  if(!result.length) return 'cannot find countries with that region';
  return result
}

export function filterActivity(countries, activity) {
  const result = countries.filter((c) => c.activities.length && c.activities.includes(activity))
  if(!result.length) return 'cannot find countries with that activity'
  return result
}

export function sortAZ(countries, order) {
  if(order === 'A-Z') {
    const result = [...countries].sort((a, b) => {
      if(a.name > b.name) return 1;
      if(a.name < b.name) return - 1;
      return 0
    })
    return result
  }
  if(order === 'Z-A') {
    const result = [...countries].sort((a, b) => {
      if(a.name > b.name) return - 1;
      if(a.name < b.name) return 1;
      return 0
    })
    return result
  }
}

export function sortPopulation(countries, order) {
  if(order === '+') {
    const result = [...countries].sort((a, b) => {
      if(a.population > b.population) return - 1;
      if(a.population < b.population) return  1;
      return 0
    })
    return result
  }
  if(order === '-') {
    const result = [...countries].sort((a, b) => {
      if(a.population > b.population) return 1;
      if(a.population < b.population) return - 1;
      return 0
    })
    return result
  }
}

