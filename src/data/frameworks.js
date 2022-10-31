const data = [
	{
				name: 'Bootstrap',
				html_url: 'https://getbootstrap.com',
				description: 'The most popular HTML, CSS, and JS library in the world.',
				created_at: new Date(2011,7,19),
				tags: ['frameworks'],
		},
		{
				name: 'Foundation',
				url: 'https://get.foundation/',
				description: 'Foundation is a free and open-source responsive front-end framework, providing a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation and other interface elements, as well as optional functionality provided by JavaScript extensions. Foundation is an open source project, and was formerly maintained by ZURB. Since 2019, Foundation has been maintained by volunteers',
				created_at: new Date(2011,8,1),
				tags: ['frameworks'],
		},
		{
				name: 'Blueprint',
				url: 'http://www.blueprintcss.org/',
				description: 'Blueprint is a CSS framework, which aims to cut down on your development time. It gives you a solid foundation to build your project on top of, with an easy-to-use grid, sensible typography, useful plugins, and even a stylesheet for printing.',
				created_at: new Date(2007, 7, 3),
				links: [
						{
								name: 'Launch post',
								url: 'https://web.archive.org/web/20080516223431/http://bjorkoy.com/past/2007/8/3/launch_blueprint_a_css_framework/'
						},
						{
								name: 'Wikipedia',
								url: 'https://en.wikipedia.org/wiki/Blueprint_(CSS_framework)'
						}
				],
				tags: ['frameworks'],
		},
		{
				name: 'YAML',
				url: 'http://www.yaml.de/',
				description: 'A modular CSS framework for truly flexible, accessible and responsive websites',
				created_at: new Date(2005, 9, 1),
				links: [
						{
								name: 'Wikipedia',
								url: 'https://en.wikipedia.org/wiki/YAML_(framework)'
						}
				],
				tags: ['frameworks'],
		},
		{
				name: 'YUI',
				url:'https://clarle.github.io/yui3/',
				description: 'YUI - Yahoo! User Interface Library is a free, open source JavaScript and CSS library for building richly interactive web applications.',
				created_at: new Date(2006, 1, 13),
				links: [
						{
								name: 'Wikipedia',
								url: 'https://en.wikipedia.org/wiki/YUI_Library#CSS_resources'
						}
				],
				tags: ['frameworks'],
		},
		{
				name: 'Tailwind CSS',
				url: 'https://tailwindcss.com/',
				description: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
				created_at: new Date('2017-07-16'),
				links:[
						{
								name: 'Wikipedia',
								url: '',
						},
						{
								name: 'Github',
								url: 'https://github.com/tailwindlabs/tailwindcss'
						}
				],
				tags: ['frameworks'],
		},	
{
				name: 'Bulma',
				url: 'https://bulma.io/',
				description: 'Bulma: the modern CSS framework that just works. Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
				created_at: new Date('2016-01-24'),
				tags: ['frameworks'],
				links: [
						{
								name: 'Github',
								url: 'https://github.com/jgthms/bulma'
						}
				]
		},
		{
				name: 'inuitcss',
				url: 'https://github.com/inuitcss/inuitcss',
				description: 'Extensible, scalable, Sass-based, OOCSS framework for large and long-lasting UI projects.',
				created_at: new Date('2016-06-19'),
				tags: ['frameworks']
		},
			

];

export default data;
