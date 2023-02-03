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

export const useLoading = () => {
	const [loading, setLoading] = React.useState(false);
	const [message, setMessage] = React.useState("");
	return {
		loading,
		setLoading,
		message,
		setMessage,
	};
};
