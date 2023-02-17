import React from "react";
import { useDispatch } from "react-redux";
import { setOpen, setClose } from "../redux/features/popUpSlice";
import { popUpType } from "../redux/types/types";

export const useInput = () => {
	const [input, setInput] = React.useState("");
	const ref = React.useRef<HTMLInputElement>(null);
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

export const usePopUp = (message: string) => {
	const dispatch = useDispatch();
	const popUp: popUpType = {
		open: true,
		message: message,
	};
	const execute = () => {
		dispatch(setOpen(popUp));
		setTimeout(() => {
			dispatch(setClose());
		}, 2000);
	};
	return {
		execute,
	};
};
