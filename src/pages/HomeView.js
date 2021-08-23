import News from "../components/News";
import "../styles/HomeView.css";

function HomeView() {
	return (
		<div>
			<div className="contain">
				<section className="fandh">
          <h1>
					Somos una entidad sin ánimo de lucro, establecida en Colombia, cuyo
					objetivo es contribuir al estilo de vida de los animales que se
					encuentran en precarias condiciones a traves de nuestro enlace con las
					diferentes fundaciones animales del país.
          </h1>
				</section>
        <div className="news-container">
				<News />
			</div>
        <section>
          <div className="mivi">
            <div className="mision">
              <strong>
          <h2>
            Nuestra misión
          </h2>
          </strong>
          <h3>
            Ayudar a conseguir recursos para las fundaciones y apoyar su manutención, con el fin de garantizar el bienestar de sus animales.
          </h3>
          </div>
          <div className="vision">
          <strong>
          <h2>
            Nuestra visión
          </h2>
          </strong>
          <h3>
            Promover el ingreso de más fundaciones, para así ayudar a más animales necesitados.
          </h3>
          </div>
          </div>
        </section>
        <section>
        <strong>
          <h2>
            Contamos con punto de recaudo en la ciudad de Armenia
          </h2>
          </strong>
          <p>Nos encontramos ubicados en la carrera 19 N 50 - 83, Armenia - Quindío. Para conocer nuestra ubicación visita el mapa. </p>
        </section>
        <section>
        <strong>
          <h2>
            También recibimos donaciones en especie ....
          </h2>
          </strong>
          <p>Si deseas apoyar con donaciones en especie, como alimentos o medicamentos escribenos a traves de nuestro correo o número de contacto e indicanos la dirección para pasar a recogerlo.</p>
        </section>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe 
              Style="width:100%; height:300px;" id="gmap_canvas" 
              src="https://maps.google.com/maps?q=4.5707707740897465,%20-75.64972777743358&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            <a href="https://getasearch.com/nordvpn-coupon/" />
            <br />
            <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:300px;width:100%;}" }} />
            <a href="https://www.embedgooglemap.net" />
            <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:300px;width:100%;}" }} />
          </div>
        </div>
			</div>
		</div>
	);
}

export default HomeView;
