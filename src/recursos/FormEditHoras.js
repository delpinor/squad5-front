import React, {useState} from 'react'
import NavigationBar from '../shared/navbar'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Button, Modal} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams, useHistory} from "react-router-dom";


import './FormCargaHoras.css'

let id_proy_seleccionado;
let id_tarea_seleccionada;

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}



function AsynchronousProyecto() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://project-squad5.herokuapp.com/api/projects/');
            const proyectos = await response.json();

            if (active) {
                setOptions(Object.keys(proyectos.data).map((key) => proyectos.data[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="combo-box-proyectos"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            onChange={(event, value) => {
                if(value == null){
                    id_proy_seleccionado = null;
                    document.getElementById('combo-box-tareas').setAttribute('disabled', 'disabled');
                }else {
                    id_proy_seleccionado = value.id;
                    document.getElementById('combo-box-tareas').removeAttribute('disabled');
                }}}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Proyecto en el que se trabaj??..."
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

function AsynchronousTarea() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://project-squad5.herokuapp.com/api/projects/'+id_proy_seleccionado+'/tasks');
            const tareas = await response.json();

            if (active) {
                setOptions(Object.keys(tareas).map((key) => tareas[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="combo-box-tareas"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                if(id_proy_seleccionado == null){
                    document.getElementById('combo-box-tareas').setAttribute('disabled', 'disabled');
                    setOpen(false);
                }else{
                    setOpen(true);
                }
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            onChange={(event, value) => {
                if(value == null){
                    id_tarea_seleccionada = null;
                }else {
                    id_tarea_seleccionada = value.task_id;
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Tarea realizada..."
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

export default function FormEditHoras(){

    let json = {'titulo': 'Correcto', 'mensaje': 'Actualizacion correcta', 'tipo': 'sucess', 'redirect': '/recursos/horas' }
    const [data, setData] = useState(json);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    let history = useHistory();

    let {id} = useParams();

    async function editar_horas(){
        const response = await postData('https://psa-carga-de-horas.herokuapp.com/horas/'+{id}.id,
        {"fecha": (new Date(document.getElementById('fecha_carga').value.substr(0,4), document.getElementById('fecha_carga').value.substr(5,2) -1, document.getElementById('fecha_carga').value.substr(8,2))).toISOString(),
        "horas": document.getElementById('input_horas').value,
        "legajoPersona": 1, //Esto ser??a el del user si estuviese implementado el login
        "proyecto": id_proy_seleccionado,
        "tarea": id_tarea_seleccionada,
        "nombreTarea": document.getElementById('combo-box-tareas').value});
        if (response.status === 500){
            setData({'titulo': 'Error', 'mensaje': 'Por favor complete todos los campos', 'tipo': 'error', 'redirect': ''});
        }
        else if (!response.idCarga) {
            setData({'titulo': 'Error', 'mensaje': response.message, 'tipo': 'error', 'redirect': '' });
        }
        else {
            setData({'titulo': 'Correcto', 'mensaje': 'Carga '+{id}.id+' modificada correctamente' , 'tipo': 'success', 'redirect': '/recursos/horas'});
        }
        handleShow();
    }


    function handleClose() {
        setShow(false);
        if (data.redirect !== '')
            history.push(data.redirect);
    }

    let hoy = new Date().toISOString().split("T")[0];


    return (
        <div>
            <NavigationBar />
            <ul style={{  padding: '10px 5%',  listStyle: 'none',  backgroundColor:'#E0E0E0', color: 'black', flexDirection:'row', display:'flex'}}>
                <li style={{marginRight:'5px'}}><a href="/home"> Home</a> / </li>
                <li style={{marginRight:'5px'}}><a href="/recursos"> Recursos</a> / </li>
                <li style={{marginRight:'5px'}}><a href="/recursos/horas">Horas</a> / </li>
                <li style={{marginRight:'5px'}}>Edici??n de Horas</li>
            </ul>
            <h2 id="titulo_modulo">Edici??n de Horas</h2>
            <div className={"row d-flex justify-content-around mt-4"}>
                <div className={"col-12 col-lg-5"}>
                    <div className={"mt-3"}>
                        <label>Ingrese el proyecto en el que trabaj??</label>
                    </div>
                    <div>
                        <AsynchronousProyecto/>
                    </div>
                    <div className={"mt-3"}>
                        <label>Ingrese la tarea en la cu??l trabaj??</label>
                    </div>
                    <div>
                        <AsynchronousTarea/>
                    </div>
                    <div className={"mt-3"}>
                        <label>Ingrese las horas trabajadas</label>
                    </div>
                    <div>
                        <input id="input_horas" type={"number"}/>
                    </div>
                </div>
                <div className={"col-12 col-lg-5 mt-4"}>
                    <label>Fecha en la que se trabaj??:</label>
                    <br/>
                    <input id={"fecha_carga"} type={"date"} max={hoy} defaultValue={hoy}/>
                </div>
            </div>
            <div className={"row d-flex justify-content-around mt-4"}>
                <Button className={"boton_oscuro btn"} size={"lg"} onClick={editar_horas}>Editar mis horas</Button>
            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.mensaje}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={'btn btn-' + data.tipo} onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}