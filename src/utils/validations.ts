/**Validaciones de Strings */
export const notEmpty = (text: string): boolean => text != "";
export const validEmail = (email: string) =>
	!email.match(
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);
export const validText = (text: string) => !text.match(/^([A-Za-z]+[\s-]*)+$/i);

export const validNumber = (number: string) => Number.isNaN(Number(number));

export const validProduct = (product: string) =>
	!product.match(/^([A-Za-z0-9ñ]\s*)+$/);
export const validProductD = (productD: string) =>
	!productD.match(/^[a-zA-Z0-9ñ,!.: ]*$/);

/**Validaciones de Inputs */

export const validateUsuario = (usuario: any): number => {
	if (notEmpty(usuario.input)) {
		usuario.setError("");
		return 0;
	} else {
		usuario.setError("Introduzca un usuario");
		return 1;
	}
};

export const validateContraseña = (contraseña: any): number => {
	if (notEmpty(contraseña.input)) {
		contraseña.setError("");
		return 0;
	} else {
		contraseña.setError("Introduzca una contraseña");
		return 1;
	}
};

export const validateText = (text: any): number => {
	if (notEmpty(text.input)) {
		if (validText(text.input)) {
			text.setError("Caracteres invalidos");
			return 1;
		} else {
			text.setError("");
			return 0;
		}
	} else {
		text.setError(`Introduzca un ${text.ref.current.name}!`);
		return 1;
	}
};

export const validateEmail = (email: any): number => {
	if (notEmpty(email.input)) {
		if (validEmail(email.input)) {
			email.setError("Correo invalido");
			return 1;
		} else {
			email.setError("");

			return 0;
		}
	} else {
		email.setError("Introduzca un correo!");
		return 1;
	}
};

export const validateNumber = (number: any): number => {
	if (notEmpty(number.input)) {
		if (validNumber(number.input)) {
			number.setError("No es un numero");
			return 1;
		} else {
			if (!(Number(number.input) > 0)) {
				number.setError("Numero invalido");
				return 1;
			} else {
				number.setError("");
				return 0;
			}
		}
	} else {
		number.setError("Introduzca un numero!");
		return 1;
	}
};

export const validateProduct = (product: any) => {
	if (notEmpty(product.input)) {
		if (validProduct(product.input)) {
			product.setError("Caracteres invalidos");
			return 1;
		} else {
			product.setError("");
			return 0;
		}
	} else {
		product.setError("Introduzca un Nombre!");
		return 1;
	}
};
export const validateProductD = (product: any) => {
	if (notEmpty(product.input)) {
		if (validProductD(product.input)) {
			product.setError("Caracteres invalidos");
			return 1;
		} else {
			product.setError("");
			return 0;
		}
	} else {
		product.setError("Introduzca una Descripcion!");
		return 1;
	}
};
