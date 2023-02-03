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
		<div className="inputBox bg-negro">
			<input
				type="text"
				className={`bg-negro border border-morado-500 ${
					inputText === "" ? "" : "inUse"
				} text-moradoclaro`}
				name={name}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
				ref={refe}
			/>
			<span className="text-blanco">{label}</span>
			<p className="mt-1">{error}</p>
		</div>
	);
}

export default Input;
