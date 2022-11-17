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
		{
				name: 'Pure',
				url: 'https://purecss.io/',
				description: 'A set of small, responsive CSS modules that you can use in every web project.',
				created_at: new Date('2013-05-15'),
				tags: ['frameworks', 'lightweight']
		},
		{
				name: 'Milligram',
				url: 'https://milligram.io/',
				description: 'A minimalist CSS framework',
				created_at: new Date('2015-12-26'),
				tags: ['frameworks', 'lightweight']
		},
		{
				name: 'Picnic CSS',
				url: 'https://picnicss.com/',
				description: 'Lightweight and Beautiful library',
				created_at: new Date('2014-08-31'),
				tags: ['frameworks', 'lightweight']
		},
		{
				name: 'Chota',
				url: 'https://jenil.github.io/chota/',
				description: 'A micro (~3kb) CSS framework.',
				created_at: new Date('2017-04-01'),
				tags: ['frameworks', 'lightweight']
		},
		{
				name: 'UIKit',
				url: 'https://getuikit.com/',
				description: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces.',
				created_at: new Date('2015-11-08'),
				tags: ['frameworks']
		},
		{
				name: 'Primer',
				url: 'https://primer.style/',
				description: 'Design, build, and create with GitHub’s design system. Primer was created for GitHub by GitHub. We love it so much, we chose to open-source it to allow the community to design and build their own projects with Primer.',
				created_at: new Date('2015-03-15'),
				tags: ['frameworks']
				
		},
		{
				name: 'Carbon Design System',
				url: 'https://carbondesignsystem.com/',
				description: 'Carbon is IBM’s open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.',
				created_at: new Date('2015-06-07'),
				tags: ['frameworks']
		},
		{
				name: 'Fomantic-UI',
				url: 'https://fomantic-ui.com/',
				description: 'The official community fork of Semantic-UI. Build beautiful websites fast, with concise HTML, intuitive javascript, and simplified debugging.',
				created_at: new Date('2013-04-07'),
				tags: ['frameworks']
		},
		{
				name: 'Pico.css',
				url: 'https://picocss.com/',
				description: 'Minimal CSS Framework for semantic HTML. Elegant styles for all natives HTML elements without .classes and dark mode automatically enabled.',
				created_at: new Date('2019-11-24'),
				tags: ['frameworks']
				
		},
		{
				name: 'Blaze UI',
				url: 'https://www.blazeui.com/',
				description: 'Framework-free open source UI toolkit. Blaze UI provides great structure for building websites quickly with a scalable and maintainable foundation.',
				created_at: new Date('2020-04-05'),
				tags: ['frameworks']
		},
		{
				name: 'Cirrus',
				url: 'https://cirrus-ui.netlify.app/',
				description: 'A component-and-utility-centric SCSS framework designed for rapid prototyping. Use beautiful pre-built components to bootstrap your next project and utility classes to polish your final design.',
				created_at: new Date('2016-12-18'),
				tags: ['frameworks']
		},
		{
				name: 'turretcss',
				url: 'https://turretcss.com/',
				description: 'Developed for design, turretcss is a styles and browser behaviour normalisation framework for rapid development of responsive and accessible websites.',
				created_at: new Date('2013-11-10'),
				tags: ['frameworks']
		},
		{
				name: 'Vanilla',
				url: 'https://vanillaframework.io/',
				description: 'A simple, extensible CSS framework. Backed by open-source code and written in Sass by the Canonical Web Team.',
				created_at: new Date('2015-02-22'),
				tags: ['frameworks']
				
		},
		{
				name: 'PatternFly',
				url: 'https://www.patternfly.org/v4/',
				description: 'Build scalable experiences in the open. PatternFly is an open source design system built to drive consistency and unify teams.',
				created_at: new Date('2017-11-05'),
				tags: ['frameworks']
		},
		{
				name: 'HiQ',
				url: 'https://jonathanharrell.github.io/hiq/',
				description: 'A high-IQ CSS framework. Jump-start your styling with a lightweight, easily customizable framework that is built with CSS custom properties and modern best practices.',
				created_at: new Date('2017-05-07'),
				tags: ['frameworks']
		}
			

];

export default data;
