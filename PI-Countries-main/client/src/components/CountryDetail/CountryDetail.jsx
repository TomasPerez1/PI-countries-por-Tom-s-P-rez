import {useDispatch, useSelector} from 'react-redux';
import { resetDetail } from '../../Redux/actions';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import './CountryDetail.css'

export default function CountryDetail() {
  const dispatch = useDispatch();
  const {countryDetail} = useSelector((state) => state);
  let {id, name, img, region, subregion, capital, population, area, activities} = countryDetail;

  useEffect(() => {
    return () => {
      dispatch(resetDetail)
    }
  }, []);

  return (
    <>
    {
      !countryDetail.name ? <h1 className='detail-loader'>Loading . . .</h1> 
      : <div className='detail-container'>
          <div className='flag-container'>
            <Link to='/main'><button className='x'>x</button></Link>
            <h2 className='d-title'>{name}</h2>
            <img className='d-flag' src={img} alt="flag of the country" />
          </div>

          <div className='items-container'>
            <p className='item'>Id: {id}</p>
            <p className='item'>Region: {region}</p>
            <p className='item'>SubRegion: {subregion}</p>
            <p className='item'>Capital: {capital}</p>
            <p className='item'>Population: {population}</p>
            <p className='item'>Area: {`${area} km2`}</p>
          </div>
          
          <div className='activities-container'>
            <h3 className='actv-title'>Turistic Activities: </h3>
            {activities.length ?
              activities.map((a) => 
                <div className='activity'>
                  <h4 className='actv-sub-title'>{a.name}</h4>
                  <p className='a'>difficulty: {a.difficulty}</p>
                  <p className='a'>duration: {a.duration}</p>
                  <p className='a'>season: {a.season}</p>
                </div>
              )
              : <h4 className='non-activity'>{name} dosen't have any activities saved.</h4>
            }
          </div>  
        </div>
    }
    </>
    
  )
};


