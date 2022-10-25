import { useEffect } from "react"
import {useDispatch} from 'react-redux'
import { getActivities, getCountries } from "../../Redux/actions"
import List from "./List/List.jsx";
import Searchbar from "./Searchbar/Searchbar";
import './Main.css'

export default function Main() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  },[])

  return ( 
    <div className="main-container">
      <Searchbar/>
      <List/> 
    </div>
  )
}