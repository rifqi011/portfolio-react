// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Path to your files
	],
	theme: {
		extend: {
			colors: {
				black: "#111",
				white: "#fff",
				purple: "#9024b6",
				gray: "#ffffff0a",
				orange: "#fd6f00",
			},
			backgroundImage: {
				"gradient-1": "linear-gradient(90deg, rgba(253, 111, 0, 1) 0%, rgba(144, 36, 182, 1) 100%)",
				"gradient-2": "linear-gradient(90deg, rgba(253, 111, 0, 1) 0%, rgba(144, 36, 182, 1) 50%)",
				"gradient-3": "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(253, 111, 0, 1) 1%, rgba(144, 36, 182, 1) 100%)",
			},
			transitionTimingFunction: {
				"transition-1": "all 0.3s ease-in",
				"transition-2": "all 0.7s ease-out",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
