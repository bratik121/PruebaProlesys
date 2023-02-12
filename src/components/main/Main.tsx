import "./main.css";
import { motion as m } from "framer-motion";
import mainImg from "../../assets/pexels-1.png";
import Button from "../../elements/Button";
function Main() {
	const handleClick = () => {};
	return (
		<main className="mt-12 flex w-full h-[93%] ">
			<div className="main__left w-1/2 flex justify-center items-center">
				<div className="content flex flex-col w-[60%] gap-6 px-4 -translate-y-11 translate-x-10">
					<div className="content__top">
						<h1 className="main__title text-6xl font-bold  text-verde-700">
							Productos
						</h1>
						<h1 className="main__title text-3xl font-bold  text-verde-700">
							a un click
						</h1>
						<h1 className="main__title text-4xl font-bold  text-verde-700">
							de
						</h1>
						<h1 className="main__title text-5xl font-bold  text-verde-700">
							Distancia
						</h1>
					</div>
					<div className="content__bottom flex justify-center ">
						<m.div
							className="w-[50%]"
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							<Button label="Comenzar" onClick={handleClick} primary={true} />
						</m.div>
					</div>
				</div>
			</div>
			<div className="main__right w-1/2 flex justify-center items-center relative">
				<div className="main__img ">
					<img src={mainImg} alt="" className="w-full  h-full object-cover" />
				</div>
			</div>
		</main>
	);
}

export default Main;
