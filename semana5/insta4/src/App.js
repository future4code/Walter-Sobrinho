import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

//Estilização
const ContainerPagina = styled.div `
display: grid;
grid-template-columns: 1fr 3fr;
margin-top: 30px;
justify-content: center;
`
const ContainerPosts = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerForm = styled.div `
display: flex;
flex-direction: column;
`

//Arrays
const listaDePostsInicial = [
  {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50?a=1",
    fotoPost: "https://picsum.photos/200/150?a=7"
  },
  {
    nomeUsuario: "Dorival_Caymmi",
    fotoUsuario: "https://picsum.photos/50/50?a=2",
    fotoPost: "https://picsum.photos/200/150?a=5"
  },
  {
    nomeUsuario: "Billie Holiday",
    fotoUsuario: "https://picsum.photos/50/50?a=3",
    fotoPost: "https://picsum.photos/200/150?a=6"
  }
]
const listaDePosts = listaDePostsInicial.map((post) => {
  return (
    <Post
    nomeUsuario={post.nomeUsuario}
    fotoUsuario={post.fotoUsuario}
    fotoPost={post.fotoPost}
    />
  )
}
)
//Inputs


class App extends React.Component {
state = {
  valores: [
  <Post/>,
  {    
      valorInputNome: "",
      valorInputFoto: "",
      valorInputImagem: ""  
  }
] 
}
  //Funções dos Inputs

  nomeUsuarioOnChange = event => {
    this.setState({valorInputNome : event.target.value}) 
  }

  fotoPerfilOnChange = event => {
    this.setState({valorInputFoto : event.target.value})
  }

  imagemUploadonChange = event => {
    this.setState({valorInputImagem : event.target.value})
  }

  EnviarForm = () => {
    listaDePosts.push(
    <Post
    nomeUsuario={this.state.valorInputNome}
    fotoUsuario={this.state.valorInputFoto}
    fotoPost={this.state.valorInputImagem}
    />
    )
    this.setState({})
  }

  render () {
const listaDePostsAtualizada = listaDePosts.map((items) => {
return items
}
)
    function Print () {
      console.log(listaDePostsAtualizada)
    }
    return (
    <ContainerPagina>
      <ContainerForm>
        <h2>Novo Post</h2>
        <input 
        value={this.state.valorInputNome}
        onChange={this.nomeUsuarioOnChange}
        placeholder={"Nome do Usuário"}
        />
        <input 
        value={this.state.valorInputFoto}
        onChange={this.fotoPerfilOnChange}
        placeholder={"Foto do Perfil"}
        />
        <input 
        value={this.state.valorInputImagem}
        onChange={this.imagemUploadonChange}
        placeholder={"Imagem para upload"}
        />
        <button onClick={this.EnviarForm}>
          Enviar!
        </button>   
        <button onClick={Print}>
          Teste
          </button>     
      </ContainerForm>
  <ContainerPosts>
    {listaDePostsAtualizada}
  </ContainerPosts>
  </ContainerPagina>
    )
}
}

export default App;
