import React from 'react';
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  ` 
const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const Container = styled.div `
  width: 40vw;
  margin: 10px 0;
`

const Titulo = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `


function App() {
  return (
    <Corpo>
      <Container>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHahMiEskPCmA/profile-displayphoto-shrink_800_800/0/1566003710526?e=1636588800&v=beta&t=xFFz2PGjJPbD_yafzesWDKNubqht3gtZ6nMypYoWj2I" 
          nome="Leonardo Camillo" 
          descricao="Oi, eu sou o Leonardo Camillo. Tenho 24 anos, mora em Praia Grande-SP e sou estudante de programação pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
        <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-gjpLKb9gT9SrBjbuVeadLLiryONgBWxSg&usqp=CAU"
        nome = "Email:"
        email=" leonardo.camillo@hotmail.com" 
        />

        <CardPequeno
        imagem="https://w7.pngwing.com/pngs/239/958/png-transparent-address-others-cdr-angle-black.png"
        nome = "Endereço:  "
        endereco=" Rua Elidio Julio Batista, n°80"
        />

      </Container>

      <Container>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://vestibulares2021.com.br/wp-content/uploads/2020/01/fatec-2019-1280x720-1.png" 
          nome="Fatec" 
          descricao="Analise de Desenvolvimento de Sistema" 
        />
      </Container>

      <Container>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </Container>
      <GlobalStyle/>
    </Corpo>
    
  );
}

export default App;
