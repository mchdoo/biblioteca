import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import logo from './icons/PibliotecaFavicon.svg';


const HomeNavbar = () => {

    // const hayScroll = true;

    // const scroll = () => {

    //     const navbar = document.querySelector('.navbar.first');

    //     if (window.scrollY > 80) {
    //         navbar.classList.add('scrolled')
    //     } else if (window.scrollY < 80) {
    //         navbar.classList.remove('scrolled')
    //     } else {
    //         return;
    //     }
    // }

    // if (hayScroll) {
    //     window.addEventListener('scroll', scroll);
    // } else {
    //     return;
    // }

    return (
        <nav className="navbar first scrolled">
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

export default HomeNavbar;