import "./App.css";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="rotina">
      <div>
        <h1 style={{ textAlign: "center" }}>
          <strong>David Henrique Batista de Lima</strong>
        </h1>
      </div>
      <div className="imagem">
        <img
          src=" https://christianosantos.com/files/cs1/avatar-homem.jpg"
          alt=""
        />
      </div>
      <div className="video">
        <video src="https://www.w3schools.com/tags/movie.mp4"></video>
      </div>
      <div className="musica">
        <audio
          controls
          src="https://christianosantos.com/files/cs1/musica01.mp3"
        ></audio>
      </div>

      <div style={{ textAlign: "center", position: "relative", top: "220px" }}>
        <p>
          Acordo as 5h00 da Am, vou pra academia de <b>5h30 até 7h00</b>. As 8h00 vou
          pra o trabalho, onde sou garçom até as 16h00.
        </p>{" "}
        <br />
        <p>
          as 17h00 vou em casa, troco de roupa e venho pra <b> faculdade por volta
          de 18h30 ~ 19h00.</b>
        </p>{" "}
        <br />
        <p>
          <b>volto pra casa por volta 22h30 e logo depois vou dormir pra começar
          tudo denovo</b>
        </p>
      </div>
      <div style={{position: 'relative', top: '550px', textAlign: 'center'}}>
        - <i>"Não Ofusque o Brilho do Mestre"</i>
        - <i>As 48 Leis do Poder, Robert Greene.</i>
      </div>
      <div
        className="contato"
        style={{ position: "relative", top: "380px", textAlign: "center" }}
      >
        <Contato />
      </div>
    </div>
  );
}

export default App;
