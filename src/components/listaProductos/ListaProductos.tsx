import React from "react";
import "./listaProductos.css";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import Productos from "./Productos";

function ListaProductos() {
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
				<Productos />
			</div>
		</section>
	);
}

export default ListaProductos;
