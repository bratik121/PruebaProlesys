import React from "react";
import "./elements.css";

function Button({ label }: { label: string }) {
	return (
		<div className="Button py-2 px-3 text-moradoclaro rounded-md">{label}</div>
	);
}

export default Button;