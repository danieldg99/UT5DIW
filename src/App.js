import React, { Component } from "react";
import Tabla from './Tabla';
import TablaComp from './TablaComp';

class App extends Component{
    render() {
        return ( 
            <div className="App">
                <h1>¡Ostia pilotes! ¡que son de bones! ¡me encantan!</h1> 
                <h2>Tabla creada con un solo componente</h2>
                <Tabla />
                <h2>Tabla creada con un componente con componentes simples</h2>
                <TablaComp />
            </div>
        )
    }
}


export default App;