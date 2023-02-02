import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import Button from "../../elements/Button";

function Nav() {
	return (
		<nav className="fixed flex h-12  w-full items-center justify-around z-50 ">
			<div className="logo w-[20%] flex justify-center items-center ">
				<h1 className="text-2xl">Test Bryant</h1>
			</div>
			<ul className="links flex w-[60%] justify-end items-center gap-16 ">
				<NavLink
					to="/productlist"
					className="nav__link text-blanco hover:underline hover:text-moradoclaro transition duration-300"
				>
					Lista de productos
				</NavLink>
				<div className="buttons flex items-center w-[28%] justify-between">
					<NavLink
						to="/login"
						className="nav__link text-blanco hover:underline hover:text-moradoclaro transition duration-300"
					>
						inicar sesion
					</NavLink>
					<NavLink to="/register" className="">
						<Button label="registrarse" />
					</NavLink>
				</div>
			</ul>
		</nav>
	);
}

export default Nav;
