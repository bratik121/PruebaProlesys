import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { overlayTypeContent } from "../../redux/types/types";
import Button from "../../elements/Button";

const loginContent: overlayTypeContent = {
	title: "Hola de nuevo!",
	content:
		"Para manternerte conectado con nosotros por favor ingresa tus datos personales",
	alter: "en caso de no poseas una cuenta, Registrate!",
	buttonText: "Registrarse",
};

const registerContent: overlayTypeContent = {
	title: "Bienvenido!",
	content:
		"Para empezar a utilizar nuestra plataforma por favor ingresa tus datos personales",
	alter: "en caso de ya poseas una cuenta, Inicia sesión!",
	buttonText: "Iniciar sesión",
};

function Overlay({
	active,
	handleClick,
}: {
	active: boolean;
	handleClick: () => void;
}) {
	const content = active ? registerContent : loginContent;

	return (
		<m.div
			className="sign__overlay w-1/2 h-[100%] flex justify-center items-center absolute z-50"
			animate={{ x: active ? "100%" : "0%" }}
			transition={{ duration: 0.7 }}
		>
			<div className="overlay w-[80%] h-[80%] flex flex-col justify-between items-center ">
				{/* Titulo del overlay */}
				<div className="overlay-title  text-center text-blanco flex flex-col items-center gap-6 px-4 py-2  mt-8">
					<h1 className="relative  font-extrabold text-4xl">{content.title}</h1>
					<p className="relative text-justify text-lg">{content.content}</p>
					<m.div
						animate={{ rotate: active ? 180 : 0 }}
						whileHover={{
							x: active ? [0, -50] : [0, 50],
							cursor: "pointer",
							transition: {
								repeat: Infinity,
								duration: 0.5,
								repeatType: "reverse",
							},
						}}
						transition={{
							type: "tween",
							ease: "easeInOut",
							duration: 0.7,
						}}
						className=" w-[100px]  mt-2 flex justify-center"
					>
						<BsFillArrowRightCircleFill className="overlay-arrow text-5xl" />
					</m.div>
				</div>
				{/* Botones del overlay */}
				<div className="overlay-buttons flex flex-col gap-3 items-center ">
					<p className="text-gray-200">{content.alter}</p>
					<m.div className="w-[70%]" whileHover={{ scale: 1.1 }}>
						<Button
							label={`` + content.buttonText}
							onClick={handleClick}
							primary={true}
						/>
					</m.div>
				</div>
			</div>
		</m.div>
	);
}

export default Overlay;
