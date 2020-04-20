import React from 'react';
import styled from 'styled-components'
import Form1 from './components/Form1.js'
import Form2 from './components/Form2.js'
import Form3 from './components/Form3.js'

const FullBody = styled.div`
text-align: center;
`

const Seletor = styled.select`
display: block;
margin: auto;
margin-bottom: 30px;
`

class App extends React.Component {
  state = {
    escolaridade: null,
    finalizado: false,
}

proximaEtapa = () => {
  const valorEscolaridade = document.getElementById('escolaridade').value
  this.setState({escolaridade: valorEscolaridade})
  console.log(valorEscolaridade)
}

botaoFinalizar = () => {
    this.setState({finalizado: true})
}
render () {
  if (this.state.escolaridade === null) { 
  return (
  <FullBody>      
  <h1>Etapa1 - Dados Gerais</h1>
  <p>1. Qual o seu nome?</p>
  <input type="text" />
  <p>2. Qual a sua idade?</p>
  <input type="text" />
  <p>3. Qual o seu email?</p>
  <input type="text" />
  <p>4. Qual a sua escolaridade?</p>
  <Seletor id="escolaridade">
  <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
  <option value="Ensino Médio Completo">Ensino Médio Completo</option>
  <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
  <option value="Ensino Superior Completo">Ensino Superior Completo</option>
  </Seletor>
  <button onClick={this.proximaEtapa}>Próxima etapa</button>
  </FullBody>
  )
} else if (this.state.escolaridade === "Ensino Superior Completo" || "Ensino Superior Incompleto")
{return (
<Form2 onClick={this.botaoFinalizar}/>)
} else if (this.state.escolaridade === "Ensino Médio Completo" || "Ensino Médio Incompleto")
{ return (
<Form3 onClick={this.botaoFinalizar}/>)
} else if (this.state.finalizado === true) {
  return <Form1/>
}
} 
}

export default App;
