export const notEmpty = (text: string): boolean => text != "";
export const validEmail = (email: string) =>
	!email.match(
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);

export const validText = (text: string) => !text.match(/^([A-Za-z]+[\s-]*)+$/i);
export const notCV = (href: string) => href.includes("#");
