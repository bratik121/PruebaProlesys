import React, { useState } from "react";
import "./formProducto.css";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import { useInput } from "../../hooks/hooks";
import { validateText, validateNumber } from "../../utils/validations";
import { truncate } from "../../utils/functions";

function FormProducto() {
	const nombre = useInput();
	const descripcion = useInput();
	const cantidad = useInput();
	const precio = useInput();

	const handleClick = () => {
		let flags = 0;
		flags += validateText(nombre);
		flags += validateText(descripcion);
		flags += validateNumber(cantidad);
		flags += validateNumber(precio);
		if (flags === 0) {
			truncate(nombre);
			truncate(descripcion);
			truncate(cantidad);
			truncate(precio);
			console.log("Todo bien");
		}
	};

	return (
		<section className="mt-12 h-full">
			<div className="product-form__container flex flex-col items-center justify-center h-[80%]">
				<h1 className="product-form__title text-3xl text-center font-bold text-blanco">
					Añade un producto
				</h1>
				<form className="product-form__form flex flex-col gap-4 w-1/2 mt-8 border border-morado-500 rounded-md p-7 items-center">
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
						<div className="col-span-2 gap-2 flex flex-col">
							<h5 className="text-blanco">Categoria</h5>
							<select name="" id="" className="w-full rounded px-2">
								<option value="">Opcion 1</option>
								<option value="">Opcion 2</option>
								<option value="">Opcion 3</option>
								<option value="">Opcion 4</option>
								<option value="">Opcion 5</option>
							</select>
						</div>
					</div>
					<div className="w-[90%] flex justify-center ">
						<Button label="Añadir" onClick={handleClick} />
					</div>
				</form>
			</div>
		</section>
	);
}

export default FormProducto;
