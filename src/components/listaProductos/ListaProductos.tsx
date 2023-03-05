import { useEffect, useState } from "react";
import "./listaProductos.css";
import { motion as m, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/api";
import { productT } from "../../redux/types/types";
import Product from "./Product";
import Spinner from "../../elements/Spinner";
import { setProducts as setProductsSlice } from "../../redux/features/productSlice";
import ListaCategorias from "./ListaCategorias";
import ListaProductosHeader from "./ListaProductosHeader";

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
		if (
			currentCategory === "miscelaneos" &&
			product.productos_categorias[0] === undefined
		) {
			return true;
		} else {
			if (product.productos_categorias[0] === undefined) {
				return false;
			} else {
				if (currentCategory === "todos") {
					return true;
				} else {
					return (
						product.productos_categorias[0].categoria.descripcion ===
						currentCategory
					);
				}
			}
		}
	};

	return (
		<section className="product-list mt-12 h-full flex flex-col">
			{/* Header del container para añaidr productos */}
			<ListaProductosHeader />
			{/* Contenedor de las categorias y las lista de los productos */}
			<div
				className="product-list__container flex 
			  h-full w-full"
			>
				{/* Contenedor de las categorias */}
				<ListaCategorias handleCategory={handleCategory} />
				{/*Si no esta cargando muestrame el Contedor de los productos */}
				{!isLoading && (
					<m.div
						className="products w-[80%] grid grid-cols-3 justify-items-center"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<AnimatePresence>
							{products
								.filter((product: productT) => {
									return handleFilter(product);
								})
								.map((product) => {
									return (
										<Product product={product} key={product.id} layout={true} />
									);
								})}
						</AnimatePresence>
					</m.div>
				)}
				{/* Si esta cargando muertrame el spinner */}
				{isLoading && (
					<div className="w-[80%]  flex	items-start justify-center pt-20 ">
						<div>
							<Spinner />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default ListaProductos;
