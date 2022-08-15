/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
			colors: {
				green: "#28AD4E",
				lightgreen: "#E1F6D7",
				white: "#FFFFFF",
				primary: {
					400: "#2138A8",
					300: "#2743C8",
					200: "#3D58D9",
					100: "#6B88EF",
				},
				secondary: {
					200: "#E80000",
					100: "#FFCECE",
				},
				tertiary: {
					300: "#8D5A09",
					200: "#FF9314",
					100: "#FBE490",
				},
				neutral: {
					900: "#000000",
					800: "#262628",
					700: "#1A1A25",
					600: "#242533",
					500: "#091E42",
					400: "#213353",
					300: "#C6D5DE",
					200: "#E1E0E1",
					100: "#E9E9E9",
				},
			},
		},
	},
	plugins: [],
};
