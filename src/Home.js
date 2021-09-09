import React from 'react';
import { Button, CircularProgress } from "@material-ui/core"
import LibrosHorizontal from './LibrosHorizontal'
import useFetch from './useFetch'
import { Link } from "react-router-dom"

import BlobOne from './img/Path 1.svg';
import BlobTwo from './img/Path 5.svg';


function Home()  {
    
    const { data: libros, isLoading, error } = useFetch('http://192.168.1.28:8000/libros')
    
    return (
        <div className='hero'>
            <div className="content">
                <section className='hero--section'>
                    <h1 className='hero--header' >Biblioteca</h1>
                    <div className="divider"></div>
                    <p className='hero--subtitle'>literalmente todos los libros en mi casa</p>
                    <Link to="/libros" ><Button  className='hero--button' variant='contained' >Buscar Libros</Button></Link>
                </section>

                <div className="blobs">
                    <img src={BlobOne} className='blobs one hide-for-mobile' alt="Blob" />
                    <img src={BlobTwo} className='blobs two hide-for-mobile' alt="Blob" />
                </div>

                <section className="filtros">
                    <div className="content--inner">
                        <p className='subtitulo' >fantástico</p>
                        {libros && <LibrosHorizontal libros={libros}/>}
                        {!libros && <CircularProgress /> }
                    </div>
                    {/* libros && <div> {libros.map((libro) => (<p> {libro.autor} </p>))} </div> */}
                </section>
            </div>    
        </div>
        
    )
}
 
export default Home;