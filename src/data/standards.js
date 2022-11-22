const data = [
  {
    name: "Proposal",
    url: "https://www.w3.org/People/howcome/p/cascade.html",
    description: "Håkon Wium Lie proposed the idea of CSS.",
    created_at: new Date("1994-10-10"),
    tags: ["standards"],
  },
  {
    name: "CSS1",
    url: "http://www.w3.org/TR/CSS1/",
    description: "The first version of CSS was published.",
    created_at: new Date("1996-12-17"),
    tags: ["standards"],
  },
  {
    name: "CSS2",
    url: "http://www.w3.org/TR/2008/REC-CSS2-20080411/",
    description:
      "CSS 2 was released and work on CSS 3 began. CSS 3 was very different from the other versions, fot instead of being a single monolithic specification, it was published as a set of separate documents known as modules.",
    created_at: new Date("1998-05-12"),
    tags: ["standards"],
  },
  {
    name: "CSS2.1",
    url: "http://www.w3.org/TR/2011/REC-CSS2-20110607/",
    description: "CSS 2.1 was released, which fixed the errors found in CSS 2",
    created_at: new Date("2011-05-07"),
    tags: ["standards"],
  },
  {
    name: "CSS Proposal",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "At the next WWW conference in April 1995, CSS was presented again. Both Bert and Håkon were there",
    created_at: new Date("1995-04-01"),
    tags: ["standards"],
  },
  {
    name: "www-style",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "The www-style mailing list was created in May 1995, and the discussions there have often influenced the development of the CSS specifications.",
    created_at: new Date("1995-05-01"),
    tags: ["standards"],
  },
		{
				name: 'W3C.org',
				url: 'https://www.webdesignmuseum.org/web-design-history/w3c-org-1994',
				description: 'Tim Berners-Lee founded an international organization called World Wide Web Consortium (W3C). The main objective of the consortium is the development of Web standards for the World Wide Web (WWW). For example, W3C developed standards for HTML, XHML, XML, or CSS markup languages. Another aim of the organization is education and development of Web Accessibility Rules (WCAG).',
				created_at: new Date('1994-10-13'),
    tags: ["standards"],
		},
  {
    name: "W3C",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "In 1995, the World Wide Web Consortium (W3C) also became operational. Companies were joining the Consortium at a high rate and the organization became established. Workshops on various topics were found to be a successful way for W3C members and staff to meet and discuss future technical development.",
    created_at: new Date("1995-06-01"),
    tags: ["standards"],
  },
  {
    name: "HTML ERB",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "At the end of 1995, W3C set up the HTML Editorial Review Board (HTML ERB) to ratify future HTML specifications. Because style sheets were within the sphere of interest of the members of the new group, the CSS specification was taken up as a work item with the goal of making it into a W3C Recommendation.",
    created_at: new Date("1996-12-01"),
    tags: ["standards"],
  },
  {
    name: "CSS Working group in W3C",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "In February 1997, CSS got its own working group inside W3C and the new group set out to work on the features which CSS1 didn't address.",
    created_at: new Date("1997-02-01"),
    tags: ["standards"],
  },

  {
    name: "The acid test",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "Todd Fahrner created the acid test in October 1998, which became the ultimate challenge",
    created_at: new Date("1998-10-01"),
    tags: ["standards"],
  },

  {
    name: "Media Queries",
    url: "https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090423/",
    description:
      "Media Queries became a W3C Candidate Recommendation. A media query consists of a media type and zero or more expressions to limit the scope of style sheets. By using media queries, presentations can be tailored to a specific range of output devices without changing the content itself.",
    created_at: new Date("2009-04-23"),
    tags: ["standards"],
  },
  {
    name: "CSS Grid in Edge browser",
    url: "https://alistapart.com/article/the-story-of-css-grid-from-its-creators/",
    description:
      "On October 17th, Microsoft’s Edge browser shipped its implementation of CSS Grid. This is a milestone for a number of reasons. First, it means that all major browsers now support this incredible layout tool. Second, it means that all major browsers rolled out their implementations in a single year(!), a terrific example of standards success and cross-browser collaboration. But third, and perhaps most interestingly, it closes the loop on a process that has been more than 20 years in the making.",
    created_at: new Date("2017-10-17"),
    tags: ["standards"],
    links: [
      {
        name: "CanIUse",
        url: "https://caniuse.com/?search=css%20grid",
      },
    ],
  },
  {
    name: "CSS Grid Layout Module Level 1",
    url: "https://www.w3.org/TR/css-grid-1/",
    description:
      "CSS Grid Layout Module Level 1 became a  W3C Candidate Recommendation. This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a predefined flexible or fixed-size layout grid.",
    created_at: new Date("2016-09-29"),
    tags: ["standards"],
  },
  {
    name: "Rebecca Purple",
    url: "https://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html",
    description:
      "Following a proposal sent to social media, it is suggested to add the named color 'rebeccapurple', for value #663399, to  CSS Color Level 4. This is a tribute to Eric Meyer's daughter who recently passed away and a mark of support from all the  Web community to Eric.",
    created_at: new Date("2014-06-22"),
    tags: ["standards"],
    links: [
      {
        name: "Eric Meyer's site",
        url: "https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/",
      },
    ],
  },
  {
    name: "Media Queries",
    url: "https://www.w3.org/TR/mediaqueries-3/",
    description:
      "The W3C consortium released the first draft of the Media Queries specification. The original idea for the Media Queries module appeared in the first draft of the CSS specification by Norwegian programmer Håkon Wium Lie in October 1994. However, this proposal did not become part of CSS1. The CSS3 Media Queries module allows web developers to adjust the rendering of web page content according to various factors such as screen resolution. Currently, Media Queries are one of the basic techniques used in responsive web design.",
    created_at: new Date("2001-04-04"),
    tags: ["standards"],
  },
  {
    name: "SVG 1.0",
    url: "https://www.w3.org/TR/SVG11/",
    description:
      "Scalable Vector Graphics (SVG) is a graphical vector file format based on the XML markup language. SVG has become the basic open format for vector graphics on web pages. The SVG format has been developed since 1998 by W3C and is currently fully supported by all major browsers.",
    created_at: new Date("2001-09-04"),
    tags: ["standards"],
  },
  {
    name: "CSS Grid",
    url: "https://www.w3.org/TR/2007/WD-css3-grid-20070905/",
    description:
      "W3C released the first proposal of the CSS Grid specification. This CSS module defines a set of properties for creating a layout fitted into a regular grid that consists of rows and columns. The CSS Grid makes it easy to create complex and full-page layouts without the need of using cascading style layout methods involving float and positioning. CSS Grid features are currently supported by most major browsers.",
    created_at: new Date("2007-09-05"),
    tags: ["standards"],
  },
  {
    name: "CSS Flexbox Layout",
    url: "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/",
    description:
      "W3C issued the first proposal of the CSS Flexible box layout (Flexbox) specification. Flexbox introduces a new way of creating web layout, an easier alignment of elements and a better distribution of space with respect to the device's display resolution. Flexbox features are currently supported in most major browsers.",
    created_at: new Date("2009-07-23"),
    tags: ["standards"],
  },
		{
				name: 'Web 2.0',
				url: 'https://www.webdesignmuseum.org/web-design-history/web-2-0-1999',
				description: "Darcy DiNucci published an article entitled 'Fragmented Future' in the Print magazine, in which the term Web 2.0 was first introduced. The term refers to the development phase of the Web in which the content of websites is created and shared primarily by the users themselves. Typical Web 2.0 examples include social networking sites, web forums, internet encyclopedias, or photo/video sharing portals. In 2004, Tim O'Reilly and Dale Dougherty held the first Web 2.0 conference, during which the term Web 2.0 was brought to the attention of a wider public.",
				created_at: new Date('1999-04-01'),
				tags: ["standards"],
				links:[{
						name: 'Article (PDF)',
						url: 'http://www.darcyd.com/fragmented_future.pdf'
				}]
		},
		{
				name: 'WOFF 1.0',
				url: 'https://www.w3.org/Submission/2010/03/',
				description: 'Mozilla Foundation, Opera Software and Microsoft submitted a proposal for the specification of a new Web Open Font Format (WOFF) to the W3C. The WOFF fonts are currently supported by all major browsers.',
				created_at: new Date('2010-04-08'),
				tags: ["standards"],
		},
		{
				name: 'HTML 5',
				url: 'https://www.w3.org/TR/2014/REC-html5-20141028/',
				description: 'W3C adopted the final recommendation for the HTML5 markup language. The HTML5 version has brought an improved browser multimedia playback support, new semantic tags that better define page structure, offline application support, and the <canvas> tag that can interpret vector graphics with an option to insert images.',
				created_at: new Date('2014-10-28'),
				tags: ["standards"],
		},
		{
				name: 'Material Design',
				url: '',
				description: 'Google introduced a new graphic style called Material Design at the Google I/O conference. Since 2015, Google has redesigned most of its applications and services using the consistent visual style of Material Design. According to Google\'s definition, Material Design is a "visual language that synthesizes the classic principles of good design with the innovation and the possibility of technology and science.”',
				created_at: new Date('2014-06-25'),
				tags: ["standards"],
				
		},
		{
				name: 'Media Queries - First Public Draft',
				url: 'https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010404/',
				description: 'HTML4 and CSS2 currently support media-dependent style sheets tailored for different media types. For example, a document may use sans-serif fonts when displayed on a screen and serif fonts when printed. "Screen" and "print" are two of the media types that have been defined. To describe in more detail what type of devices a style sheet applies to, this document proposes media queries.',
				created_at: new Date('2001-04-04'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Working Draft',
				url: 'https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010517/',
				description: 'Working draft version of Media Queries published',
				created_at: new Date('2001-05-17'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Last Call Working Draft',
				url: 'https://www.w3.org/TR/2002/WD-css3-mediaqueries-20020123/',
				description: 'This document is produced by the CSS Working Group and is one of the modules of the upcoming CSS3 specification. This is a  W3C Last Call Working Draft for review by W3C members and other interested parties.',
				created_at: new Date('2002-01-23'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Candidate Recommendation Snapshot',
				url: 'https://www.w3.org/TR/2002/CR-css3-mediaqueries-20020708',
				description: 'Media queries became part of the W3C Candidate recommendation snapshot',
				created_at: new Date('2002-07-08'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Candidate Recommendation Snapshot',
				url: 'https://www.w3.org/TR/2007/CR-css3-mediaqueries-20070606',
				description: 'Media queries became part of the W3C Candidate recommendation snapshot',
				created_at: new Date('2007-06-06'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Last Call Working Draft',
				url: 'https://www.w3.org/TR/2008/WD-css3-mediaqueries-20081015/',
				description: 'This is the last call for the working draft of Media queries specificiation',
				created_at: new Date('2008-10-15'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Candidate Recommendation Snapshot',
				url: 'https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090423/',
				description: 'Media queries became part of the W3C Candidate recommendation snapshot',
				created_at: new Date('2009-04-23'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Candidate Recommendation Snapshot',
				url: 'https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090915/',
				description: 'Media queries became part of the W3C Candidate recommendation snapshot',
				created_at: new Date('2009-09-15'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Candidate Recommendation Snapshot',
				url: 'https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/',
				description: 'Media queries became part of the W3C Candidate recommendation snapshot',
				created_at: new Date('2010-07-27'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries - Proposed Recommendation',
				url: 'https://www.w3.org/TR/2012/PR-css3-mediaqueries-20120426/',
				description: 'Media queries became a W3C proposed recommendation',
				created_at: new Date('2012-04-26'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries Recommendation',
				url: 'https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/',
				description: 'Media queries became a W3C recommendation',
				created_at: new Date('2012-06-19'),
				tags: ["standards"],
		},
		{
				name: 'Media Queries Level 3 Recommendation',
				url: 'https://www.w3.org/TR/2022/REC-mediaqueries-3-20220405/',
				description: 'Media Queries Level 3 became a W3C recommendation',
				created_at: new Date('2022-04-05'),
				tags: ["standards"],
		},
		{
				name: 'Selectors - First Public Draft',
				url: 'https://www.w3.org/TR/1999/WD-CSS3-selectors-19990803',
				description: 'This document is the first draft of one of the "modules" for the upcoming CSS3 specification. It not only describes the selectors that already exist in CSS1 and CSS2, but also proposes new selectors for CSS3 as well as for other languages that may need them.',
				created_at: new Date('1999-08-03'),
				tags: ["standards"],

		},
		{
				name: 'Selectors Level 3 - Proposed Recommendation',
				url: 'https://www.w3.org/TR/2009/PR-css3-selectors-20091215/',
				description: 'Selectors Level 3 became a W3C proposed recommendation. This document describes the selectors that already exist in CSS1 [CSS1] and CSS2 [CSS21], and further introduces new selectors for CSS3 and other languages that may need them.',
				created_at: new Date('2009-12-15'),
				tags: ["standards"],
		},
		{
				name: 'Selectors Level 3 - Recommendation',
				url: 'https://www.w3.org/TR/2011/REC-css3-selectors-20110929/',
				description: 'Selectors Level 3 became a W3C recommendation.',
				created_at: new Date('2011-09-29'),
				tags: ["standards"],
		},
		{
				name: 'Selectors Level 4 - First Public Draft',
				url: 'https://www.w3.org/TR/2011/WD-selectors4-20110929/',
				description: 'Selectors Level 4 describes the selectors that already exist in [SELECT], and further introduces new selectors for CSS and other languages that may need them. Publication as a Working Draft does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.',
				created_at: new Date('2011-09-29'),
				tags: ["standards"],
		}
];

export default data;
