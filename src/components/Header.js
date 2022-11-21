import logo from '../images/logo-header.svg';
import React from "react";

function Header (){
    return(
        <header className="header">
				<div className="container">
					<img
						className="header__logo"
						src={logo}
						alt="Логотип сайта
						Место."
						/>
				</div>
			</header>
    );
}
export default Header;