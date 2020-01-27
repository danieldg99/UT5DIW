import React, { Component } from "react";

class Tabla extends Component{
    render() {
        return ( 
            <table className="tablita">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}


export default Tabla;