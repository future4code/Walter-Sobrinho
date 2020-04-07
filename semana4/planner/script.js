function adicionarTarefa () {
    const input = document.getElementById("input");
    const dia = document.getElementById("week").value;
    const domingo = document.getElementById("domingo");
    const segunda = document.getElementById("segunda");
    const terca = document.getElementById("terca");
    const quarta = document.getElementById("quarta");
    const quinta = document.getElementById("quinta");
    const sexta = document.getElementById("sexta");
    const sabado = document.getElementById("sabado");

    if (dia === "domingo") {
    domingo.innerHTML += "<li>" + input.value + "</li>"
        } else if (dia === "segunda") {
        segunda.innerHTML += "<li>" + input.value + "</li>"
        } else if (dia === "terça") {
        terca.innerHTML += "<li>" + input.value + "</li>"
        } else if (dia === "quarta") {
        quarta.innerHTML += "<li>" + input.value + "</li>"
        } else if (dia === "quinta") {
        quinta.innerHTML += "<li>" + input.value + "</li>"
        }  else if (dia === "sexta") {
        sexta.innerHTML += "<li>" + input.value + "</li>"
        }  else if (dia === "sábado") {
        sabado.innerHTML += "<li>" + input.value + "</li>"
        }
}

function limparCampo () {
    document.getElementById("input").value = ""
}
// if (novaTarefa === "" || novaTarefa === " "){
//     alert("Insira uma tarefa para esse dia!")
// } else {