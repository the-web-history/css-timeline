// data sources:
// https://github.com/awesome-css-group/awesome-css
// https://github.com/troxler/awesome-css-frameworks
// wikipedia
// https://www.w3.org/TR/?tag=css&status=REC
// https://www.w3.org/Style/CSS/specs.en.html
// https://www.webdesignmuseum.org/web-design-history/timeline-1998-2002

import articles from './articles';
import atomiccss from './atomic-css';
import cssinjs from './css-in-js';
import frameworks from './frameworks';
import methodology from './methodology';
import preprocessors from './preprocessors';
import resets from './resets';
import standards from './standards';
import tools from './tools';
import websites from './websites';
const data = [
		...articles,
		...atomiccss,
		...cssinjs,
		...frameworks,
		...methodology,
		...preprocessors,
		...resets,
		...standards,
		...tools,
		...websites,
		
];

export default data;
