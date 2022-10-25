
export default function fixForm(form, countries, evento) {
  evento.preventDefault()

  let {name, difficulty, duration, time, season} = form;
  countries = countries.map(c => c.id)

  const formData = {
    name,
    difficulty: parseInt(difficulty),
    duration: `${duration} ${time}`,
    season,
    countries,
  }
  console.log(formData)
  return formData
}