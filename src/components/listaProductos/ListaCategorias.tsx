import "./listaProductos.css";
import { useEffect, useState, useRef } from "react";
import { useGetCategoriesQuery } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { motion as m } from "framer-motion";
import { setCategories as setCategoriesS } from "../../redux/features/categoriesSlice";
import { categoryT } from "../../redux/types/types";

function ListaCategorias({
	handleCategory,
}: {
	handleCategory: (category: string) => void;
}) {
	const { data, isError, error, isLoading } = useGetCategoriesQuery();
	const [categories, setCategories] = useState<categoryT[]>([]);
	const marker = useRef<HTMLDivElement>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoading) {
		} else {
			if (isError) {
				console.log(error);
			} else {
				setCategories(data.data);
				dispatch(setCategoriesS(data.data));
			}
		}
	}, [isLoading]);

	const indicator = (t: HTMLLIElement) => {
		if (marker) {
			marker.current!.style.top = t.offsetTop + "px";
			marker.current!.style.height = t.offsetHeight + "px";
			marker.current!.style.width = t.offsetWidth + "px";
		}
	};

	useEffect(() => {
		indicator(document.querySelector(".categorie") as HTMLLIElement);
	}, []);

	const handleClick = () => {
		handleCategory("todos");
	};

	const handleMiscelaneos = () => {
		handleCategory("miscelaneos");
	};

	return (
		<div className="categories__container w-[20%]  px-4">
			<h1 className="w-full text-center text-verde-700 text-xl">Categorias</h1>
			<ul className="categories flex flex-col">
				<div id="marker" ref={marker}></div>
				<m.li
					className="categorie cursor-pointer capitalize inline-block"
					onClick={(e) => {
						handleClick();
						indicator(e.target as HTMLLIElement);
					}}
					whileHover={{ scale: 1.1 }}
				>
					todos
				</m.li>
				{categories.map((category) => {
					return (
						<m.li
							key={category.id}
							className="categorie cursor-pointer capitalize"
							onClick={(e) => {
								handleCategory(category.descripcion);
								indicator(e.target as HTMLLIElement);
							}}
							whileHover={{ scale: 1.1 }}
						>
							{category.descripcion}
						</m.li>
					);
				})}
				<m.li
					className="categorie cursor-pointer capitalize"
					onClick={(e) => {
						handleMiscelaneos();
						indicator(e.target as HTMLLIElement);
					}}
					whileHover={{ scale: 1.1 }}
				>
					miscelaneos
				</m.li>
			</ul>
		</div>
	);
}

export default ListaCategorias;
