import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Upa... 😬</h2>
            <p>Esta página no existe, fijate si el link esta bien. <br /> Sino, hace click <Link className='not-found--p' to='/'>acá</Link> para ir al inicio.</p>
        </div>
    );
}
 
export default NotFound;