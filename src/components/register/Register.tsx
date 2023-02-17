import React, { useState, useRef } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import { useInput, useLoading } from "../../hooks/hooks";
import {
	validateText,
	validateUsuario,
	validateContraseña,
	validateEmail,
} from "../../utils/validations";
import { useAddUserMutation } from "../../redux/api/api";
import { truncate } from "../../utils/functions";
import { registerT, popUpType } from "../../redux/types/types";
import Spinner from "../../elements/Spinner";
import { motion as m } from "framer-motion";
import { setOpen } from "../../redux/features/popUpSlice";

function Register() {
	const nombre = useInput();
	const apellido = useInput();
	const usuario = useInput();
	const contraseña = useInput();
	const email = useInput();
	const [userRegister] = useAddUserMutation();
	const registerLoading = useLoading();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const registerUser = async (
		nombre: string,
		apellido: string,
		usuario: string,
		password: string,
		email: string
	) => {
		registerLoading.setLoading(true);
		const register: registerT = {
			nombre: nombre,
			apellido: apellido,
			usuario: usuario,
			password: password,
			email: email,
		};
		const respuesta: any = await userRegister(register);
		const data = respuesta.data;
		registerLoading.setLoading(false);
		if (data.code === 1000) {
			const popUp: popUpType = {
				message: "Usuario registrado con éxito!",
				open: true,
			};
			dispatch(setOpen(popUp));
			navigate("/");
		} else {
			registerLoading.setMessage(data.message);
		}
	};

	const handleClick = () => {
		let flags = 0;
		flags += validateText(nombre);
		flags += validateText(apellido);
		flags += validateUsuario(usuario);
		flags += validateContraseña(contraseña);
		flags += validateEmail(email);
		if (flags === 0) {
			registerUser(
				nombre.input,
				apellido.input,
				usuario.input,
				contraseña.input,
				email.input
			);
			truncate(nombre);
			truncate(apellido);
			truncate(usuario);
			truncate(contraseña);
			truncate(email);
		}
	};

	return (
		<div className="register__container flex flex-col items-center justify-center h-[80%] w-[85%] pt-6 ">
			<h1 className="register__title text-3xl text-center text-verde-700">
				Regístrate
			</h1>
			<form className="register__form flex flex-col justify-between  pt-10 px-5 items-center w-full h-full ">
				{!registerLoading.loading && (
					<div className="grid grid-cols-2 gap-2 w-[100%]  h-[80%]">
						<Input
							label="Nombre"
							name="nombre"
							error={nombre.error}
							inputText={nombre.input}
							setInputText={nombre.setInput}
							refe={nombre.ref}
						/>
						<Input
							label="Apellido"
							name="apellido"
							error={apellido.error}
							inputText={apellido.input}
							setInputText={apellido.setInput}
							refe={apellido.ref}
						/>
						<Input
							label="Usuario"
							name="usuario"
							error={usuario.error}
							inputText={usuario.input}
							setInputText={usuario.setInput}
							refe={usuario.ref}
						/>
						<Input
							label="Contraseña"
							name="contraseña"
							error={contraseña.error}
							inputText={contraseña.input}
							setInputText={contraseña.setInput}
							refe={contraseña.ref}
						/>
						<div className="col-span-2">
							<Input
								label="Email"
								name="email"
								error={email.error}
								inputText={email.input}
								setInputText={email.setInput}
								refe={email.ref}
							/>
						</div>
					</div>
				)}
				{registerLoading.loading && <Spinner />}
				<p>{registerLoading.message}</p>
				<m.div
					className="w-[90%] flex justify-center "
					whileHover={{ scale: 1.1 }}
				>
					<Button label="Registrarse" onClick={handleClick} primary={false} />
				</m.div>
			</form>
		</div>
	);
}

export default Register;
