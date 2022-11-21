const articles = [
  {
    name: "The End of Global CSS",
    url: "https://medium.com/seek-blog/the-end-of-global-css-90d2a4a06284",
    description: "An article by Mark Dalgleish about CSS Modules",
    created_at: new Date("2015-05-20"),
    tags: ["articles"],
  },
  {
    name: "Fear of Style Sheets",
    url: "https://alistapart.com/article/fear/",
    description: "An article by Jeffrey Zeldman in A List Apart",
    created_at: new Date("1999-03-12"),
    tags: ["articles"],
  },
  {
    name: "Challenging CSS Best Practices",
    url: "https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/",
    description:
      "The term “Atomic CSS” was coined by Thierry Koblenz in his foundational article in Smashing Magazine",
    created_at: new Date("2013-10-21"),
    tags: ["articles"],
  },
  {
    name: "Responsive Web Design",
    url: "https://alistapart.com/article/responsive-web-design/",
    description:
      'Ethan Marcotte introduced the term "Responsive Web Design" in an article published in A List Apart',
    created_at: new Date("2010-05-25"),
    tags: ["articles"],
  },
  {
    name: "CSS Sprites",
    url: "https://alistapart.com/article/sprites/",
    description:
      "In 'A List Apart' webzine, Dave Shea published an article entitled 'CSS Sprite: Image Slicing's Kiss of Death.' In the article, the author described a technique called CSS Sprites, the basis of which was to connect several smaller graphic elements into one larger image. The graphic elements are then placed on the website using the background-position feature. Thanks to CSS Sprites, a website loads faster because it only uploads one image, reducing the number of HTTP requests.",
    created_at: new Date("2004-03-05"),
    tags: ["articles"],
  },
  {
    name: "Box Model Hack",
    url: "http://tantek.com/CSS/Examples/boxmodelhack.html",
    description:
      "The American-Turkish developer Tantek Çelik came up with a solution called Box Model Hack while working on Internet Explorer 5 for Mac. The application of this hack makes it possible to change the DOCTYPE declaration, which allows web developers to define which CSS Box Model will be used in Internet Explorer.",
    created_at: new Date("2002-04-01"),
    tags: ["articles"],
  },
  {
    name: 'CSS: Simple Rules for Better Organization and More Efficiency',
    url: 'https://meiert.com/en/blog/css-organization-and-efficiency/',
    description: 'A first mention of using declarations just once, for smaller CSS payload and improved maintainability',
    created_at: new Date('2008-05-15'),
    tags: ["articles"],
  },
		{
				name: 'Atomic OOBEMITSCSS',
				url: 'https://www.sitepoint.com/atomic-oobemitscss/',
				description: 'An article by Una Kravets in SitePoint about Atomic OOBEMITSCSS',
				created_at: new Date('2015-07-07'),
    tags: ["articles"],
		},
		{
				name: 'Title CSS: A Simple Approach to CSS Class Naming',
				url: 'https://www.sitepoint.com/title-css-simple-approach-css-class-naming/',
				description: 'An article by Jon Cuthbert in SitePoint about Title CSS',
				created_at: new Date('2015-03-25'),
    tags: ["articles"],
		},
		{
				name: '8 simple rules for a robust, scalable CSS architecture',
				url: 'https://github.com/jareware/css-architecture/blob/master/README.md',
				description: 'The manifest of things by Jarno Rantanen, about managing CSS in large, complex web projects during my many years of professional web development. ',
				created_at: new Date('2016-10-16'),
				tags: ["articles"],
		},
		{
				name: 'More Meaningful CSS',
				url: 'https://snook.ca/archives/html_and_css/more-meaningful-css',
				description: 'An article by Jonathan Snook',
				created_at: new Date('2016-05-17'),
				tags: ["articles"],
		},
		{
				name: 'CSS and Scalability',
				url: 'http://mrmrs.io/writing/2016/03/24/scalable-css/',
				description: 'An article by Adam Morse',
				created_at: new Date('2016-03-24'),
				tags: ["articles"],
		},
		{
				name: 'Can CSS Be Too Modular?',
				url: 'csswizardry.com/2015/03/can-css-be-too-modular/',
				description: 'An article in CSSWizardry by Harry Roberts',
				created_at: new Date('2015-03-08'),
				tags: ["articles"],
		}
];

export default articles;
