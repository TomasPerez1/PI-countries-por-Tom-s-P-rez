import {Link} from 'react-router-dom'
import './Landing.css';

export default function Landing() {
  return (
    <div className='landing-backgorund'>
      <div className='landing-sign'>
        <h1 className='landing-title'>Welcome to Countrybrary!</h1> 
        <h4 className='landing-title'>the library where you can find information about any country</h4>
        <Link to='/main'>
          <button className='normal-btn'>let's go!</button>
        </Link>
      </div>
    </div>
  )
};