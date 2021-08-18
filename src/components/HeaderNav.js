import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical, faTasks, faUserCog } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import RegistrationModal from "./RegistrationModal";
import SignInForm from "./SignInForm";

function HeaderNav() {
	return (
		<header>
			<div className="container">
				<div className="headerNavBar">
					<div>
						<Link to="/" className="logo-image">
              <img src={logo} alt="Logo"/> 
            </Link>
					</div>
					<div className="navbar-container">
						<nav className="navbar navbar-light">
							<div className="item-content">
								<Link to="/FoundationsView" className="linkHeader">
									<div>
										<FontAwesomeIcon icon={faClinicMedical} />
									</div>
									Fundaciones
								</Link>
							</div>
							<div className="item-content">
								<button
									className="butonModal"
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#foundationRegistration"
								>
                  <div>
										<FontAwesomeIcon icon={faTasks} />
									</div>
									Registrate
								</button>
							</div>
							<div className="item-content">
								<button
									type="button"
									className="butonModal"
									data-bs-toggle="modal"
									data-bs-target="#accessAdmin"
								>
									<div>
										<FontAwesomeIcon icon={faUserCog} />
									</div>
									Admin
								</button>
							</div>
						</nav>
					</div>
				</div>
				
			</div>
		</header>
	);
}
export default HeaderNav;
