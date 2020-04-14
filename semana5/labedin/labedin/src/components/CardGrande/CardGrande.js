import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p>{ props.descricao1 }</p>
                <p>{ props.descricao2 }</p>
                <p>{ props.descricao3 }</p>
                <p>{ props.descricao4 }</p>
            </div>
        </div>
    )
}

export default CardGrande;