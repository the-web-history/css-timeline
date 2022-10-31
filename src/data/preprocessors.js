
const data = [
	{
				name: 'Sass',
				url: 'https://sass-lang.com/',
				description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
				created_at: new Date(2006,0,1),
				tags: ['preprocessors'],
		},	
{
				name: 'LESS',
				url: 'http://lesscss.org/',
				description: 'Less (Leaner Style Sheets; sometimes stylized as LESS) is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) and run on the client side or server side.',
				created_at: new Date(2009,0,1),
				links: [
						{
								name: 'Wikipedia',
								url: 'https://en.wikipedia.org/wiki/Less_(stylesheet_language)'
						}
				],
				tags: ['preprocessors'],
		},
		{
				name: 'Stylus',
				url: 'http://stylus-lang.com/',
				description: 'Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS). Its design is influenced by Sass and LESS.',
				created_at: new Date(2010,0,1),
				links: [
						{
								name: 'Wikipedia',
								url: 'https://en.wikipedia.org/wiki/Stylus_(stylesheet_language)'
						},
						{
								name: 'Github',
								url: 'https://github.com/stylus/stylus'
						}
				],
				tags: ['preprocessors']
		},
{
				name: 'STYLIS',
				url: 'https://stylis.js.org/',
				description: 'A Light–weight CSS Preprocessor.',
				created_at: new Date(2016, 10, 27),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/thysultan/stylis'
						}
				],
				tags: ['preprocessors']
		},
		{
				name: 'PostCSS',
				url: 'https://postcss.org/',
				description: 'PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.',
				created_at: new Date(2013, 8, 1),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/postcss/postcss'
						}
				],
				tags: ['preprocessors']
		},
];

export default data;
