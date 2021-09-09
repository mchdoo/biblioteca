import { Link } from 'react-router-dom';
import { Divider, Tooltip } from '@material-ui/core';

const LibroList = ({libros}) => {

    return (
        <div className="libros">
            
            {libros.length === 0 && <p style={{
                color: 'red',
                fontWeight: '700',
                fontSize: '20px'
            }} >No se econtraron libros</p> }

            {libros.map((libro) => (
                <div className='libro-preview' >
                    <div className="titulo">
                        <h2 title={libro.titulo} >{libro.titulo}</h2>
                    </div>
                    <Divider className='hide-for-mobile' orientation='vertical' flexItem/>
                    <div className="autor hide-for-mobile">
                        <p>Escrito por {libro.autor}</p>
                    </div>
                    <Divider className='hide-for-mobile' orientation='vertical' flexItem/>
                    <div className="info hide-for-mobile">
                        {!libro.saga && <p>{libro.info}</p>}
                        {libro.saga && <p>De "{libro.tituloSaga}"</p>}
                    </div>
                    <Tooltip title='Info' >
        
                        <Link 
                            className='mas-info' 
                            to={`/libros/${libro.id}`}><span class="material-icons">info</span>
                        </Link>
                    </Tooltip>

                </div>
            ))}
        </div>  

    );
}
 
export default LibroList;