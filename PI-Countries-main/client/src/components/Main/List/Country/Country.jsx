import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getCountryDetail} from "../../../../Redux/actions.js";
import './Country.css';

export default function Country(props) {
  const dispatch = useDispatch();
  const {id, name, img, region} = props.country;
  
  return (
    <div className='country'>
      <NavLink
        className='country-link' 
        key={id} 
        to='/detail'
        onClick={() => dispatch(getCountryDetail(id))}
      >
        <h4 
          className="country-name" 
          title={`view more information of ${name}`}
        >
          {name}
        </h4>
      </NavLink>
      <img className="flag" src={img} alt="flag of the country"/>
      <p className="region">Region: {region}</p>
    </div>
  )
};