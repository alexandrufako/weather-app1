import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-container">
            <Link to='/' className='footer-btn'>Home</Link>
            <Link to='/search' className='footer-btn'>S</Link>
            <Link to='/forecast' className='footer-btn'>FR</Link>
            <Link to='/settings' className='footer-btn'>Set</Link>
        </div>

    )
}

export default Footer;