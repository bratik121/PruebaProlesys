//Setea los valores de los inputs a vacio
export const truncate = (inputHook: any) => {
	inputHook.ref.current!.value = "";
	inputHook.setInput("");
};
