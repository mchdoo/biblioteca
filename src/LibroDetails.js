import { useHistory, useParams } from "react-router-dom";
import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Chip, Divider } from "@material-ui/core";
import useFetch from "./useFetch";
import { useState } from "react";

const LibroDetails = () => {
    const { id } = useParams()
    const { data: libro, error, isLoading } = useFetch('http://192.168.1.28:8000/libros/' + id)
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleDelete = () =>{
        fetch('http://192.168.1.28:8000/libros/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');  
        })
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return ( 
        <div className="content">

            <div className="libro-details">
                {/* {isLoading && <CircularProgress className='loading' variant='indeterminate' color='primary'/> } */}
                {error && <div>{ error }</div> }
                {libro && (
                    <div>
                        <section>
                            <h1>{libro.titulo}</h1>
                            <p>{libro.info}</p>
                        </section>

                        <aside className='info'> 
                            <span className="material-icons logoinfo">info</span> <br />
                            <p> Escrito por { libro.autor } </p> 
                            <Divider />
                            <p>Está en <b>{libro.columna}-{libro.fila}</b></p>
                            <Divider/>
                            {libro.saga && <p>pertenece a la saga de {libro.tituloSaga}</p> } 
                            {libro.saga && <Divider /> }
                            <br /> <Chip variant='outlined' color='primary' label={libro.genero} />
                        </aside>
                    </div>
                    
                )}


                {isLoading && <CircularProgress  />}

                {!isLoading && (<Button
                    size='small'
                    variant='outlined'
                    color='secondary'
                    disableElevation
                    onClick={handleOpen}
                    startIcon={ <span className='material-icons'>delete_forever</span> }> Delete</Button>)}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Para volver a ver el libro, vas a tener que volver a registrarlo.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color='default' onClick={handleClose} >
                            Cancelar
                        </Button>
                        <Button onClick={handleDelete} variant='contained' color='secondary' >
                        Eliminar 
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
 
export default LibroDetails;