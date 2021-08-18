import News from "../components/News";
import "../styles/HomeView.css";

function HomeView() {
	return (
		<div>
			<div className="news-container">
				<News />
			</div>
			<div className="slogan">
				<section>
					Somos una entidad sin ánimo de lucro, establecida en Colombia, cuyo
					objetivo es contribuir al estilo de vida de los animales que se
					encuentran en precarias condiciones a traves de nuestro enlace con las
					diferentes fundaciones animales del país.
				</section>
			</div>
		</div>
	);
}

export default HomeView;
