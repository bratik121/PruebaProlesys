import React from "react";
import { BsSearch } from "react-icons/bs";

function NavInput() {
	return (
		<>
			<input type="text" name="" id="" className="" />
			<select name="" id="">
				<option value="">Opcion 1</option>
				<option value="">Opcion 2</option>
				<option value="">Opcion 3</option>
				<option value="">Opcion 4</option>
				<option value="">Opcion 5</option>
			</select>
			<div className="button bg-morado-500 flex items-center justify-center w-[10%] hover:bg-morado-700 hover:cursor-pointer">
				<BsSearch className="text-xl text-blanco" />
			</div>
		</>
	);
}

export default NavInput;
