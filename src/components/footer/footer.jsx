import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi' 
import { FiSearch } from 'react-icons/fi' 
import { MdAutoGraph } from 'react-icons/md' 
import { FiSettings } from 'react-icons/fi' 
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <Link to='/' className='footer-btn'>< FiHome /></Link>
            <Link to='/search' className='footer-btn'><FiSearch/></Link>
            <Link to='/forecast' className='footer-btn'><MdAutoGraph/></Link>
            <Link to='/settings' className='footer-btn'><FiSettings/></Link>
        </div>

    )
}

export default Footer;