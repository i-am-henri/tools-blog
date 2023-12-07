/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#e2e8ec',
				'background': '#070a0b',
				'primary': '#a6beca',
				'secondary': '#2a367c',
				'accent': '#79a3b9',
			},
			fontFamily: {
				lobster: ["Lobster", "cursive"],
			},
		},
	},
	plugins: [],
}
