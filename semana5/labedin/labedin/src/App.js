import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardPessoal from './components/CardPessoal/CardPessoal'
import SkillsCard from './components/SkillsCard/SkillsCard'

function App() {
  return (
    <div className="App">
      <aside>
        <CardPessoal 
          imagem="https://scontent.fssa7-1.fna.fbcdn.net/v/t1.0-9/67660220_1284789331694874_1884018203600879616_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=p004oDiZW0oAX94bMwV&_nc_ht=scontent.fssa7-1.fna&oh=5920fcba949d4da2428d72c4218512aa&oe=5EBA8370" 
          nome="Walter Adrade" 
          descricao="Oi, meu nome é Walter e sou aluno da Labenu_! Soon to be desenvolvedor FullStack Web e Node.js, React Native e designer UI/UX."
        />
      </aside>
      <main>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu"
          descricao1="- Desenvolvimento FullStack Web e Node.js"
          descricao2="- Desenvolvimento mobile com React Native"
          descricao3="- Ciência de dados"          
        />
        
        <CardGrande 
          imagem="https://ufba.br/sites/portal.ufba.br/files/brasao_ufba.jpg" 
          nome="UFBA" 
          descricao="- Bacharel em Filosofia, com especialização em teoria do conhecimento e abstração. "
          descricao2="- Experiência com ensino de lógica formal"
        />
      </div>
      <div className="page-section-container">
      <CardPequeno
          imagem="https://cdn.onlinewebfonts.com/svg/img_392174.png" 
          email = "filosofowalter@gmail.com"
          endereco = "Geusaugasse 34-38, 1030 Wien, Austria" 
        />
      </div>
      <div className="page-section-container">
        <h2>Outras habilidades</h2>
        <SkillsCard
        imagem = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
        descricao = "Lê, escreve, fala, entende"
        imagem2 = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
        descricao2 = "Lê, entende, fala pouco"
        imagem3 = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
        descricao3 = "Lê"
        />
        <SkillsCard
        imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Photoshop_CC_icon.png/615px-Photoshop_CC_icon.png"
        descricao = "Intermediário"
        imagem2 = "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg"
        descricao2 = "Básico"
        imagem3 = "data:image/png;base64,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" 
        descricao3 = "Intermediário"
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      
      </main>
    </div>
  );
}

export default App;
