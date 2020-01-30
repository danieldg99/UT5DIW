import React, { Component } from "react";

const TablaCabecera = ()=>{
    return (
        <thead>
            <tr>
                <th colSpan="2">Personaje</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = (props) =>{
    const filas = props.dPersonajes.map((fila, indice)=>{
        return (
            <tr key={indice}>
                <td>{fila.name}</td>
                <td><button onClick={() => props.bPersonaje(indice)}>Borrar</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {filas}
        </tbody>
    )
}

class TablaState extends Component{

    render() {
        const {dPersonajes, bPersonaje} = this.props
        return ( 
            <table className="tablita">
                <TablaCabecera />
                <TablaCuerpo dPersonajes={dPersonajes} bPersonaje={bPersonaje}/>
            </table>
        )
    }
}

export default TablaState;