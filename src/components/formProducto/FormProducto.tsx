import React, { useEffect, useState, useRef } from "react";
import "./formProducto.css";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import { useInput, useLoading } from "../../hooks/hooks";
import { validateNumber, validateProduct } from "../../utils/validations";
import { truncate, getCode } from "../../utils/functions";
import {
	useGetCategoriesQuery,
	useAddProductMutation,
	useUpdateProductMutation,
} from "../../redux/api/api";
import Spinner from "../../elements/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { categoryT, newProductT } from "../../redux/types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { RiNpmjsFill } from "react-icons/ri";

function FormProducto() {
	const nombre = useInput();
	const descripcion = useInput();
	const cantidad = useInput();
	const precio = useInput();
	const categoria = useRef<HTMLSelectElement>(null);
	const [categories, setCategories] = useState<categoryT[]>([]);
	const [addProduct] = useAddProductMutation();
	const [updateProduct] = useUpdateProductMutation();
	const formLoading = useLoading();
	const { productId } = useParams();
	const products = useSelector((state: RootState) => state.prodcts.products);

	const [codigo, setCodigo] = useState<string>("");

	//trayendo las categorias
	const { data, isError, error, isLoading } = useGetCategoriesQuery();
	useEffect(() => {
		if (isLoading) {
			console.log("loading..");
		} else {
			if (isError) {
				console.log(error);
			} else {
				setCategories(data.data);
				if (productId) {
					const product = products.find((prod) => prod.id === productId);
					if (product) {
						setCodigo(product.codigo);
						nombre.setInput(product.descripcion);
						nombre.ref.current!.value = product.descripcion;
						descripcion.setInput(product.detalle_productos[0].descripcion);
						descripcion.ref.current!.value =
							product.detalle_productos[0].descripcion;
						cantidad.setInput("" + product.detalle_productos[0].stock);
						cantidad.ref.current!.value =
							"" + product.detalle_productos[0].stock;
						precio.setInput("" + product.detalle_productos[0].precio);
						precio.ref.current!.value =
							"" + product.detalle_productos[0].precio;
						categoria.current!.value =
							product.productos_categorias[0].categoria_id;
					}
				}
			}
		}
	}, [isLoading]);

	//

	//añadiendo un producto
	const addNewProduct = async (
		nombre: string,
		descripcion: string,
		cantidad: number,
		precio: number,
		categoria: number
	) => {
		formLoading.setLoading(true);
		const product: newProductT = {
			codigo: "" + getCode(1000),
			descripcion: nombre,
			categoria: [
				{
					categoria_id: categoria,
				},
			],
			detalle_producto: [
				{
					descripcion: descripcion,
					stock: cantidad,
					precio: precio,
				},
			],
		};
		const respuesta = await addProduct(product);
		const data = respuesta.data;
		formLoading.setMessage(data.message);
		formLoading.setLoading(false);
	};
	//validando el formulario y añadiendo el producto
	const handleAdd = () => {
		console.log(categoria.current?.value);
		let flags = 0;
		flags += validateProduct(nombre);
		flags += validateProduct(descripcion);
		flags += validateNumber(cantidad);
		flags += validateNumber(precio);
		if (flags === 0) {
			addNewProduct(
				nombre.input,
				descripcion.input,
				parseInt(cantidad.input),
				parseInt(precio.input),
				parseInt(categoria.current?.value as string)
			);
			truncate(nombre);
			truncate(descripcion);
			truncate(cantidad);
			truncate(precio);
		}
	};

	const updateNewProduct = async (
		codigo: string,
		nombre: string,
		descripcion: string,
		cantidad: number,
		precio: number,
		categoria: number
	) => {
		formLoading.setLoading(true);
		const product: newProductT = {
			codigo: codigo,
			descripcion: nombre,
			categoria: [
				{
					categoria_id: categoria,
				},
			],
			detalle_producto: [
				{
					descripcion: descripcion,
					stock: cantidad,
					precio: precio,
				},
			],
		};
		const respuesta = await updateProduct(product);
		const data = respuesta.data;
		formLoading.setMessage(data.message);
		formLoading.setLoading(false);
	};

	//modificando un producto
	const handleModify = () => {
		let flags = 0;
		flags += validateProduct(nombre);
		flags += validateProduct(descripcion);
		flags += validateNumber(cantidad);
		flags += validateNumber(precio);
		if (flags === 0) {
			updateNewProduct(
				codigo,
				nombre.input,
				descripcion.input,
				parseInt(cantidad.input),
				parseInt(precio.input),
				parseInt(categoria.current?.value as string)
			);
			truncate(nombre);
			truncate(descripcion);
			truncate(cantidad);
			truncate(precio);
		}
	};
	return (
		<section className="mt-12 h-full">
			<div className="product-form__container flex flex-col items-center justify-center h-[80%]">
				<h1 className="product-form__title text-3xl text-center font-bold text-blanco">
					Añade un producto
				</h1>
				<form className="product-form__form flex flex-col gap-4 w-1/2 mt-8 border border-morado-500 rounded-md p-7 items-center">
					{!formLoading.loading && (
						<>
							<div className="grid grid-cols-2 gap-4 w-[90%]">
								<Input
									label="Nombre"
									name="nombre"
									error={nombre.error}
									inputText={nombre.input}
									setInputText={nombre.setInput}
									refe={nombre.ref}
								/>
								<Input
									label="Descripcion"
									name="descripcion"
									error={descripcion.error}
									inputText={descripcion.input}
									setInputText={descripcion.setInput}
									refe={descripcion.ref}
								/>
								<Input
									label="Cantidad"
									name="cantidad"
									error={cantidad.error}
									inputText={cantidad.input}
									setInputText={cantidad.setInput}
									refe={cantidad.ref}
								/>
								<Input
									label="Precio"
									name="precio"
									error={precio.error}
									inputText={precio.input}
									setInputText={precio.setInput}
									refe={precio.ref}
								/>
								{!isLoading && (
									<div className="col-span-2 gap-2 flex flex-col">
										<h5 className="text-blanco">Categoria</h5>
										<select
											name=""
											id=""
											className="w-full rounded px-2"
											ref={categoria}
										>
											{categories.map((category) => {
												return (
													<option value={category.id} key={category.id}>
														{category.descripcion}
													</option>
												);
											})}
										</select>
									</div>
								)}
								{isLoading && <Spinner />}
							</div>
							<div className="w-[90%] flex justify-center ">
								{!productId && <Button label="Añadir" onClick={handleAdd} />}
								{productId && (
									<Button label="Modificar" onClick={handleModify} />
								)}
							</div>
						</>
					)}
					{formLoading.loading && <Spinner />}
					<p>{formLoading.message}</p>
				</form>
			</div>
		</section>
	);
}

export default FormProducto;
