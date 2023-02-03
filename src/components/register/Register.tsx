import React, { useState, useRef } from "react";
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
import { registerT } from "../../redux/types/types";
import Spinner from "../../elements/Spinner";

import "./register.css";

function Register() {
	const nombre = useInput();
	const apellido = useInput();
	const usuario = useInput();
	const contraseña = useInput();
	const email = useInput();
	const [userRegister] = useAddUserMutation();
	const registerLoading = useLoading();

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
		registerLoading.setMessage(data.message);
		registerLoading.setLoading(false);
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
		<section className="register mt-12 h-full">
			<div className="register__container flex flex-col items-center justify-center h-[80%]">
				<h1 className="register__title text-3xl text-center font-bold text-blanco">
					Regístrate
				</h1>
				<form className="register__form flex flex-col gap-4 w-1/2 mt-8 border border-morado-500 rounded-md p-7 items-center">
					{!registerLoading.loading && (
						<div className="grid grid-cols-2 gap-4 w-[90%]">
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
					<div className="w-[90%] flex justify-center ">
						<Button label="Registrarse" onClick={handleClick} />
					</div>
				</form>
			</div>
		</section>
	);
}

export default Register;
