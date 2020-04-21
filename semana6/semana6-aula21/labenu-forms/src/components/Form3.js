import React from 'react'
import styled from 'styled-components'
import Form1 from './Form1'

const CorpoForm3 = styled.div`
text-align: center;
`

const BotaoEnviar = styled.button`
display: block;
margin: auto;
margin-top: 30px;
`

export class Form3 extends React.Component {
    state = {
        finalizado: false,
    }

    botaoFinalizar = () => {
        this.setState({finalizado: true})
    }

    render () {
        if (this.state.finalizado === false) {
        return <CorpoForm3>
        <p>1. Por que não terminou o curso de graduação?</p>
        <input type="text" />
        <p>2. Você fez algum curso complementar?</p>
        <select>
            <option>Curso técnico</option>
            <option>Cursos de inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
            <BotaoEnviar onClick={this.botaoFinalizar}>Enviar</BotaoEnviar>
        </CorpoForm3>
        } else { return <Form1/> }
}
}

export default Form3