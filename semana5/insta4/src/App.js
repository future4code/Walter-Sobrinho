import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?a=1",
      fotoPost: "https://picsum.photos/200/150?a=4"
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
};

  render () {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        post.nomeUsuario,
        post.fotoUsuario,
        post.fotoPost
        )
    })
    
return (
  <div className={'app-container'}>
        <Post
        nomeUsuario={this.listaDePosts.nomeUsuario}
        fotoUsuario={this.listaDePosts.fotoUsuario}
        fotoPost={this.listaDePosts.fotoUsuario}
        />
      </div>
    );
}
}
export default App;
