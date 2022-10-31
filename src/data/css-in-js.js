const data = [
	{
				name: 'Aphrodite',
				url: 'https://github.com/Khan/aphrodite',
				description: 'Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation',
				created_at: new Date('2015-10-04'),
				tags: ['css-in-js']
		},
		{
				name: 'Babel-plugin-css-in-js',
				url: 'https://github.com/martinandert/babel-plugin-css-in-js',
				description: 'A plugin for Babel v6 which transforms inline styles defined in JavaScript modules into class names so they become available to, e.g. the `className` prop of React elements.',
				created_at: new Date('2015-11-15'),
				tags: ['tools', 'css-in-js']
		},
		{
				name: 'Classy',
				url: 'http://inturn.github.io/classy/',
				description: 'Classy makes styling React components composable, extensible, and simple. ',
				created_at: new Date('2015-08-09'),
				links:[{
						name: 'Github',
						url: 'https://github.com/inturn/classy',
				}],
				tags: ['tools', 'css-in-js']
		},
		{
				name: 'csjs',
				url: 'https://github.com/rtsao/csjs',
				description: 'CSJS allows you to write modular, scoped CSS with valid JavaScript.',
				created_at: new Date('2015-09-20'),
				tags: ['tools', 'css-in-js']
		},
		{
				name: 'CSS Loader',
				url: 'https://github.com/webpack-contrib/css-loader',
				description: 'css-loader is a Webpack plugin that interprets @import and url() like import/require() and will resolve them.',
				created_at: new Date('2012-04-01'),
				tags: ['tools', 'css-in-js']
		},
		{
				name: 'JSS',
				url: 'https://cssinjs.org/',
				description: 'JSS is an authoring tool for CSS which uses JavaScript as a host language.',
				created_at: new Date('2014-10-12'),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/cssinjs/jss'
						}
				],
				tags: ['css-in-js', 'react']
		},
		{
				name: 'react-styled',
				url: 'https://github.com/bloodyowl/react-styled',
				description: 'styled component for react & style-loader/usable',
				created_at: new Date('2015-03-22'),
				tags: ['css-in-js', 'react']
		},
		{
				name: 'react-with-styles',
				url: 'https://github.com/airbnb/react-with-styles',
				description: 'Use CSS-in-JavaScript with themes for React without being tightly coupled to one implementation',
				created_at: new Date('2016-08-21'),
				tags: ['css-in-js', 'react']
		},
		{
				name: 'styled-jsx',
				url: 'https://github.com/vercel/styled-jsx',
				description: 'Full CSS support for JSX without compromises',
				created_at: new Date('2016-12-04'),
				tags: ['css-in-js', 'react']
		},
		{
				name: 'styled-components',
				url: 'https://styled-components.com/',
				description: 'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅',
				created_at: new Date('2016-08-14'),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/styled-components/styled-components',
						}
				],
				tags: ['css-in-js', 'react']
				
		},
		{
				name: 'stylin',
				url: 'https://github.com/sultan99/stylin',
				description: 'A built-time CSS library for styling React components.',
				created_at: new Date('2021-02-07'),
				tags: ['css-in-js', 'react']
				
		},
		{
				name: 'emotion',
				url: 'https://emotion.sh/',
				description: '👩‍🎤 CSS-in-JS library designed for high performance style composition',
				created_at: new Date('2017-05-21'),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/emotion-js/emotion',
						}
				],
				tags: ['css-in-js', 'react']
				
		},
		{
				name: 'glamor',
				url: 'https://github.com/threepointone/glamor',
				description: 'inline css for react et al',
				created_at: new Date('2016-07-17'),
				tags: ['css-in-js', 'react']
		},
		{
				name: 'glamorous',
				url: 'https://glamorous.rocks/',
				description: 'Maintainable CSS with React',
				created_at: new Date('2017-04-02'),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/paypal/glamorous'
						}
				],
				tags: ['css-in-js', 'react']
		},
		{
				name: 'radium',
				url: 'https://github.com/FormidableLabs/radium',
				description: 'A toolchain for React component styling',
				created_at: new Date('2015-01-04'),
				tags: ['css-in-js', 'react']
		},	
{
				name: 'Linaria',
				url: 'https://linaria.dev/',
				description: 'Zero-runtime CSS in JS library.',
				created_at: new Date('2017-05-21'),
				tags: ['tools', 'css-in-js'],
				links: [
						{
								name: 'Github',
								url: 'https://github.com/callstack/linaria'
						}
				]
		},
		{
				name: 'Stitches',
				url: 'https://stitches.dev/',
				description: 'CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.',
				created_at: new Date('2020-04-12'),
				tags: ['tools','css-in-js'],
				links: [
						{
								name: 'Github',
								url: 'https://github.com/stitchesjs/stitches'
						}
				]
		},
		{
				name: 'vanilla-extract',
				url: 'https://vanilla-extract.style/',
				description: 'Zero-runtime Stylesheets in TypeScript. Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.',
				created_at: new Date('2021-02-21'),
				tags: ['tools','css-in-js'],
				links: [
						{
								name: 'Github',
								url: 'https://github.com/vanilla-extract-css/vanilla-extract'
						}
				]
		},
		{
				name: 'astroturf',
				url: 'https://4catalyzer.github.io/astroturf/',
				description: 'An "artificial" CSS-in-JS for those that want it all.',
				created_at: new Date('2016-10-16'),
				tags: ['tools','css-in-js'],
				links: [
						{
								name: 'Github',
								url: 'https://github.com/4Catalyzer/astroturf'
						}
				]
		},
			
];

export default data;
