import {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {postActivity} from "../../Redux/actions.js";
import isValidForm from "./isValidform.js";
import fixForm from "./fixForm.js";
import './CreateActivity.css'

export default function CreateActivity() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [errs, setErrs] = useState({});
  const [countries, setCountries] = useState([]);
  const [redirect, setRedirect] = useState(false)
  
  let {formCountries, activities} = useSelector((state) => state)

  if(redirect) return (<Redirect to='/redirect'/>)

  function onFormChange(evento) {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value
    })
    setErrs(isValidForm({
      ...form,
      [evento.target.name]: evento.target.value
    }, activities))
  }

  function onCountriesChange(option) {
    let isAlready = countries.filter(c => c.id === option.id)
    if(!isAlready.length) {
      setCountries([
        ...countries,
        {id: option.id, name: option.value}
      ])
    }
  }

  function onClose(evento) {
    const result = countries.filter(c => c.name !== evento.target.name)
    setCountries(result)
  }

  function sendForm(evento) {
    dispatch(postActivity(fixForm(form, countries, evento)))
    setRedirect(true)
  }
  
  return (
    <div className="form-background">
      <h2>Create a touristic activity</h2>
      <h4>To create a touristic activity, please complete the form from bellow with the required inormation.</h4>
      <form className="form" onSubmit={(evento) => sendForm(evento)}>

        <label htmlFor="name">Name </label>
        <input
          className="form-input" 
          name="name" 
          type="text" 
          placeholder="e.g rafting"
          onChange={(evento) => onFormChange(evento)}
        />
        {errs.name && <span className="err"> {errs.name}</span> }
        <br />
        <label htmlFor="difficulty">Difficulty </label>
        <select 
          className="form-select"
          name="difficulty" 
          onChange={(evento) => onFormChange(evento)}
        >
          <option value="default">In a scale of 1-5</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {errs.difficulty && <span className="err"> {errs.difficulty}</span> }
        <br />
        <label htmlFor="duration">Duration </label>
        <input className="form-input" name="duration" type="text" onChange={(evento) => onFormChange(evento)}/>
        <select 
          className="form-select"
          name="time" 
          onChange={(evento) => onFormChange(evento)}
        >
          <option value="default">Expressed in </option>
          <option value="minute/s">minute/s</option>
          <option value="hour/s">hour/s</option>
          <option value="day/s">day/s</option>
        </select>
        {errs.duration && <span className="err"> {errs.duration}</span> }
        <br />
        <label htmlFor="season">Best season to do the activity </label>
        <select
          className="form-select"
          name="season" 
          onChange={(evento) => onFormChange(evento)}
        >
          <option value="default">Select season</option>
          <option value="summer">summer</option>
          <option value="fall">fall</option>
          <option value="winter">winter</option>
          <option value="spring">spring</option>
        </select>
        {errs.season && <span className="err"> {errs.season}</span>}
        <br />
        <br />
        <label htmlFor="inputCountries">Countries: </label>
        <div className="form-country-container" name="inputCountries"> 
          {countries.map((c) => {
            return (
              <div className="form-country" key={c.name} >
                <input 
                  type="button" 
                  value='X' 
                  name={c.name} 
                  onClick={(evento) => (onClose(evento))}
                />
                  <p>{c.name}</p> 
              </div>
            )
          })}
        </div>
        <br />
        <select
          className="form-select" 
          name="countries"
          onChange={(evento) => onCountriesChange(evento.target.selectedOptions[0])}
          disabled={countries.length > 3 ? true : false}
        >
          <option value="default">Select at least 1 country</option>
          {formCountries.length && formCountries.map((c) => <option id={c.id} value={c.name}>{c.name}</option>)}
        </select>
        <br />
        <input
          className="form-send"
          type="submit"
          value='send'
          disabled={!Object.keys(errs).length && countries.length ? false : true}
        />
      </form>
    </div>
  )
}