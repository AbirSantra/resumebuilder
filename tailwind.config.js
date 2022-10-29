/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			transparent: "transparent",
			"white-one": "#ffffff",
			"white-two": "#f7fbfd",
			"black-one": "#1d1f20",
			"black-two": "#272b30",
			"grey-one": "#363c44",
			"grey-two": "#414952",
			"grey-three": "#545c6a",
			primary: "#045cdc",
			"primary-dark": "#1c4393",
			"primary-light": "#61abee",
			"primary-lighter": "#f7faff",
		},
		fontFamily: {
			Inter: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};