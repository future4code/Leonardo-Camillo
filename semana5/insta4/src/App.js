import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div`
  margin: 10px
`

class App extends React.Component {
  state = {
    pessoas: [{
      nome:"Paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
    },
    {
      nome:"Fernando",
      fotoUsuario:"https://picsum.photos/50/51",
      fotoPost:"https://picsum.photos/200/151"
    },{
      nome:"Roberto",
      fotoUsuario:"https://picsum.photos/50/52",
      fotoPost:"https://picsum.photos/200/152"
    }],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost:""
  }

  adicionaPessoa = () =>{ 
    const novaPessoa = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    }

    const novasPessoas = [...this.state.pessoas, novaPessoa]
    this.setState({pessoas: novasPessoas, valorInputNome:"", valorInputFotoUsuario:"", valorInputFotoPost:""})
    }

    onChangeInputNome = (event) => {
      this.setState({ valorInputNome: event.target.value })
    }
    onChangeInputFotoUsuario = (event) => {
      this.setState({ valorInputFotoUsuario: event.target.value })
    }
    onChangeInputFotoPost = (event) => {
      this.setState({ valorInputFotoPost: event.target.value })
    }
  render() {
    const postagem = this.state.pessoas.map((usuario) => {
     console.log(usuario)
      return (
        <Post
        nomeUsuario={usuario.nome}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
        />
      )
    })
   
    return (
        <MainContainer>
          <NovoPost>
            <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder="Nome"
            />
             <input 
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder="Foto Usuario"
            />
            <input 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder="Foto Post"
            />
            <button onClick={this.adicionaPessoa}>Adicionar</button>
          </NovoPost>
        {postagem}
      </MainContainer>
    );
  }
}

export default App;
