/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				negro: "#2E282A",
				blanco: "#F2F2F2",
				morado: "#826AED",
				moradoclaro: "#C879FF",
				naranja: "#FF6542",
			},
		},
	},
	plugins: [],
};
