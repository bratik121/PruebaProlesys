import React, { useEffect, useState } from "react";
import "./listaProductos.css";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/api";
import { RootState } from "../../redux/app/store";
import { productT } from "../../redux/types/types";
import Product from "./Product";
import Spinner from "../../elements/Spinner";
import { setProducts as setProductsSlice } from "../../redux/features/productSlice";

function ListaProductos() {
	const { data, isError, error, isLoading } = useGetProductsQuery();
	const [products, setProducts] = useState<productT[]>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoading) {
		} else {
			if (isError) {
				console.log(error);
			} else {
				setProducts(data.data);
				dispatch(setProductsSlice(data.data));
			}
		}
	}, [isLoading]);

	return (
		<section className="product-list mt-12 h-full flex flex-col">
			<div className="product-lits__header h-12 flex w-[97%] items-center justify-end px-4">
				<Link
					to="/productform"
					className="flex items-center gap-2 hover:text-blanco transition duration-150"
				>
					Añadir producto
					<RiAddCircleLine className="text-xl" />
				</Link>
			</div>
			<div
				className="product-list__container flex pt-10 justify-center
			 gap-12 h-full w-full"
			>
				{!isLoading && (
					<div className="products w-[80%] grid grid-cols-3 ">
						{products.map((product) => {
							return <Product product={product} key={product.id} />;
						})}
					</div>
				)}
				{isLoading && <Spinner />}
			</div>
		</section>
	);
}

export default ListaProductos;
