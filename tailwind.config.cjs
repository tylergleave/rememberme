const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
	plugins: [require('flowbite/plugin')],
  
	darkMode: 'class',
  
	theme: {
	  listStyleType: {
		none: 'none',
		disc: 'disc',
		decimal: 'decimal',
		square: 'square',
		circle: 'circle',

	  },
	  extend: {
		colors: {
		  // flowbite-svelte
		  white: '#F1F0F2',
		  gray: {
			500: '#D7D7D9',
			900: '#69696a'
		  },
		  primary: {
			500: '#567360',
			900: '#2a382f'
		  },
		  secondary: {
			500: '#A68E6A',
			900: '#514634'
		  },
		  tertiary: {
			500: '#718cc0',
			900: '#37455e'
		  }
		}
	  },
	  container: {
		center: true,
		padding: '1rem',
	  },
	}
  };
  
  module.exports = config;