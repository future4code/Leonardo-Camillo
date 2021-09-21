import React from "react";
import styled from "styled-components";

export default class Registros extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button>Ir para a Pagina de Lista</button>
                </div>
                <div>
                <label>Nome</label>
                <input 
                value={this.props.inputNovoNome}
                onChange={this.props.onChangeInputNovoNome}
                />
                <label>Email</label>
                <input 
                value={this.props.inputNovoEmail}
                onChange={this.props.onChangeInputEmail}
                />
                <button onClick={() => this.props.createrUsers}>Salvar</button>
                </div>
            </div>  
        )
    }
}
