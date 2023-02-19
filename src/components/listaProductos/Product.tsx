import React from "react";
import Button from "../../elements/Button";
import { BsImage } from "react-icons/bs";
import { productT } from "../../redux/types/types";
import { useNavigate } from "react-router-dom";
import { motion as m, MotionProps } from "framer-motion";

function Product({
	product,
	...motionProps
}: { product: productT } & MotionProps) {
	const navigate = useNavigate();
	const handleEdit = (productId: number) => {
		navigate(`/productform/modify/${productId}`);
	};
	return (
		<m.div
			className="product__card h-[400px] w-[300px] border border-verde-500 rounded-md p-6 my-4 text-negro-500"
			{...motionProps}
		>
			<div className="product__img h-[50%] w-full  p-6  ">
				<BsImage className="h-full w-full text-verde-700" />
			</div>

			<div className="product__info h-[50%] w-full flex flex-col justify-between">
				<div className="product__name h-[50px] w-full text-2xl text-center text-verde-700">
					{product.descripcion}
				</div>
				<div className="product__description">
					{product.detalle_productos[0].descripcion}
				</div>
				<div className="product__price h-[50px] w-full ">
					{product.detalle_productos[0].precio}$
				</div>
				{product.productos_categorias[0] !== undefined && (
					<Button
						label="modificar"
						onClick={() => {
							handleEdit(Number(product.id));
						}}
						primary={false}
					/>
				)}
			</div>
		</m.div>
	);
}

export default Product;
