import "./History.css";
import esc505Img from "./img/esc505.jpg";
import idmv1Img from "./img/idmv1.jpg";
import idmv3menuImg from "./img/idmv3menu.jpg";

const History = () => {
  return (
    <>
      <section className="history" id="historia">
        <h2 className="title_history">Historia de I.D.M</h2>

        <div className="history_content">
          <div className="history_images">
        <img className="img_history" src={esc505Img} alt="Inicio del proyecto I.D.M" />
        <img className="img_history" src={idmv1Img} alt="Desarrollo del proyecto I.D.M" />
        <img className="img_history" src={idmv3menuImg} alt="Resultados del proyecto I.D.M" />
          </div>
<div className="history_text">
  La idea surgió de un proyecto que nos habían mandado a hacer para la escuela especial 505 “San Juan de Dios”, cuyos alumnos tienen dificultades motrices y en su mayoría no pueden expresarse. Teníamos que resolver su problemática.<br /><br />
  Nuestro principal objetivo es crear un entorno de trabajo donde el alumno pueda expresar e interactuar con sus docentes, compañeros y familias.<br /><br />
  Queremos “escucharlos”.<br /><br />
  Para poder “escucharlos”, creamos un software interactivo que reemplazará las actuales carteleras que hay en las aulas por una pantalla de 50 pulgadas donde, a diferencia de la cartelera que solo es manipulada por el docente, el alumno podrá seleccionar objetos e interactuar gracias a un mouse especial, expresando su deseo de escuchar un cuento, dar su presente, manifestar ir al baño, etc.<br /><br />
  Además, se creará un teclado especial adaptado a las necesidades del usuario para poder acceder al menú que ofrece el software.<br /><br />
  Hemos decidido y comenzado a desarrollar el software con Unity. Además, buscamos no solo crear un medio de comunicación en el aula sino también con las familias y el entorno de vida cotidiana.<br /><br />
  EN CONCLUSIÓN:<br /><br />
  El programa funciona como era esperado. Es una buena aproximación y sirve para ayudar a la gente que tiene esta discapacidad; se podrán incorporar más funciones en el futuro.<br /><br />
  Queda pendiente mejorar la calidad de imagen y el comando inalámbrico.
</div>

        </div>
      </section>
    </>
  );
};

export default History;