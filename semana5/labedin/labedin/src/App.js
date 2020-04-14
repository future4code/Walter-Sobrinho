import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssa7-1.fna.fbcdn.net/v/t1.0-9/67660220_1284789331694874_1884018203600879616_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=p004oDiZW0oAX94bMwV&_nc_ht=scontent.fssa7-1.fna&oh=5920fcba949d4da2428d72c4218512aa&oe=5EBA8370" 
          nome="Walter Adrade" 
          descricao="Oi, meu nome é Walter e sou aluno da Labenu_! Soon to be desenvolvedor FullStack Web e Node.js, React Native e designer UI/UX."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://ufba.br/sites/portal.ufba.br/files/brasao_ufba.jpg" 
          nome="UFBA" 
          descricao="Bacharel em Filosofia, com especialização em teoria do conhecimento e abstração. " 
        />
      </div>
      <div>
      <CardPequeno
          imagem="https://cdn.onlinewebfonts.com/svg/img_392174.png" 
          email = "filosofowalter@gmail.com"
          endereco = "Geusaugasse 34-38, 1030 Wien, Austria" 
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
    </div>
  );
}

export default App;
