
export default function pagination(countries) {
  let paginatedCountries = []
  for(let i = 0; i < countries.length; i = i + 10) {
    if(i === 0) {
      let firstSet = countries.slice(i, 9)
      i--;
      paginatedCountries.push(firstSet)
      continue
    }
    let set = countries.slice(i, i + 10)
    paginatedCountries.push(set)
  }
  return paginatedCountries
}
