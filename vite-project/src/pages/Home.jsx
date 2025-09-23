import que_esImg from "./img/que_es.png"; 
import "./Home.css";
function Home() {
return (
    <>
    <div className="chart_text">
        <img className="img_what_is" src={que_esImg} alt="cara de pregunta" />
        <div className="right_what_is">
        <h2 className="title_what_is">¿QUE ES I.D.M?</h2>
        <p className="what_is_text">
            Nuestro trabajo se centra en la necesidad de abordar los desafíos de comunicación y
            aprendizaje de estudiantes con discapacidad motriz, específicamente aquellos con limitaciones 
            significativas de movimiento y habla. Para resolver los problemas que tienen diseñamos un programa
            de uso simple y practico para las personas que tengan esta problematica.
        </p>
        <div id="Historia"></div>
        </div>
    </div>
    </>
);
}

export default Home;