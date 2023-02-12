import React from "react";
import "./elements.css";
function Button({
	label,
	onClick,
	primary,
}: {
	label: string;
	onClick: () => void;
	primary: boolean;
}) {
	return (
		<div
			className={`Button py-2 px-3 rounded-md hover:cursor-pointer w-full text-center ${
				primary
					? "primary bg-amarillo hover:bg-negro-500 hover:text-amarillo"
					: "text-blanco bg-verde-500 hover:bg-verde-300"
			}`}
			onClick={onClick}
		>
			{label}
		</div>
	);
}

export default Button;
