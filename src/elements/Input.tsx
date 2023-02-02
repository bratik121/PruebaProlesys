import "./elements.css";
import { useState } from "react";
function Input({
	label,
	error,
	name,
}: {
	name: string;
	label: string;
	error: string;
}) {
	const [inputText, setInputText] = useState("");
	return (
		<div className="inputBox bg-negro">
			<input
				type="text"
				className={`bg-negro border border-morado-500 ${
					inputText === "" ? "" : "inUse"
				} text-moradoclaro`}
				name={name}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
			/>
			<span className="text-blanco ">{label}</span>
			<p>{error}</p>
		</div>
	);
}

export default Input;
