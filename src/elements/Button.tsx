import React from "react";
import "./elements.css";

function Button({ label }: { label: string }) {
	return (
		<div className="Button py-2 px-3 text-negro hover:text-morado-500 rounded-md hover:cursor-pointer">
			{label}
		</div>
	);
}

export default Button;
