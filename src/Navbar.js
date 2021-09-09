import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import logo from './icons/PibliotecaFavicon.svg';


const Navbar = () => {

    const hayScroll = false;

    return (
        <nav className="navbar">
            <div>

                <img src={logo} alt="favicon" className="logo" />
                
            </div>

            
            <div >

                <Tooltip aria-label='home' title='Home' >
                    <Link to='/'><span className="material-icons">home</span></Link>
                </Tooltip>
                <Tooltip aria-label='books' title='Books' >
                    <Link to="/libros"><span className="material-icons">search</span></Link>
                </Tooltip>
                <Tooltip title='Añadir libro' aria-label='create book' >
                    <Link to="/create"><span className="material-icons">add_circle</span></Link>
                </Tooltip>

            </div>
        </nav>
    );
    
}

export default Navbar;