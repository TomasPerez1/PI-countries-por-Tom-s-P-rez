import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header-div'>
      <h2 className='header-title'>Countrybrary, the free country library</h2>
      <Link to='/create_activity'><button className='header-btn'>create activity</button></Link>
    </div>
  )
};