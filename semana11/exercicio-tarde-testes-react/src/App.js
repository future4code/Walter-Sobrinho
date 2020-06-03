import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, toggleErrorMsg] = useState(false);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    toggleErrorMsg(!errorMsg);
    if (inputValue === "") {
    } else {
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false,
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      setInputValue("");
    }
    console.log(errorMsg);
  };

  const deletePost = (postId) => {
    // Apaga um post da lista
    const newPostsList = postsList.filter((post) => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = (postId) => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map((post) => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked,
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
        {errorMsg ? (
          <p id="error-msg">Você não pode enviar posts vazios.</p>
        ) : (
          <></>
        )}
      </div>
      <br />
      {postsList.length > 0 ? (
        <p>Quantidade de posts: {postsList.length}</p>
      ) : (
        <></>
      )}
      {postsList.length > 0 ? (
        postsList.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              toggleLike={toggleLike}
              deletePost={deletePost}
            />
          );
        })
      ) : (
        <div>Nenhum post</div>
      )}
    </div>
  );
};

export default App;
