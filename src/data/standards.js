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
    name: "Internet Explorer 6",
    url: "https://www.webdesignmuseum.org/web-design-history/internet-explorer-6-0-2001",
    description:
      "Less than two months before the official release of the Windows XP operating system, Microsoft released Internet Explorer 6.0. IE 6 was integrated into Windows XP and was also compatible with previous versions of the system down to Windows 98. Despite a significant amount of security flaws and lack of support for web standards, Internet Explorer 6.0 gained more than 80% market share in 2004. Together with earlier versions of IE 5.0 and IE 5.5, the proportion of Internet Explorer browsers in 2004 was more than 90%.",
    created_at: new Date("2001-08-27"),
    tags: ["browsers", "standards"],
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
    name: "Mozilla 1.0",
    url: "https://www.webdesignmuseum.org/web-design-history/mozilla-1-0-2002",
    description:
      "Mozilla (also known as Mozilla.org) released the Mozilla 1.0 web browser. The basis for Mozilla 1.0 was Gecko, an open source rendering engine which significantly improved the support of web standards.",
    created_at: new Date("2002-06-05"),
    tags: ["browsers", "standards"],
  },
  {
    name: "Safari 1.0",
    url: "https://www.webdesignmuseum.org/web-design-history/safari-1-0-2003",
    description:
      "Apple introduced its own web browser, Safari 1.0. The browser uses the WebKit renderer to display website content. Safari 1.0 was initially available for download as a standalone program, but, in October 2003, it became the default Mac OS X 10.3 operating system browser.",
    created_at: new Date("2003-06-23"),
    tags: ["browsers", "standards"],
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
    created_at: new Date(""),
    tags: ["standards"],
  },
];

export default data;
