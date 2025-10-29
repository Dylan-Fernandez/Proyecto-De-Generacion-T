import "./Footer.css";
import mapsImg from "./img/maps.jpeg";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import gmail from "./img/gmail.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="participantes">
          <h3>Participantes:</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/dylan_youl/profilecard/?igsh=MXM4aDdjOHZkaW16Nw=="
                target="_blank"
              >
                Dylan Fernández
              </a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Dios" target="_blank">
                Deymar Ovidio
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=qU9mHegkTc4"
                target="_blank"
              >
                Fernando Tapia
              </a>
            </li>
          </ul>
        </div>

        <div className="social">
          <h3>Nuestras redes sociales</h3>

          <a
            href="https://www.instagram.com/idm__oficial?igsh=ZGlndjFyb3dtZXVp"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" className="icon" /> Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1CmiBztcT9/"
            target="_blank"
          >
            <img src={facebook} alt="Facebook" className="icon" /> Facebook
          </a>

          <a
            href="https://x.com/IDM__Oficial?t=ONRRnjcy5gozZGK6y0ZfzA&s=33"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" className="icon" /> Twitter
          </a>

          <a href="mailto:idmoficial@gmail.com">
            <img src={gmail} alt="Gmail" className="icon" /> Gmail
          </a>

          <h5>&copy; {new Date().getFullYear()} I.D.M. All rights reserved.</h5>
        </div>

        <div className="maps">
          <h3>Encuéntranos:</h3>
          <a href="https://maps.app.goo.gl/RkFoGfLYF9BgNXDZA" target="_blank">
            <img className="maps_img" src={mapsImg} alt="Lugar en maps" />
          </a>
          <a href="https://maps.app.goo.gl/RkFoGfLYF9BgNXDZA" target="_blank">
            <p>
              Mariquita Thompson, España &, Villa Madero Cdad. Autónoma de
              Buenos Aires
            </p>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
