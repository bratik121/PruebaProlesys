import { memo } from "react";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";

function ListaProductosHeader() {
	return (
		<div className="product-lits__header h-12 flex w-[100%] items-center justify-end px-4 py-3">
			<Link
				to="/productform"
				className="flex items-center gap-2 hover:text-verde-300 transition duration-150"
			>
				Añadir producto
				<RiAddCircleLine className="text-xl" />
			</Link>
		</div>
	);
}

export default memo(ListaProductosHeader);
