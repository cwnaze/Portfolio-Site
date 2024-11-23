import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'yellow': {
				100: '#F4F1DE',
				200: '#F2CC8F'
			},
			'red': {
				100: '#E07A5F'
			},
			'green': {
				100: '#81B29A'
			},
			'blue': {
				100: '#3D405B'
			},
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		  },
		extend: {}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
