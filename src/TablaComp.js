import React, { Component } from "react";
const TablaCabecera = ()=>{
    return (
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
        </tr>
    </thead>
    )
}

const TablaCuerpo = ()=>{
    return (
        <tbody>
            <tr>
                <td>Daniel</td>
                <td>Delgado</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Miguel</td>
                <td>Delgado</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Ivan</td>
                <td>Delgado</td>
                <td>20</td>
            </tr>
        </tbody>
    )
}

class TablaComps extends Component{
    render(){
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo />
            </table>
        )
    }
}

export default TablaComps;