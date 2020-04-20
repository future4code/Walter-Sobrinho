import React from 'react';
import './CardPessoal.css'

function CardPessoal(props) {
    return (
        <div className="cardpessoal-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPessoal;