import React from 'react'
import styled from 'styled-components'

const CorpoForm3 = styled.div`
text-align: center;
`

export class Form3 extends React.Component {
    render () {
        return <CorpoForm3>
        <p>1. Por que não terminou o curso de graduação?</p>
        <input type="text" />
        <p>2. Você fez algum curso complementar?</p>
        <select>
            <option>Curso técnico</option>
            <option>Cursos de inglês</option>
            <option>Não fiz curso complementar</option>
            </select>
            <button onClick={this.props.onClick}>Enviar</button>
        </CorpoForm3>
}
}

export default Form3