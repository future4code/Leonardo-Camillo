import React from "react";
import Registro from "./components/Registros"
import Usuarios from "./components/Usuarios"
import axios from "axios";

const header = {
  headers: {
    Authorization: "leo-camillo-maryam"
  }
}

export default class App extends React.Component{
  state = {
    listaNomes: [],
    inputNovoNome: "",
    inputNovoEmail: "",
  }
componentDidMounter() {
  this.getAllUsers()
}

onChangeInputNovoNome = (event) => {
  this.setState({inputNovoNome: event.target.value})
}
onChangeInputNovoEmail = (event) => {
  this.setState({inputNovoNome: event.target.value})
}

createUsers = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const body = {
    name: this.state.inputNovoNome,
    email: this.state.inputNovoEmail
  }
axios.post(url,body,header)
.then((res) => {
  this.setState({inputNovoNome:"", inputNovoEmail:""})
  this.getAllUsers()
})
.catch((err) => {
  console.log("Erro")
})
}

getAllUser = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  axios.get(url)
  .then((res) => {
    this.setState({listaNomes: res.data})
  })
  .catch((err) => {
    console.log("Erro")
  })
}

rennder() {
  return (
    <div>
      <Registro
      inputNovoNome={this.state.inputNovoNome}
      inputNovoEmail={this.state.inputNovoEmail}
      onChangeInputNovoNome={this.onChangeInputNovoNome}
      onChangeInputNovoemail={this.onChangeInputNovoEmail}
      listaNomes={this.state.listaNomes}
      createrUser={this.createUsers}
      />
      <hr />
      <Usuarios
      inputNovoNome={this.state.inputNovoNome}
      inputNovoEmail={this.state.inputNovoEmail}
      onChangeInputNovoNome={this.onChangeInputNovoNome}
      onChangeInputNovoemail={this.onChangeInputNovoEmail}
      listaNomes={this.state.listaNomes}
      createrUser={this.createUsers}
      />
    </div>
  )   
}
}


