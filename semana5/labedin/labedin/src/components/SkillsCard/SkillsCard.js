import React from 'react';
import './SkillsCard.css'

function SkillsCard(props) {
    return (
        <div className="language-card-container">
            <div className="language-container">
            <img src={ props.imagem } />
            <p>{ props.descricao }</p>
            </div>
            <div className="language-container">
            <img src={ props.imagem2 } />
            <p>{ props.descricao2 }</p>
            </div>
            <div className="language-container">
            <img src={ props.imagem3 } />
            <p>{ props.descricao3 }</p>
            </div>
        </div>
    )
}

export default SkillsCard;