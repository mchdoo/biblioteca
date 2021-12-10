import LibroList from './LibroList';
import useFetch from './useFetch'
import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const Library = () => {

    const hayScroll = false;

    const { data: libros, isLoading, error } = useFetch('https://my-json-server.typicode.com/mchdoo/json-server-db/libros')

    const [search, setSearch] = useState('');

    return (

        
        <div className="content">

            <div className="search">
                <input className='searchbar' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                <span className='material-icons'>search</span>
            </div>
            
            <h1>Libros</h1>
            {error && <div>{error}</div> }
            {isLoading && (<CircularProgress className='loading' variant='indeterminate' color='primary'/>)}

            {libros && <LibroList libros={libros.filter((libro) => {
                    return libro.titulo.toLowerCase().includes(search.toLowerCase()) || libro.autor.toLowerCase().includes(search.toLowerCase()) || libro.tituloSaga.toLowerCase().includes(search.toLowerCase())
            })} />}

        </div>
    );
}
 
export default Library;