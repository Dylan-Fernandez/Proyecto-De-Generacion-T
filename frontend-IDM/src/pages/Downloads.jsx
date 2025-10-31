import "./Downloads.css";

import descargas from "./img/descargas.png";
import IDM_logo from "../assets/idm.png"
const Downloads = () => {
  return (
    <>
    <section className="downloads" id="descargas">
      <h3 className="downloads_title">Descargas</h3>
      
      <h2 className="downloads_windows_title">Windows</h2>
      <section className="downloads_windows">
          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 23.21 MB <br />Version: Alpha V1</p>
            </div>
            <a href="https://mega.nz/file/aiozFZiB#ZdPeUlc-CwjzpSnQu1_9ROpSecrcmR2OPaMQclgGMlc"><img src={descargas} alt="" /></a>
          </div>

          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 23.67 MB <br />Version: Alpha V2</p>
            </div>
            <a href="https://mega.nz/file/f7Q0WbSQ#sVzNH-c-djKC58fRe_wTZFcgxwYAcHIvgVG0aNrM6Hk"><img src={descargas} alt="Link de descarga" /></a>
          </div>

          <div className="downloads_windows_link">
            <img className="idm_logo" src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 23.65 MB <br />Version: Beta V1</p>
            </div>
            <a href="https://mega.nz/file/yyomyTrT#BUAaD0JKmbj_mnD9q6ozZyxsNC6fybju82uiD_T3EUk"><img src={descargas} alt="as" /></a>
          </div>

          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 23.51 MB <br />Version: Beta V2</p>
            </div>
            <a href="https://mega.nz/file/unIXmCxT#kAamMr-AaPRM6OK5F22iQH65XWWyRBMxnHdoOfh9FjA"><img src={descargas} alt="" /></a>
          </div>

          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 23.75 MB <br />Version: Beta V3</p>
            </div>
            <a href="https://mega.nz/file/Gvgk1RwQ#fHIoxK0Il-GPCW-UuKi1qBALYZILZ_NKCBTI4aVsP4E"><img src={descargas} alt="" /></a>
          </div>
          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 24.25 MB <br />Version: Beta V4</p>
            </div>
            <a href="https://mega.nz/file/iyByCD4T#cttKG0mw4u7XRGuHXCIDbu5iC0vr4ubiioDK0D4coBE"><img src={descargas} alt="" /></a>
          </div>
          <div className="downloads_windows_link">
            <img src={IDM_logo} alt="" />
            <div className="text_link">
              <h4>I.D.M </h4>
              <p>Peso: 21.12 MB <br />Version: Beta V5</p>
            </div>
            <a href="https://mega.nz/file/Su5llI5J#rZal_YaODCyirA59fv5OBKX33bKEW77rbPU_5SOxI-M"><img src={descargas} alt="" /></a>
          </div>
        </section>

        <section className="downloads_android">
          <h2 className="downloads_android_title">Android</h2>
          <div className="downloads_android_link">
            <h4 className="IDM_title">I.D.M</h4>
            
            <a href="https://google.com"><img src={IDM_logo} alt="" /></a>
            <p>Peso: 24.8 MB <br />Version: APK V3 </p>
            <a href="hhtps://google.com"><h4>Descargar</h4></a>
          </div>
        </section>
    </section>
</>
  );
};

export default Downloads;
