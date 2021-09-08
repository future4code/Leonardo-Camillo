import React from 'react';
import styled from 'styled-components';

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
`
const Card = styled.div`
    display: flex;
    align-items: center; 
    border: 1px solid black;
    height: 100px;
    margin-top: 8px;
    padding-left: 20px;
`
const P = styled.h4`
    padding-right: 3px;
`

function CardPequeno(props) {
    return (
        <Card>
             <Imagem src={ props.imagem } />
             <P> {props.nome}</P>
             <div>
                {props.email}
                {props.endereco}
             </div>
        </Card>
    )
}

export default CardPequeno;