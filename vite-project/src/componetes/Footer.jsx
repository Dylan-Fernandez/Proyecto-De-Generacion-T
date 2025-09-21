import "./Footer.css";

function Footer() {
  return (
    <>
    <footer className="footer">
        <div class="participantes">
            <h3>Participantes:</h3>
            <ul>
                <li><a href="https://www.instagram.com/dylan_youl/profilecard/?igsh=MXM4aDdjOHZkaW16Nw=="target="_blank">Dylan Fernández </a> </li>
                <li><a href="https://es.wikipedia.org/wiki/Dios" target="_blank">Deymar Ovidio</a> </li>
                <li><a href="https://www.youtube.com/watch?v=qU9mHegkTc4"target="_blank">Fernando Tapia</a> </li>
            </ul>
        </div>
        <div className="social">
          <h3>nuestras redes sociales</h3>
          <a href="https://www.instagram.com/idm__oficial?igsh=ZGlndjFyb3dtZXVp" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/share/1CmiBztcT9/" target="_blank">Facebook</a>
          <a href="https://x.com/IDM__Oficial?t=ONRRnjcy5gozZGK6y0ZfzA&s=33" target="_blank">Twitter</a>

        &copy; {new Date().getFullYear()}   I.D.M. All rights reserved.
      </div>
    </footer>
    </>
  );
}

export default Footer; 
