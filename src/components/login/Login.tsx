import React from "react";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import "./login.css";

function Login() {
	const [errorUsuario, setErrorUsuario] = React.useState("");
	const [errorPassword, setErrorPassword] = React.useState("");
	const navigate = useNavigate();

	const handleExit = () => {
		navigate("/");
	};
	return (
		<div className="modal-bg w-screen h-screen  bg-[rgba(100,100,100,0.3)] fixed bottom-0 z-40 flex items-center justify-center">
			{/* Modal */}
			<div className="modal h-[24rem] w-[18rem] bg-negro flex flex-col p-3 rounded-lg justify-around">
				{/* Icono del modal */}
				<div className="w-full flex justify-end">
					<AiOutlineClose
						className="text-3xl hover:text-morado-700 hover:cursor-pointer transition duration-300"
						onClick={handleExit}
					/>
				</div>
				{/* Titulo del modal */}
				<div className="title w-full text-center ">
					<h1 className="text-2xl text-blanco">Iniciar sesion</h1>
				</div>
				{/* Inputs del modal */}
				<div className="login__input flex flex-col gap-7">
					<Input label="Usuario" error={errorUsuario} name="usuario" />
					<Input label="Contraseña" error={errorPassword} name="contraseña" />
				</div>
				{/* Boton del modal */}
				<div className="footer w-full flex justify-center">
					<Button label="Iniciar Sesion" />
				</div>
			</div>
		</div>
	);
}

export default Login;
