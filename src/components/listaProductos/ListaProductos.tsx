import React, { useEffect, useState } from "react";
import "./listaProductos.css";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/api";
import { productT } from "../../redux/types/types";
import Product from "./Product";
import Spinner from "../../elements/Spinner";
import { setProducts as setProductsSlice } from "../../redux/features/productSlice";
import ListaCategorias from "./ListaCategorias";

function ListaProductos() {
	const { data, isError, error, isLoading } = useGetProductsQuery();
	const [products, setProducts] = useState<productT[]>([]);
	const [currentCategory, setCurrentCategory] = useState("todos");
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

	const handleCategory = (category: string) => {
		setCurrentCategory(category);
	};

	const handleFilter = (product: productT): boolean => {
		if (currentCategory === "todos") {
			return true;
		} else {
			if (product.productos_categorias[0] === undefined) {
				return false;
			} else {
				return (
					product.productos_categorias[0].categoria.descripcion ===
					currentCategory
				);
			}
			/* 	return (
				product.productos_categorias[0].categoria.descripcion ===
				currentCategory
			);*/
			return true;
		}
	};

	return (
		<section className="product-list mt-12 h-full flex flex-col">
			<div className="product-lits__header h-12 flex w-[100%] items-center justify-end px-4">
				<Link
					to="/productform"
					className="flex items-center gap-2 hover:text-verde-300 transition duration-150"
				>
					Añadir producto
					<RiAddCircleLine className="text-xl" />
				</Link>
			</div>
			<div
				className="product-list__container flex pt-8 justify-center
			  h-full w-full bg-blue-400"
			>
				<ListaCategorias handleCategory={handleCategory} />
				{!isLoading && (
					<div className="products w-[80%] grid grid-cols-3  bg-red-300">
						{products
							.filter((product: productT) => {
								return handleFilter(product);
							})
							.map((product) => {
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
