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
				className={`bg-negro border border-verde-500 ${
					inputText === "" ? "" : "inUse"
				} text-moradoclaro`}
				name={name}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
				ref={refe}
			/>
			<span className="text-negro-500">{label}</span>
			<p className="mt-1 text-negro-500">{error}</p>
		</div>
	);
}

export default Input;
