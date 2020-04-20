import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p>Email: { props.email }</p>
                <p>Endereço: { props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno