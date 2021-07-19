import React from 'react'
import Navigation_bar from '../shared/navbar'
import {Table, Button, DropdownButton, Dropdown} from 'react-bootstrap'

import './general.css'
import './CargaDeHoras.css'

export default function Resources() {
    return (
        <div>
            <Navigation_bar/>
            <ul style={{  padding: '10px 2%',  listStyle: 'none',  backgroundColor:'#001F3D', color: 'white', flexDirection:'row', display:'flex'}}>
                <li style={{marginRight:'5px'}}><a href="/home"> Home</a> / </li>
                <li style={{marginRight:'5px'}}><a href="/recursos"> Recursos</a> / </li>
                <li style={{marginRight:'5px'}}>Carga de horas</li>
            </ul>
            <h2 id="titulo_modulo">Horas cargadas</h2>
            <div id="container_filtros" class='row mt-4'>
                <h3 class="col-12 mb-4">Filtrá tu búsqueda</h3>
                <DropdownButton title="Periodo de carga..." id="dropdown_fechas" className='col-12 col-lg-4'>
                    <Dropdown.Item eventKey="1">2021 - 01 - Semana 4</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2021 - 01 - Semana 4</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2021 - 01 - Semana 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2021 - 01 - Semana 2</Dropdown.Item>
                </DropdownButton>
                <div class='col-12 col-lg-4' id='filtro_texto'>
                    <input placeholder="Tarea realizada..." style={{float:'left'}}></input>
                    <Button className='boton_oscuro' style={{float:'left'}}>Buscar</Button>{' '}
                </div>
                <div class="col-12 col-lg-4">
                    <Button id='boton_de_carga' className='boton_oscuro'>Cargar Horas</Button>{' '}
                </div>
            </div>
            <div id="table_container" class="col-12 mt-4">
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Tarea</th>
                        <th>Horas</th>
                        <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Cargar Musica</td>
                        <td>8</td>
                        <td>01/01/2021</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Vender a Clientes</td>
                        <td>4</td>
                        <td>02/01/2021</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Editar usuario</td>
                        <td>5</td>
                        <td>03/01/2021</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}