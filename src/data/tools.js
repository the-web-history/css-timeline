const data = [
  {
    name: "960 Grid System",
    url: "https://960.gs/",
    description:
      "The 960 Grid System is an effort to streamline web development workflow by providing commonly used dimensions, based on a width of 960 pixels. There are two variants: 12 and 16 columns, which can be used separately or in tandem",
    created_at: new Date(2008, 0, 1),
    tags: ["tools"],
  },

  {
    name: "Pattern Primer",
    url: "https://github.com/adactio/Pattern-Primer",
    description: "Generating styled markup from a folder of markup snippets.",
    created_at: new Date(2011, 10, 19),
    tags: ["tools"],
  },
  {
    name: "Atomizer",
    url: "https://acss.io/",
    description:
      "Atomizer is an unopinionated CSS utility library for modern websites. Just add classes like D(f) and Fz(1.5rem) to your markup to efficiently style your website.",
    created_at: new Date(2014, 8, 28),
    links: [
      {
        name: "Github",
        url: "https://github.com/acss-io/atomizer",
      },
    ],
    tags: ["tools"],
  },
  {
    name: "Styled System",
    url: "https://styled-system.com/",
    description: "Style props for rapid UI development",
    created_at: new Date("2017-06-11"),
    tags: ["tools", "react"],
    links: [
      {
        name: "Github",
        url: "https://github.com/styled-system/styled-system",
      },
    ],
  },
  {
    name: "Theme UI: The Design Graph Framework",
    url: "https://theme-ui.com/",
    description:
      " Theme UI is a library for creating themeable user interfaces based on constraint-based design principles. Build custom component libraries, design systems, web applications, Gatsby themes, and more with a flexible API for best-in-class developer ergonomics.",
    created_at: new Date("2019-03-31"),
    links: [
      {
        name: "Github",
        url: "https://github.com/system-ui/theme-ui",
      },
    ],
    tags: ["tools", "react"],
  },
  {
    name: "Rebass",
    url: "https://rebassjs.org/",
    description: "REACT PRIMITIVE UI COMPONENTS BUILT WITH STYLED SYSTEM",
    created_at: new Date("2015-02-08"),
    links: [
      {
        name: "Github",
        url: "https://github.com/rebassjs/rebass",
      },
    ],
    tags: ["tools", "react"],
  },

  {
    name: "CSS Modules",
    url: "https://github.com/css-modules/css-modules",
    description:
      "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.",
    created_at: new Date("2015-05-24"),
    tags: ["tools"],
  },
  {
    name: "Bourbon",
    url: "https://www.bourbon.io/",
    description: "Bourbon is a lightweight Sass tool set",
    created_at: new Date("2011-01-01"),
    tags: ["tools", "preprocessors"],
    links: [
      {
        name: "Github",
        url: "https://github.com/thoughtbot/bourbon/",
      },
    ],
  },
  {
    name: "Susy",
    url: "https://www.oddbird.net/susy/",
    description:
      "Susy was a responsive layout engine for Sass, before flexbox and CSS grid were available.",
    created_at: new Date("2009-01-01"),
    tags: ["tools", "preprocessors"],
    links: [
      {
        name: "Github",
        url: "https://github.com/oddbird/susy",
      },
    ],
  },
		{
				name: 'React',
				url: 'https://reactjs.org/',
				description: 'Software engineer Jordan Walke from Facebook announced the creation of the React javascript library (sometimes referred to as React.js or ReactJS) at the JSConf US conference. The open-source React library is designed to make it easier to create user interfaces and UI components for web applications. React can also be used to create single-page or mobile applications. The development and maintenance of the React web framework is currently handled by Facebook along with a large community of independent developers.',
				created_at: new Date('2013-05-29'),
				tags: ["tools"],
		},
		{
				name: 'CSSTidy',
				url: 'https://csstidy.sourceforge.net/index.php',
				description: 'CSSTidy is an opensource CSS parser and optimiser. It is available as executeable file (available for Windows, Linux and OSX) which can be controlled per command line and as PHP script (both with almost the same functionality).',
				created_at: new Date('2005-01-01'),
				tags: ["tools"],
		}
];

export default data;
