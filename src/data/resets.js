
const data = [
		{
				name: 'Eric Meyer\'s CSS Resets',
				url: 'https://meyerweb.com/eric/tools/css/reset/index.html',
				description: 'A CSS Reset style sheet is a list of rules that \'reset\' all of the default browser styles',
				created_at: new Date(2007, 3, 18),
				tags: ['resets'],
		},	
		{
				name: 'undohtml.css',
				url: 'http://tantek.com/log/2004/undohtml.css',
				description: 'The oldest CSS reset by Tantek Çelik’ to undo some of the default styling of common (X)HTML browsers',
				created_at: new Date(2004, 0, 1),
				links:[
						{
								name: 'Killer Collection of CSS Resets',
								url: 'https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/',
						}
				],
				tags: ['resets'],
		},
		{
				name: 'Normalize.css',
				url: 'https://necolas.github.io/normalize.css/',
				description: 'Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.',
				created_at: new Date(2012,0,1),
				tags: ['resets']
		},
];

export default data;
