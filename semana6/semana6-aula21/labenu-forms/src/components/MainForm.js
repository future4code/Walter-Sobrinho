import React from 'react';
import styled from 'styled-components';
import Form2 from './Form2'
import Form3 from './Form3'

const FullBody = styled.div`
text-align: center;
`
const Seletor = styled.select`
display: block;
margin: auto;
margin-bottom: 30px;
`

export class MainForm extends React.Component {
    state = {
        escolaridade: undefined,
    }

    proximaEtapa = () => {
        const valorEscolaridade = document.getElementById("escolaridade").value
        this.setState({escolaridade: valorEscolaridade})

        console.log(this.state.escolaridade)
    }   

    render () {
    if (this.state.escolaridade === undefined) {
    return <FullBody>      
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

} if (this.state.escolaridade === ("Ensino Médio Incompleto")) {
    return <Form3/>

} if (this.state.escolaridade === ("Ensino Superior Completo")) {
    return <Form2/>
}if (this.state.escolaridade === ("Ensino Médio Completo")) {
        return <Form3/>
    }if (this.state.escolaridade === ("Ensino Superior Incompleto")) {
        return <Form2/>
    }
}}

export default MainForm