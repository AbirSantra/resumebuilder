/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			Inter: ["Inter", "sans-serif"],
			Ubuntu: ["Ubuntu", "sans-serif"],
		},
		extend: {
			colors: {
				transparent: "transparent",
				"white-one": "#ffffff",
				"white-two": "#f5f5f5",
				"black-one": "#1d1f20",
				"black-two": "#272b30",
				"grey-one": "#363c44",
				"grey-two": "#414952",
				"grey-three": "#545c6a",
				"grey-four": "#d6d6d6",
				primary: "#6366f1",
				"primary-dark": "#4338ca",
				"primary-light": "#818cf8",
				"primary-lighter": "#c7d2fe",
			},
		},
	},
	plugins: [],
};
