const autor = document.getElementById("nome");
const titulo = document.getElementById("titulo");
const tags = document.getElementById("tags");
const post = document.getElementById("post");

const postCompleto = {
    autor: autor,
    titulo: titulo,
    tags: tags,
    post: post
}

function botaoPost(ev) {
    const postArea = document.getElementById("post-area");
    postArea.innerHTML += "<p>" + postCompleto.post.value + "</p>"
    let meuArray = []
    meuArray.push(postCompleto.autor.value)
    meuArray.push(postCompleto.titulo.value)
    meuArray.push(postCompleto.tags.value)
    meuArray.push(postCompleto.post.value)
    console.log(meuArray)
}


