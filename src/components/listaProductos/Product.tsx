import React from "react";
import Button from "../../elements/Button";
import { BsImage } from "react-icons/bs";
import { productT } from "../../redux/types/types";
import { useNavigate } from "react-router-dom";

function Product({ product }: { product: productT }) {
	const navigate = useNavigate();
	const handleEdit = (id: number) => {
		console.log(id);
	};
	return (
		<div className="product__card h-[400px] w-[300px] border border-morado-500 rounded-md p-6 my-4">
			<div className="product__img h-[50%] w-full  p-6    ">
				<BsImage className="h-full w-full" />
			</div>
			<div className="separator h-[2px] w-full bg-morado-500 center mb-2"></div>
			<div className="product__info h-[50%] w-full flex flex-col justify-between">
				<div className="product__name h-[50px] w-full text-3xl text-center">
					{product.descripcion}
				</div>
				<div className="product__description">
					{product.detalle_productos[0].descripcion}
				</div>
				<div className="product__price h-[50px] w-full ">
					{product.detalle_productos[0].precio}$
				</div>
				<Button
					label="modificar"
					onClick={() => {
						handleEdit(Number(product.id));
					}}
				/>
			</div>
		</div>
	);
}

export default Product;
