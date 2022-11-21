

const data = [
	{
				name: 'OOCSS',
				url: 'https://github.com/stubbornella/oocss',
				description: 'It’s an approach for writing CSS that’s fast, maintainable, and standards-based. It adds much needed predictability to CSS so that even beginners can participate in writing beautiful websites.',
				created_at: new Date(2009, 1, 4),
				links: [
						{
								name: 'Slideshare',
								url: 'https://www.slideshare.net/stubbornella/object-oriented-css'
						},
						{
								name: 'Github',
								url: 'https://github.com/stubbornella/oocss',
						},
						

				],
				tags: ['methodology','modular css']
		},
		{
				name: 'BEM',
				url: 'https://getbem.com/introduction/',
				description: 'Block Element Modifier',
				created_at: new Date(2014, 7, 24),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/getbem/getbem.github.io'
						}
				],
				tags: ['methodology','modular css'],
		},
		{
				name: 'SMACSS',
				url: 'http://smacss.com/',
				description: 'SMACSS (pronounced “smacks”) is more style guide than rigid framework. There is no library within here for you to download or install.',
				created_at: new Date(2011,0,1),
				tags: ['methodology','modular css']
		},
		{
				name: 'SUIT CSS',
				url: 'http://suitcss.github.io/',
				description: 'SUIT CSS is a reliable and testable styling methodology for component-based UI development. A collection of CSS packages and build tools are available as modules. SUIT CSS plays well with React, Ember, Angular, and other component-based approaches to UI development.',
				created_at: new Date(2012, 8, 30),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/suitcss'
						}
				],
				tags: ['methodology','modular css']
		},
	{
				name: 'Maintainable CSS',
				url: 'https://maintainablecss.com/',
				description: 'MaintainableCSS is an approach to writing modular, scalable and maintainable CSS for small and large codebases. You can learn it in 20 minutes and implement it immediately in your project.',
				created_at: new Date('2018-09-30'),
				links: [
						{
								name: 'Github',
								url: 'https://github.com/adamsilver/maintainablecss.com/'
						}
				],
				tags: ['methodology']
		},
		
		{
				name: 'Atomic design',
				url: 'https://bradfrost.com/blog/post/atomic-web-design/',
				description: 'Atomic design is methodology for creating design systems. There are five distinct levels in atomic design: atoms, molecules, organisms, templates and pages',
				created_at: new Date('2013-06-10'),
				tags: ['methodology'],
				links: [{
						name: 'Book',
						url: 'http://atomicdesign.bradfrost.com/'
				}]
		},
{
				name: 'ITCSS',
				url: 'https://itcss.io/',
				description: 'A sane, scalable, managed CSS architecture from CSS Wizardry by Harry Roberts',
				created_at: new Date('2014-05-01'),
				tags: ['methodology']
		},
		{
				name: 'Title CSS',
				url: 'https://github.com/cuth/Title-CSS',
				description: 'Title CSS is an organizational technique geared to help you write beautiful and maintainable CSS. Similar to BEM, Title CSS aims to make CSS more readable by giving visual cues.',
				created_at: new Date('2014-02-25'),
				tags: ['methodology']
		},
		{
				name: 'Idiomatic CSS',
				url: 'https://github.com/necolas/idiomatic-css',
				description: 'Principles of writing consistent, idiomatic CSS.',
				created_at: new Date('2012-05-20'),
				tags: ['methodology']
				
		},
		{
				name: 'Point North',
				url: 'http://pointnorth.io/#base-browser-styling',
				description: 'North is a set of standards and best practices for developing modern web based properties.',
				created_at: new Date('2013-11-03'),
				tags: ['methodology']
		},
		{
				name: 'Kickoff CSS',
				url: 'http://trykickoff.com/learn/css.html#namingscheme',
				description: 'Kickoff uses a bespoke naming scheme for classnames, inspired loosely by the BEM naming scheme.',
				created_at: new Date('2016-04-26'),
				tags: ['methodology']
		}
];

export default data;
