import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
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
		<m.div
			className="modal-bg w-screen h-screen  bg-[rgba(100,100,100,0.3)] fixed bottom-0 z-50 flex items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{/* Modal */}
			<div className="modal h-[27rem] w-[21rem] bg-negro flex flex-col py-3 px-6 rounded-lg justify-around">
				{/* Icono del modal */}
				<div>
					<div className="w-full flex justify-end ">
						<AiOutlineClose
							className="text-3xl hover:text-[color:#826AED86] hover:cursor-pointer transition duration-300"
							onClick={handleExit}
						/>
					</div>
					{/* Titulo del modal */}
					<div className="title w-full text-center flex flex-col items-center ">
						<MdOutlineAccountCircle className="text-8xl" />
						<h1 className="text-2xl text-blanco">Iniciar sesion</h1>
					</div>
				</div>
				{/* Inputs del modal */}
				<div className="login__input flex flex-col gap-7">
					<Input label="Usuario" error={errorUsuario} name="usuario" />
					<Input label="Contraseña" error={errorPassword} name="contraseña" />
				</div>
				{/* Boton del modal */}
				<div className="footer w-full flex flex-col items-center gap-2">
					<Button label="Iniciar Sesion" />
					<Link
						to="/register"
						className="	 text-blanco hover:text-moradoclaro transition duration-300 relative"
					>
						Registrarse
					</Link>
				</div>
			</div>
		</m.div>
	);
}

export default Login;
