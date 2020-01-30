import React, { Component } from "react";
import Tabla from './Tabla';
import TablaComp from './TablaComp';
import TablaProps from './TablaProps';
import TablaState from './TablaState';

class App extends Component{
    state = {
        personajes:[
            { name: 'Payton Hobart', }, { name: 'Wendy Carr', }, { name: 'Mina', }, { name: 'Jonathan Harker', }, { name: 'Drácula', }, { name: 'Once', }, { name: 'Jim Hopper', }
        ]
    }

    borrarPersonaje = indice => {
        const {personajes} = this.state

        this.setState({
            personajes: personajes.filter((personaje, i)=>{
                return i !== indice
            })
        })
    }

    render() {
        const actores = [{ nombre: 'Joel', apellidos: 'Edgerton'}, { nombre: 'Carmen', apellidos: 'Maura' }, { nombre: 'Luis', apellidos: 'Tosar' }, { nombre: 'Chloe', apellidos: 'Grace Moretz' }];
        const {personajes} = this.state
        return ( 
            <div className="App">
                <h1>¡Ostia pilotes! ¡que son de bones! ¡me encantan!</h1> 
                <h2>Tabla creada con un solo componente</h2>
                <Tabla />
                <h2>Tabla creada con un componente con componentes simples</h2>
                <TablaComp />
                <h2>Tabla creada mediante un componente de clase que utiliza paso de parametros con props</h2>
                <TablaProps dActores = {actores}/>
                <h2>Tabla creada mediante un componente de clase que utiliza paso de parametros con State</h2>
                <TablaState dPersonajes = {personajes} bPersonaje = {this.borrarPersonaje}/>
            </div>
        )
    }
}


export default App;