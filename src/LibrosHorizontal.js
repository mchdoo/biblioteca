import { Link } from 'react-router-dom';;

const LibrosHorizontal = ({libros}) => {
    return ( 
        <div className="libros--horizontal">
            {libros.map((libro) => (
                <div>
                    <Link to={`/libros/${libro.id}`}>
                        <div className="libro-component">
                            <div className="titulo">
                                <h2 title={libro.titulo} > {libro.titulo} </h2>
                            </div>
                            <p> { libro.autor } </p>
                            <p style={{
                                opacity: '0.4',
                                fontSize: '15px'
                            }} > { libro.genero } </p>
                        </div>  
                    </Link>
                </div>
                    
            ))}
        </div>
    );
}
 
export default LibrosHorizontal;