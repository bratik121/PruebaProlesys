import React, { useRef } from "react";
export const useInput = () => {
	const [input, setInput] = React.useState("");
	const ref = useRef<HTMLInputElement>(null);
	const [error, setError] = React.useState("");
	return {
		input,
		setInput,
		ref,
		error,
		setError,
	};
};
