import React from 'react';
import './App.css';
import homeIcon from './imgs/home-icon.png';
import fireIcon from './imgs/trending-icon.png'
import subsIcon from './imgs/subs.png'
import likedIcon from './imgs/liked-icon.png'
import histoIcon from './imgs/historic.png'

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div class="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>

    <main>
        <nav className="menu-vertical">
            <ul>
                <li className="botoes-meunu-vertical">
                  <img className="nav-icons" src={homeIcon} />
                  Início
                  </li>
                <li className="botoes-meunu-vertical">
                <img className="nav-icons" src={fireIcon} />
                Em alta
                </li>
                <li className="botoes-meunu-vertical">
                <img className="nav-icons" src={subsIcon} />
                Inscrições
                </li>
                <hr />
                <li className="botoes-meunu-vertical">
                <img className="nav-icons" src={likedIcon} />
                  Curtidos
                  </li>
                <li className="botoes-meunu-vertical">
                <img className="nav-icons" src={histoIcon} />
                  Histórico
                  </li>
            </ul>
        </nav>
        
        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=2 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=3 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=4 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=5 " alt="" />
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=6 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=7 " alt="" />
                <h4>{titulo}></h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=8 " alt="" />
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>
</div>
  );
}

export default App;
