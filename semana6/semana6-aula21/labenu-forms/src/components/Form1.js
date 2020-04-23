import React from 'react'
import styled from 'styled-components'

const ContainerForm1 = styled.div`
text-align: center;
`  


export class Form1 extends React.Component {
    render () {
        
return <ContainerForm1>
    <h2>Obrigado por responder ao formulário!</h2>
</ContainerForm1>
}
}

export default Form1