import "./elements.css";

function Input({
	label,
	error,
	name,
	inputText,
	setInputText,
	refe,
}: {
	name: string;
	label: string;
	error: string;
	inputText: string;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
	refe: React.RefObject<HTMLInputElement>;
}) {
	return (
		<div className="inputBox bg-blanco">
			<input
				type="text"
				className={`border border-verde-500 ${
					inputText === "" ? "" : "inUse"
				} text-negro-500`}
				name={name}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
				ref={refe}
			/>
			<span className="text-negro-300">{label}</span>
			<p className="mt-1 text-rojo-500">{error}</p>
		</div>
	);
}

export default Input;
