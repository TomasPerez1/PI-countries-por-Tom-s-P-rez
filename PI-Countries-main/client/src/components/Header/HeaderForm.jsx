import {Link} from 'react-router-dom';
import './Header.css';

export default function HeaderForm() {
  return (
    <div className='header-div'>
      <h2 className='header-title'>Countrybrary, the free country library</h2>
      <Link to='/main'><button className='header-btn'>countries list</button></Link>
    </div>
  )
}