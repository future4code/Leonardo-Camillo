import React from 'react';
import styled from 'styled-components';

const Imagem = styled.img `
width: 70px;
margin-right: 10px;
border-radius: 50%;`

const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Texto = styled.h4 `
margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <Card>
            <Imagem src={ props.imagem } />
            <div>
                <Texto>{ props.nome }</Texto>
                <p>{ props.descricao }</p>
            </div>
        </Card>
    )
}

export default CardGrande