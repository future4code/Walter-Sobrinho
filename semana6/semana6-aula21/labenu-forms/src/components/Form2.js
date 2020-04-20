import React from 'react'
import styled from 'styled-components'


const CorpoForm2 = styled.div`
text-align: center;
` 


export class Form2 extends React.Component {
    render () {
        return <CorpoForm2>
        <p>1. Qual o Curso?</p>
        <input type="text" />
        <p>2. Qual a unidade de ensino?</p>
        <input type="text" />
        <button onClick={this.props.onClick}>Enviar</button>
        </CorpoForm2>
    }
}

export default Form2