import React from 'react'
import Navigation_bar from '../shared/navbar'
import {Table, Button} from 'react-bootstrap'

import './general.css'
import './Resources.css'

export default function Resources() {
    return (
        <div>
            <Navigation_bar/>
            <ul style={{  padding: '10px 2%',  listStyle: 'none',  backgroundColor:'#001F3D', color: 'white', flexDirection:'row', display:'flex'}}>
                <li style={{marginRight:'5px'}}><a href="/home"> Home</a> / </li>
                <li style={{marginRight:'5px'}}>Recursos</li>
            </ul>
            <h2 id="titulo_modulo">Recursos</h2>
            <div id="container_filtros" class='row mt-4'>
                <h3 class="col-12 mb-4">Filtrá tu búsqueda</h3>
                <div class='col-12 col-lg-3' id='filtro_texto'>
                    <input placeholder="Nombre..." style={{float:'left'}}></input>
                </div>
                <div class="col-12 col-lg-3">
                    <input placeholder="Apellido..." style={{float:'left'}}></input>
                </div>
                <div class="col-12 col-lg-3">
                    <input placeholder="Legajo..." style={{float:'left'}}></input>
                </div>
                <div class="col-12 col-lg-3" id="boton_busqueda_cont">
                <Button className='boton_oscuro'>Buscar</Button>{' '}
                </div>
            </div>
            <div id="table_container" class="col-12 mt-4">
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Legajo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Franco</td>
                        <td>Batastini</td>
                        <td>103775</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Agustin</td>
                        <td>Hejeij</td>
                        <td>333333</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Esteban</td>
                        <td>Peña</td>
                        <td>444444</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
