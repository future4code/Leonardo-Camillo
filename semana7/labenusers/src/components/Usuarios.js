import React from "react"
import styled from "styled-components"
import axios from "axios"


export default class Usuarios extends React.Component {
    render() {
        const listaNomes = listaNomes.map((i) => {
            return <li key={i.id}>{i.name}</li>
        })    
        return (
            <div>
                <button>Ir para a Página de Registro</button>
                <div>
                    <h3>Usuários: </h3>
                    {listaNomes}
                </div>
            </div>
        )
    }
}