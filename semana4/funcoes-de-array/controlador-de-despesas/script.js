let arrayDasDespesas = []
function cadastrar() {
    var despesa = {
        valor: document.getElementById("input-do-valor").value,
        tipo: document.getElementById("tipo-de-despesa").value,
        descricao: document.getElementById("descricao").value,
        }
        arrayDasDespesas.push(despesa)

    document.getElementById("detalhes").innerHTML +=
    "<p>Valor da despesa: " + despesa.valor  + "</p>" +
    "<p>Tipo da despesa: " + despesa.tipo + "</p>" +
    "<p>Descrição da despesa: " + despesa.descricao + "</p>"
}



function filtrar() {
    const tipoDeDespesa = document.getElementById("tipo-de-despesa2").value
    const valorMaximo = document.getElementById("valor-maximo").value
    const valorMinimo = document.getElementById("valor-minimo").value

    if (tipoDeDespesa !== arrayDasDespesas.tipo) {
    document.getElementById("detalhes").innerHTML -= 
    "<p>Valor da despesa: " + despesa.valor  + "</p>" +
    "<p>Tipo da despesa: " + despesa.tipo + "</p>" +
    "<p>Descrição da despesa: " + despesa.descricao + "</p>"
    }
}