import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import Button from "../../elements/Button";
import NavInput from "./NavInput";

function Nav() {
	return (
		<nav className=" flex h-12 fixed w-full items-center justify-around z-10 ">
			{/* Logo nac */}
			<div className="logo w-[20%] flex justify-center items-center  ">
				<h1 className="text-2xl">Test Bryant</h1>
			</div>
			{/* Input del nav */}
			<div className="w-[40%] box flex justify-end ">
				<NavInput />
			</div>
			{/* Links y botones del nav */}
			<ul className="links flex w-[40%] justify-end items-center gap-16  ">
				<NavLink
					to="/productlist"
					className="nav__link text-blanco hover:underline hover:text-moradoclaro transition duration-300"
				>
					Lista de productos
				</NavLink>
				<div className="buttons flex items-center w-[50%] justify-center gap-8">
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
