import React, { useState } from "react";
import "./formProducto.css";
import Button from "../../elements/Button";
import Input from "../../elements/Input";

function FormProducto() {
	const [errores, setErrores] = useState(["", "", "", "", "", ""]);
	return (
		<section className="mt-12 h-full">
			<div className="product-form__container flex flex-col items-center justify-center h-[80%]">
				<h1 className="product-form__title text-3xl text-center font-bold text-blanco">
					Añade un producto
				</h1>
				<form className="product-form__form flex flex-col gap-4 w-1/2 mt-8 border border-morado-500 rounded-md p-7 items-center">
					<div className="grid grid-cols-2 gap-4 w-[90%]">
						<Input label="Nombre" name="nombre" error={errores[0]} />
						<Input label="Descripcion" name="descripcion" error={errores[1]} />
						<Input label="Cantidad" name="cantidad" error={errores[3]} />
						<Input label="Precio" name="precio" error={errores[4]} />
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
						<Button label="Añadir" />
					</div>
				</form>
			</div>
		</section>
	);
}

export default FormProducto;
