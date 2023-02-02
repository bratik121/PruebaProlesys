import React, { useState } from "react";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import "./register.css";

function Register() {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errores, setErrores] = useState(["", "", "", "", ""]);

	return (
		<section className="register mt-12 h-full">
			<div className="register__container flex flex-col items-center justify-center h-[80%]">
				<h1 className="register__title text-3xl text-center font-bold text-blanco">
					Regístrate
				</h1>
				<form className="register__form flex flex-col gap-4 w-1/2 mt-8 border border-morado-500 rounded-md p-7 items-center">
					<div className="grid grid-cols-2 gap-4 w-[90%]">
						<Input label="Nombre" name="nombre" error={errores[0]} />
						<Input label="Apellido" name="apellido" error={errores[1]} />
						<Input label="Usuario" name="usuario" error={errores[3]} />
						<Input label="Contraseña" name="contraseña" error={errores[4]} />
						<div className="col-span-2">
							<Input label="Email" name="email" error={errores[2]} />
						</div>
					</div>
					<div className="w-[90%] flex justify-center ">
						<Button label="Registrarse" />
					</div>
				</form>
			</div>
		</section>
	);
}

export default Register;
