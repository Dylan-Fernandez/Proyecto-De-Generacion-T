import que_esImg from "./img/que_es.png";
import "./Home.css";

const Home = () => {
  return (
    <>
    <section className="home" id="home">
      <div className="chart_text">
        <img
          className="img_what_is"
          src={que_esImg}
          alt="ilustración sobre inclusión motriz"
        />
        <div className="right_what_is">
          <h2 className="title_what_is">¿Qué es I.D.M?</h2>
          <p className="what_is_text">
            Nuestro trabajo se centra en la necesidad de abordar los desafíos de
            comunicación y aprendizaje de estudiantes con discapacidad motriz,
            específicamente aquellos con limitaciones significativas de
            movimiento y habla. <br />
            <br />
            Para resolver los problemas que tienen, diseñamos un programa de uso
            simple y práctico pensado para las personas que enfrentan esta
            problemática.
          </p>
        </div>
      </div>
    </section>
</>
  );
};

export default Home;
