import React from "react";
import "./elements.css";
function Button({ label, onClick }: { label: string; onClick: () => void }) {
	return (
		<div
			className="Button py-2 px-3 text-negro hover:text-morado-500 rounded-md hover:cursor-pointer w-full text-center"
			onClick={onClick}
		>
			{label}
		</div>
	);
}

export default Button;
