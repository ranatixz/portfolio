import React from "react";
import {Link} from "react-router-dom";

const NavItems = ({linkClass}) => {
	return (
		<React.Fragment>
			<li className="nav-item">
				<Link className={linkClass} to="/portfolio">
					Home <span className="sr-only">(current)</span>
				</Link>
			</li>
			<li className="nav-item">
				<Link className={linkClass} to="/porfolio/about">
					About me
				</Link>
			</li>
			<li className="nav-item">
				<Link className={linkClass} to="/portfolio/services">
					Services
				</Link>
			</li>
			<li className="nav-item">
				<Link className={linkClass} to="/portfolio/recent-works">
					Portfolio
				</Link>
			</li>
			<li className="nav-item">
				<Link className={linkClass} to="/portfolio/contact">
					Contact
				</Link>
			</li>
		</React.Fragment>
	);
};

export default NavItems;
