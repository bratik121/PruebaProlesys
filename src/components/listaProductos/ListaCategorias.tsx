import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { setCategories as setCategoriesS } from "../../redux/features/categoriesSlice";
import { categoryT } from "../../redux/types/types";

function ListaCategorias({
	handleCategory,
}: {
	handleCategory: (category: string) => void;
}) {
	const { data, isError, error, isLoading } = useGetCategoriesQuery();
	const [categories, setCategories] = useState<categoryT[]>([]);

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

	const handleClick = () => {
		handleCategory("todos");
	};

	const handleMiscelaneos = () => {
		handleCategory("miscelaneos");
	};

	return (
		<div className="categories__container w-[20%] bg-green-400 px-4">
			<h1 className="w-full text-center">Lista de categorias</h1>
			<ul className="categories">
				<li className="categorie cursor-pointer" onClick={handleClick}>
					todos
				</li>
				{categories.map((category) => {
					return (
						<li
							key={category.id}
							className="categorie cursor-pointer"
							onClick={(e) => {
								handleCategory(category.descripcion);
							}}
						>
							{category.descripcion}
						</li>
					);
				})}
				<li className="categorie cursor-pointer" onClick={handleMiscelaneos}>
					miscelaneos
				</li>
			</ul>
		</div>
	);
}

export default ListaCategorias;
