/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				negro: {
					500: "#000807",
				},
				blanco: "#fefffe",
				verde: {
					300: "#46AA71",
					500: "#1A894A",
					700: "#154434",
				},
				verdeclaro: "#399e5a",
				amarillo: "#FFBA08",
			},
		},
	},
	plugins: [],
};
