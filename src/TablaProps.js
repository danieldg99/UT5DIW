import React, { Component } from "react";

const TablaCabecera = ()=>{
    return (
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
        </tr>
    </thead>
    )
}

const TablaCuerpo = props =>{
    const filas= props.datosActores.map((fila, indice) =>{
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    })
    return (
        <tbody>
            {filas}
        </tbody>
    )
}

class TablaProps extends Component{
    render() {
        const {dActores} = this.props
        return ( 
            <table className="tablita">
                <TablaCabecera />
                <TablaCuerpo datosActores={dActores}/>
            </table>
        )
    }
}

export default TablaProps;