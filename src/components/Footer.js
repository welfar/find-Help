import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faHome,
	faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
	return (
		<footer>
			<section>
				<div className="container">
					<div className="col-md-5">
						<h3>Find&help</h3>
						<p>
							Somos una entidad sin ánimo de lucro, establecida en Colombia,
							cuyo objetivo es contribuir al estilo de vida de los animales que
							se encuentran en precarias condiciones a traves de nuestro enlace
							con las diferentes fundaciones animales del país.
						</p>
            </div>
            <div className="col-md-5">
						<ul className="list-footer">
							<li>
								<div className="i">
									<FontAwesomeIcon icon={faHome} size="1x" />
								</div>
								<p>
									Carrera 19 N # 50 - 83
									<br />
									Armenia, Colombia
								</p>
							</li>
							<li>
								<div className="i">
									<FontAwesomeIcon icon={faMobileAlt} size="lg" />
								</div>
								<p>Colombia +57 312 2574930 - (6)7475086</p>
							</li>
							<li>
								<div className="i">
									<FontAwesomeIcon icon={faEnvelope} size="1x" />
								</div>
								<a href="mailto:contacto@findandhelp.org">
									contacto@findandhelp.org
								</a>
							</li>
						</ul>
            </div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
