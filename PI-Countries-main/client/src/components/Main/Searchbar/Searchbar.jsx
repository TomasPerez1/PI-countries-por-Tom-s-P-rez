import { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getFormCountries, searchCountries} from '../../../Redux/actions.js';
import {onRegionChange, onActivityChange, resetSelect, onAzChange, onPopulationChange, onInputChange} from './searchbarLogic.js';
import './Searchbar.css'

export default function Searchbar() {
  const dispatch = useDispatch()
  const refRegion = useRef(); const refActivity = useRef(); const refAz = useRef(); const refPopulation = useRef(); const refInput = useRef();
  let [input, setInput] = useState('')
  let {activities} = useSelector((state) => state)

  
  useEffect(() => {
    return () => {
      dispatch(getFormCountries())
    }
  }, [])

  return (
    <nav className="searchbar-nav">
      <div className="searchbar-select-container">
      <select 
        id="region" 
        ref={refRegion}
        onChange={(evento) => evento.target.value !== 'default' ? onRegionChange(evento, dispatch) : null}
      > 
        <option value="default">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select 
        id="activity" 
        ref={refActivity}
        onChange={(evento) => evento.target.value !== 'default' ? onActivityChange(evento, dispatch) : null}
      >
        <option value="default">Filter by activity</option>
        {activities.map((a) => <option key={a} value={a}> {a} </option>)}
      </select>

      <select 
        id="alphabet" 
        ref={refAz}
        onChange={(evento) => evento.target.value !== 'default' ? onAzChange(evento, dispatch) : null}
      >
        <option value="default">Sort by</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select 
        id="population"
        ref={refPopulation}
        onChange={(evento) => evento.target.value !== 'default' ? onPopulationChange(evento, dispatch) : null}
      >
        <option value="default">Sort by</option>
        <option value="+">population ↑</option>
        <option value="-">population ↓</option>
      </select>
      <button className="searchbar-reset" onClick={() => resetSelect([refRegion, refActivity, refAz, refPopulation, refInput], dispatch)}>reset</button>
      </div>
      <div className="searchbar-input-cotainer">
        <input 
          type="text"
          placeholder="search countries by name"
          className="searchbar-input"
          id="search"
          ref={refInput}
          onChange={(evento) => evento.target.value !== '' ? onInputChange(evento.target.value, setInput) : null}
        />
        <button 
        className="searchbar-search"
        onClick={() => {
          if(input.length) {
            resetSelect([refRegion, refActivity, refAz, refPopulation], dispatch)
            input.length && dispatch(searchCountries(input))
          }
        }}
        >
          search
        </button>
      </div>
    </nav>
  )
}