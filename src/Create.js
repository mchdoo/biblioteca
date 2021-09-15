import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Checkbox, Button, FormControlLabel } from '@material-ui/core';

const Create = () => {

    const hayScroll = false;

    const [titulo, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [info, setInfo] = useState('');
    const [genero, setGenero] = useState('Fantástico');
    const [columna, setColumna] = useState('');
    const [fila, setFila] = useState('');
    const [saga, setSaga] = useState(false);
    const [tituloSaga, setTituloSaga] = useState('')

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    function toggleSaga() {
        setSaga(!saga);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const libro = {titulo, autor, genero, info, columna, fila, saga, tituloSaga};

        setIsPending(true)

        fetch('http://192.168.1.28:8000/libros', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(libro)
        }).then(() => {
            console.log('added')
            setIsPending(false);
            history.push('/')

        })
    }

    return ( 
        <div className='content'>
            <div className="create">
                <h2>Agregá un libro</h2>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <label>Título</label>
                            <input 
                                type="text" 
                                required
                                placeholder='Ex. Harry Potter'
                                value={titulo}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                        </Grid>


                        <Grid item xs={12} >
                            <label>Autor</label>
                            <input 
                                type="text" 
                                required
                                placeholder='Ex. J.K. Rowling'
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <label>Ubicación</label>

                        </Grid>

                        <Grid item xs={6}>
                            <label className='segunda-label' >Columna</label>
                            <input type="text" 
                                placeholder='Ex. A'
                                value={columna}
                                required    
                                onChange={(e) => setColumna((e.target.value).toUpperCase())}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label className='segunda-label' >Fila</label>
                            <input type="text" 
                                placeholder='Ex. 3' 
                                value={fila}
                                onChange={(e) => setFila(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <label>Info</label>
                            <textarea 
                                placeholder='¿Cuál es el tema que trata el libro?'
                                value={info} 
                                onChange={(e) => setInfo((e.target.value))}
                            ></textarea>
                        </Grid>

                        <Grid item xs={4}>
                            <FormControlLabel
                                control={<Checkbox checked={saga} onChange={toggleSaga} />}
                                label='Es saga'
                            >
                            </FormControlLabel>
                        </Grid>

                        {saga && (
                            <Grid item xs={8}>
                                <input 
                                    type="text" 
                                    placeholder='Pertenece a la saga de...'
                                    value={tituloSaga}
                                    onChange={(e) => setTituloSaga(e.target.value)}
                                />
                            </Grid>
                        )}
                            

                    </Grid>

                    <label>Género</label>
                    <select 
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        <option value="Fantástico">Fantástico</option>
                        <option value="Terror">Terror</option>
                        <option value="Suspenso">Suspenso</option>
                        <option value="Romántico">Romántico</option>
                        <option value="Policial">Policial</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Infografía">Infografía</option>
                        <option value="Para Niños">Para niños</option>
                    </select>

                    {!isPending && <Button onClick={handleSubmit} variant='contained' color='primary' >Añadir libro</Button>}
                    {isPending && <Button disabled>Agregando libro...</Button>}


                </form>

            </div>
        </div>
    );
}
 
export default Create;