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
			navigate("/");
		} else {
			loginLoading.setMessage(data.message);
		}
		loginLoading.setLoading(false);
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
		<>
			{/* Modal */}
			<div className="login__container  w-[60%] h-[80%] bg-negro flex flex-col  justify-between">
				{/* Titulo del modal */}
				<div className="title w-full text-center flex flex-col items-center  ">
					<MdOutlineAccountCircle className="text-8xl text-verde-700" />
					<h1 className="text-2xl text-verde-700">Inicia sesion</h1>
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
						<p className="text-rojo-700">{loginLoading.message}</p>
					</div>
				)}
				{/* Boton del modal */}
				<m.div
					className="footer w-full flex flex-col items-center gap-2"
					whileHover={{ scale: 1.1 }}
				>
					<Button
						label="Iniciar Sesion"
						onClick={handleClick}
						primary={false}
					/>
				</m.div>
			</div>
		</>
	);
}

export default Login;
