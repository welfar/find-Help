import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

function HeaderNav() {
	return (
		<header>
			<div className="headerNavBar">
        <input 
          type="image"
          id="logo"
          name="logo"
          className="logo"
          src={logo}
          alt="Logo"
          />
				<nav className="navbar navbar-light">
					
						<div className="item-content">
							<Link to="/FoundationsView">Fundaciones</Link>
            </div>
              <div className="item-content">
							<Link to="/Shop">Tienda</Link>
            </div>
              <div className="item-content">
							<Link to="/">Log Out</Link>
            </div>
						
					
				</nav>
			</div>
		</header>
	);
}
export default HeaderNav;
