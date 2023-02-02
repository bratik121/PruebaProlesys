import React from "react";
import Button from "../../elements/Button";
import { BsImage } from "react-icons/bs";

function Productos() {
	return (
		<div className="products w-[80%] grid grid-cols-3 ">
			<div className="product__card h-[400px] w-[300px] border border-morado-500 rounded-md p-6">
				<div className="product__img h-[50%] w-full  p-6    ">
					<BsImage className="h-full w-full" />
				</div>
				<div className="separator h-[2px] w-full bg-morado-500 center mb-2"></div>
				<div className="product__info h-[50%] w-full flex flex-col justify-between">
					<div className="product__name h-[50px] w-full text-3xl text-center">
						Lonchera
					</div>
					<div className="product__description">
						Lonchera ideal para el regleso a clases
					</div>
					<div className="product__price h-[50px] w-full ">15$</div>
					<Button label="modificar" />
				</div>
			</div>
		</div>
	);
}

export default Productos;
