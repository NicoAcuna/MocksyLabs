/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './constants/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'footer-card-image': "url('../assets/images/footer-card-image.png')",
				'footer-card-image-2': "url('../assets/images/footer-card-image-2.png')",
				'footer-card-image-desktop': "url('../assets/images/footer-card-image-desktop.png')",
				'footer-logo': "url('../assets/images/footer-logo.png')",
				'download-bg': "url('../assets/images/download-bg.png')",
				'download-manage-bg': "url('../assets/images/download-manage-bg.png')",
				'download-manage-bg-desktop': "url('../assets/images/download-manage-bg-desktop.png')",
				'use-case-bg-desktop': "url('../assets/images/use-case-bg-desktop.png')",
				'use-case-bg-mobile': "url('../assets/images/use-case-bg-mobile.png')",
				'pricing-frame-bg': "url('../assets/images/pricing-frame-bg.png')",
				'why-mosafe-bg': "url('../assets/images/why-mosafe-bg.png')",
				'404-bg': "url('../assets/images/404.png')",
			},
			fontFamily: {
				axiforma: ['Axiforma', 'sans-serif'],
			},
			colors: {
				purple: {
					base: '#9B57FD',
					light: '#F0EFFF',
					dark: '#3D006C',
				},
				grey: {
					base: '#646167',
					light: '#96909A',
				},
				secondary: {
					dark: '#E2E0FD',
				},
				white: '#FFF',
				black: '#000',
				link: {
					base: '#1186D1',
				},
			},
		},
		colors: {},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		// ...
	],
}
