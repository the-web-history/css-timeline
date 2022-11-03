const data = [
  {
    name: "Microsoft's Internet Explorer 3",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "The first commercial browser to support CSS was Microsoft's Internet Explorer 3, which was released in August 1996. IE3 reliably supports most of the color, background, font, and text properties, but it does not implement much of the box model.",
    created_at: new Date("1996-08-01"),
    tags: ["browsers"],
  },
  {
    name: "Mozilla Firefox 1.0",
    url: "",
    description:
      "Mozilla Corporation released a multiplatform web browser, Firefox 1.0. Compared with browsers from the Internet Explorer family, Firefox 1.0 was characteristic for its higher security, better web standards support, and a number of plug-ins that could be additionally installed. As a result, Firefox gained major popularity among users and exceeded 1 billion downloads between 2004 and 2009. The name Firefox was allegedly derived from the English translation of the Chinese name for the red panda.",
    created_at: new Date("2004-11-09"),
    tags: ["browsers"],
  },
  {
    name: "Safari 1.0",
    url: "https://www.webdesignmuseum.org/web-design-history/safari-1-0-2003",
    description:
      "Apple introduced its own web browser, Safari 1.0. The browser uses the WebKit renderer to display website content. Safari 1.0 was initially available for download as a standalone program, but, in October 2003, it became the default Mac OS X 10.3 operating system browser.",
    created_at: new Date("2003-06-23"),
    tags: ["browsers"],
  },
  {
    name: "Opera 3.5",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "The third browser that ventured into CSS was Opera. The browser from the small Norwegian company made headlines in 1998 by being tiny (it fit on a floppy!) and customizable while supporting most features found in the larger offerings from Microsoft and Netscape. Opera 3.5 was released in November 1998, and supported most of CSS1.",
    created_at: new Date("1998-11-01"),
    tags: ["browsers"],
  },
		{
				name: 'Netscape Navigator 2.0',
				url: '',
				description: 'The Netscape Communications Corporation launched Netscape Navigator 2.0 as its new major product. The browser contained a wide range of innovations and enhancements. Among other features, Netscape Navigator 2.0 supported JavaScript, animated GIFs, the HTML tag <frame> and proprietary tag <blink>. Netscape Mail 2.0 was also part of version 2.0, making Netscape Navigator 2.0 a fully operational Web application package.',
				created_at: new Date('1995-09-18'),
				    tags: ["browsers"],

		},
  {
    name: "Netscape Navigator 4",
    url: "https://www.w3.org/Style/CSS20/history.html",
    description:
      "The next browser to announce support for CSS was Netscape Navigator, version 4.0. The Netscape implementation supports a broad range of features – for example, floating elements – but the Netscape developers did not have time to fully test all the features that are supposedly supported. The result is that many CSS properties cannot be used in Navigator 4.",
    created_at: new Date("1997-06-01"),
    tags: ["browsers"],
  },
  {
    name: "Google Chrome",
    url: "https://www.webdesignmuseum.org/web-design-history/google-chrome-2008",
    description:
      "Google released the beta version of Google Chrome's freeware browser for Windows. In December 2008, the first stable version of Google Chrome 1.0 was released. Since January 2009, Chrome has been available for MacOS, and in February 2012, its first beta version for Android 4 was released. At the turn of April and May 2012, Chrome surpassed the popularity of Internet Explorer and became the most widely used web browser. In 2018, Google Chrome had more than 66% of the global market share.",
    created_at: new Date("2008-09-02"),

    tags: ["browsers"],
  },
		{
				name: 'WorldWideWeb - the first browser',
				url: 'https://www.webdesignmuseum.org/web-design-history/worldwideweb-the-first-browser-1990',
				description: "At CERN, a Swiss research center, a British physicist and internet pioneer Tim Berners-Lee created the world's first web browser, called WorldWideWeb. The browser was also a simple WYSIWYG (What You See Is What You Get) editor for editing web pages. WorldWideWeb only worked with the NeXTStep operating system. Later, the browser was renamed Nexus to avoid confusion with the World Wide Web (WWW).",
				created_at: new Date('1990-12-25'),
				tags: ['browsers']
		},
		{
				name: 'ViolaWWW',
				url: 'https://www.webdesignmuseum.org/web-design-history/violawww-1992',
				description: "Pei-Yuan Wei developed the ViolaWWW browser for Unix while he was working at the University of California at Berkeley. ViolaWWW was the first browser to support scripting, table rendering and forms. The browser also contained a simple stylesheet to define the website's visual appearance. In March 1994, Pei-Yuan Wei released its last version, the lone developer no longer being able to keep up with the Mosaic Communications Corporation, which launched the Mosaic Netscape 0.9 browser the same year.",
				created_at: new Date('1992-03-09'),
				tags: ['browsers']
		},
		{
				name: 'Mosaic 1.0',
				url: '',
				description: 'Students Marc Andreessen and Eric Bina from the University of Illinois programmed one of the first web browsers with a graphical interface. Mosaic (full name NCSA Mosaic) worked on multiple platforms including Windows and was available for free, thanks to which it gained worldwide popularity among the general public shortly after being launched. Its development officially ended on January 7, 1997.',
				created_at: new Date('1993-11-30'),
				tags: ['browsers']
				
		},
		{
				name: 'Opera 1.0',
				url: 'https://www.webdesignmuseum.org/web-design-history/opera-1-0-1995',
				description: 'The Norwegian company Opera Software first introduced to the public a new MultiTorg Opera 1.0 web browser that used MDI (Multiple Document Interface) technology. The use of MDI enabled users to simultaneously open several windows of webpages within the browser. As of version 2.0, the browser’s name was shortened to Opera.',
				created_at: new Date('1995-04-10'),
				tags: ['browsers']
		},
		{
				name: 'Internet Explorer 1.0',
				url: 'https://www.webdesignmuseum.org/web-design-history/internet-explorer-1-0-1995',
				description: 'Microsoft released, as a part of its bonus package, the Microsoft Plus! Internet Jumpstart Kit (later also known as the Internet Connection Wizard) for Windows 95, which included Internet Explorer 1.0. In the original version of Windows 95, a web browser was not available, as Microsoft underestimated the potential of the rapidly developing Internet. The source code for Internet Explorer 1.0 was based on the older Spyglass Mosaic browser for which Microsoft purchased license rights. Internet Explorer 1.0 occupied only 1 MB of disk space and its features were considerably limited compared to other browsers at the time.',
				created_at: new Date('1995-08-16'),
				tags: ['browsers']
		},
		{
				name: 'Mosaic Netscape 0.9',
				url: 'https://www.webdesignmuseum.org/web-design-history/mosaic-netscape-0-9-1994',
				description: 'The Mosaic Communications Corporation (renamed Netscape Communications Corporation on November 14, 1994) launched, under the name Mosaic Netscape 0.9, the first one in a series of browsers, called Netscape Navigator in the subsequent versions. Shortly after being released, Mosaic Netscape 0.9 and Netscape Navigator 1.0 (released on December 15, 1994) became widely popular and, within a few months, assumed a dominant position on the market.',
				created_at: new Date('1994-10-13'),
				tags: ['browsers']
		},
		{
				name: 'Microsoft Edge',
				url: 'https://www.webdesignmuseum.org/web-design-history/microsoft-edge-2015',
				description: 'Microsoft released the first version of the Microsoft Edge web browser for Windows 10. Microsoft Edge was subsequently included as a default browser on Windows 10 Mobile and Xbox One operating systems, definitively replacing the older Internet Explorer 11 and Internet Explorer Mobile browsers. On December 6, 2018, Microsoft announced that Edge will no longer use its own EdgeHTML rendering engine and will be based on Chromium, Google\'s open source rendering engine.',
				created_at: new Date('2015-03-30'),
				tags: ['browsers']
				
		}
];

export default data;
