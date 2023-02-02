/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				negro: "#06070E",
				blanco: "#F2F2F2",
				morado: {
					500: "#826AED",
					700: "#826aed86",
				},
				moradoclaro: "#C879FF",
				naranja: "#FF6542",
			},
		},
	},
	plugins: [],
};
