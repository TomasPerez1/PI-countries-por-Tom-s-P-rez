import {Link} from 'react-router-dom'
import './Redirect.css'

export default function Redirect() {
  return (
    <div className='redirect-container'>
      <h4>The activity has been saved successfully</h4>
      <p>thanks for providing more information to the countries</p>
      <div className='option-container'>
        <Link to='/'><button className='redirect-btn'>Go back home</button></Link>
        <p className='or'>or</p>
        <Link to='/create_activity'><button className='redirect-btn'>Post another activity</button></Link>
      </div>
    </div>
  )
}