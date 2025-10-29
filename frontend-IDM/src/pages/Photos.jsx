import "./Photos.css";

import idmv1presentes from "./img/idmv1presentes.jpg";
import idmv2baño from "./img/idmv2baño.jpg";
import proto from "./img/proto.jpeg";
import proto2 from "./img/proto2.jpeg";
import btn from "./img/btn.jpeg";
import btnuso from "./img/btnuso.jpeg";
import ganadores from "./img/ganadores.jpeg";
import btnuso2 from "./img/btnuso2.jpeg";
import btnuso3 from "./img/btnuso3.jpeg";
import btnuso4 from "./img/btnuso4.jpeg";

const Photos = () => {
  return (
    <section className="photos" id="fotos">
      <h2 className="photos_title">FOTOS</h2>

      <div className="photos_all">
        <div className="photo">
          <img className="photo_img" src={idmv1presentes} alt="Primera versión de I.D.M en el menú de Presentes" />
          <h3>Versión Scratch de I.D.M<br />Menú de “Presentes”</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={idmv2baño} alt="Segunda versión de I.D.M indicando ir al baño" />
          <h3>Segunda versión de I.D.M<br />Necesita ir al baño</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={proto} alt="Prototipo inicial de los botones I.D.M" />
          <h3>Primer prototipo<br />de botones I.D.M</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={proto2} alt="Prototipo mejorado de I.D.M" />
          <h3>Prototipo mejorado<br />de I.D.M</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={btn} alt="Diseño del botón de I.D.M" />
          <h3>Diseño final<br />del botón I.D.M</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={btnuso} alt="Alumno utilizando botón I.D.M" />
          <h3>Chico usando<br />el botón I.D.M</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={ganadores} alt="Equipo ganador con diploma de participación" />
          <h3>Nosotros con el proyecto<br />y diploma de participación</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={btnuso2} alt="Alumno interactuando con I.D.M" />
          <h3>Uso real del botón<br />en aula</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={btnuso3} alt="Alumno usando botón I.D.M" />
          <h3>Interacción con I.D.M<br />en práctica</h3>
        </div>

        <div className="photo">
          <img className="photo_img" src={btnuso4} alt="Alumno usando botón I.D.M" />
          <h3>Otra experiencia<br />con los botones</h3>
        </div>
      </div>
    </section>
  );
};

export default Photos;
