import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useInput, useLoading } from "../../hooks/hooks";
import { validateUsuario, validateContraseña } from "../../utils/validations";
import { truncate } from "../../utils/functions";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import Spinner from "../../elements/Spinner";
import "./login.css";
import { useGetLoginMutation } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/features/authSlice";
import { userT, loginT } from "../../redux/types/types";
import { setLog } from "../../redux/features/logInSlice";

function Login() {
	const loginLoading = useLoading();
	const usuario = useInput();
	const contraseña = useInput();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [userLogin] = useGetLoginMutation();

	//funcion para iniciar sesion
	const logIn = async (usuario: string, password: string) => {
		loginLoading.setLoading(true);
		const login: loginT = {
			usuario: usuario,
			password: password,
		};
		const respuesta: any = await userLogin(login);
		const data = respuesta.data;
		if (data.code === 1000) {
			const user: userT = {
				nombre: data.data.nombre,
				token: data.token,
			};
			dispatch(setToken(user));
			dispatch(setLog(true));
			navigate("/");
		} else {
			loginLoading.setMessage(data.message);
		}
		loginLoading.setLoading(false);
	};

	//salir del modal
	const handleExit = () => {
		navigate("/");
	};

	const handleClick = () => {
		let flags = 0;
		flags += validateUsuario(usuario);
		flags += validateContraseña(contraseña);
		if (flags === 0) {
			logIn(usuario.input, contraseña.input);
			truncate(usuario);
			truncate(contraseña);
		}
	};

	return (
		<m.div
			className="modal-bg w-screen h-screen  bg-[rgba(100,100,100,0.3)] fixed bottom-0 z-50 flex items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{/* Modal */}
			<div className="modal h-[31rem] w-[21rem] bg-negro flex flex-col py-3 px-6 rounded-lg justify-around">
				{/* Top modal */}
				<div className="">
					{/* Close tag */}
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
				{loginLoading.loading && <Spinner />}
				{!loginLoading.loading && (
					<div className="login__input flex flex-col gap-6 ">
						<Input
							label="Usuario"
							error={usuario.error}
							name="usuario"
							inputText={usuario.input}
							setInputText={usuario.setInput}
							refe={usuario.ref}
						/>
						<Input
							label="Contraseña"
							error={contraseña.error}
							name="contraseña"
							inputText={contraseña.input}
							setInputText={contraseña.setInput}
							refe={contraseña.ref}
						/>
						<p>{loginLoading.message}</p>
					</div>
				)}
				{/* Boton del modal */}
				<div className="footer w-full flex flex-col items-center gap-2 mt-2 	">
					<Button label="Iniciar Sesion" onClick={handleClick} />
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
