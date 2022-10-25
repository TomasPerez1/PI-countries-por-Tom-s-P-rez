import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Country from "./Country/Country.jsx";
import pagination from "./pagination.js";
import './List.css';

export default function List() {
  let [pag, setPag] = useState(0);
  let {countries, modifiedCountries} = useSelector((state) => state);
  
  useEffect(() => {
    setPag(0)
  }, [modifiedCountries]);


  if(typeof(modifiedCountries) === 'string') return (<h4 className="search-err">{modifiedCountries}</h4>);
  let paginated = modifiedCountries.length ? pagination(modifiedCountries) : pagination(countries);

  return (
    <div className="list-conatiner">

      <div className="countries-container">
        {
          paginated.length && paginated[pag] ? paginated[pag].map((c) => <Country  country={c} key={c.id}/>)
          : <h1 className="loading">Loading...</h1>
        }
      </div>
      {
        paginated.length ? 
        <div className="pagination">
          <button className="previous-next" onClick={() => setPag(pag - 1)} disabled={pag < 1 ? true : false}>
            Previous
          </button>
          <div>
            {paginated.map((set) => {
              let index = paginated.indexOf(set)
              return  <button 
                      className={index === pag ? "active-n-btn" : "n-btn"} 
                      onClick={() => setPag(index)} key={set[0].id}
                      >
                      {index + 1}
                      </button>
            })}
          </div>
          <button className="previous-next" onClick={() => setPag(pag + 1)} disabled={pag === paginated.length  - 1 ? true : false}>
            Next
          </button>
        </div>
        : null
      }
    </div>
  )
};