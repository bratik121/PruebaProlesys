//Setea los valores de los inputs a vacio
export const truncate = (inputHook: any) => {
	inputHook.ref.current!.value = "";
	inputHook.setInput("");
};

export const getCode = (max: number): number => {
	let code: number = Math.floor(Math.random() * max);
	if (code < 100) {
		return getCode(max);
	} else {
		return code;
	}
};

export const setInput = (inputHook: any, value: string) => {
	inputHook.ref.current!.value = value;
	inputHook.setInput(value);
};
