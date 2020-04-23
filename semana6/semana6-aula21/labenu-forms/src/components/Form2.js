import React from 'react'
import styled from 'styled-components'
import Form1 from './Form1'


const CorpoForm2 = styled.div`
text-align: center;
` 
const BotaoEnviar = styled.button`
display: block;
margin: auto;
margin-top: 30px;
`

export class Form2 extends React.Component {
    state = {
        finalizado: false,
    }
    
    botaoFinalizar = () => {
        this.setState({finalizado: true})
    }

    render () {
        if (this.state.finalizado === false) {
        return <CorpoForm2>
        <p>1. Qual o Curso?</p>
        <input type="text" />
        <p>2. Qual a unidade de ensino?</p>
        <input type="text" />
        <BotaoEnviar onClick={this.botaoFinalizar}>Enviar</BotaoEnviar>
        </CorpoForm2>
        }
        else { return <Form1/> }
    }
}

export default Form2