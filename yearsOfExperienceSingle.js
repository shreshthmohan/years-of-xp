const languages = [
  {
    name: "C",
    created: "1972-01-01",
  },
  {
    name: "Java",
    created: "1995-05-23",
  },
  {
    name: "Python",
    created: "1989-12-20",
  },
  {
    name: "JavaScript",
    created: "1995-12-04",
  },
  {
    name: "C++",
    created: "1983-01-01",
  },
  {
    name: "C#",
    created: "2000-01-01",
  },
  {
    name: "Ruby",
    created: "1995-02-24",
  },
  {
    name: "Swift",
    created: "2014-06-02",
  },
  {
    name: "Go",
    created: "2009-11-10",
  },
  {
    name: "Rust",
    created: "2010-07-07",
  },
  {
    name: "Kotlin",
    created: "2011-07-20",
  },
  {
    name: "TypeScript",
    created: "2012-10-01",
  },
  {
    name: "PHP",
    created: "1994-06-08",
  },
  {
    name: "Perl",
    created: "1987-12-18",
  },
  {
    name: "Haskell",
    created: "1990-01-01",
  },
  {
    name: "R",
    created: "1993-08-01",
  },

  {
    name: "React",
    created: "2013-05-29",
  },
  {
    name: "AngularJS",
    created: "2010-10-20",
  },
  {
    name: "Angular",
    created: "2016-09-14",
  },
  {
    name: "Vue.js",
    created: "2014-02-01",
  },
  {
    name: "Node.js",
    created: "2009-05-27",
  },
  {
    name: "Express.js",
    created: "2010-11-16",
  },
  {
    name: "jQuery",
    created: "2006-08-26",
  },
  {
    name: "Backbone.js",
    created: "2010-10-13",
  },
  {
    name: "D3.js",
    created: "2011-01-01",
  },
  {
    name: "Ember.js",
    created: "2011-12-08",
  },
  {
    name: "Svelte",
    created: "2016-11-29",
  },
  {
    name: "Next.js",
    created: "2016-10-25",
  },
  {
    name: "NestJS",
    created: "2017-02-01",
  },

  {
    name: "Docker",
    created: "2013-03-20",
  },
  {
    name: "Kubernetes",
    created: "2014-06-06",
  },
  {
    name: "OpenShift",
    created: "2011-05-05",
  },
  {
    name: "containerd",
    created: "2017-03-15",
  },
  {
    name: "rkt (Rocket)",
    created: "2014-12-01",
  },
  {
    name: "Podman",
    created: "2017-12-11",
  },
  {
    name: "LXC (Linux Containers)",
    created: "2008-07-01",
  },
  {
    name: "Vagrant",
    created: "2010-01-20",
  },
  {
    name: "Mesos",
    created: "2009-11-20",
  },
  {
    name: "Nomad",
    created: "2015-09-02",
  },
  {
    name: "HTML",
    created: "1991-06-01",
  },
  {
    name: "CSS",
    created: "1996-12-17",
  },
  {
    name: "JavaScript",
    created: "1995-12-04",
  },
  {
    name: "XML",
    created: "1996-02-10",
  },
  {
    name: "Ajax",
    created: "1999-02-18",
  },
  {
    name: "REST",
    created: "2000-03-31",
  },
  {
    name: "jQuery",
    created: "2006-08-26",
  },
  {
    name: "JSON",
    created: "2001-07-01",
  },
  {
    name: "Bootstrap",
    created: "2011-08-19",
  },
  {
    name: "React",
    created: "2013-05-29",
  },
  {
    name: "Angular",
    created: "2010-09-14",
  },
  {
    name: "Vue.js",
    created: "2014-02-01",
  },
  {
    name: "Webpack",
    created: "2012-03-10",
  },
  {
    name: "Sass",
    created: "2006-11-28",
  },
  {
    name: "TypeScript",
    created: "2012-10-01",
  },
  {
    name: "GraphQL",
    created: "2012-10-01",
  },
  {
    name: "WebAssembly",
    created: "2015-06-17",
  },
  {
    name: "PWA (Progressive Web App)",
    created: "2015-06-16",
  },
  {
    name: "WebRTC",
    created: "2011-06-01",
  },
  {
    name: "Fortran",
    created: "1957-03-01",
  },
  {
    name: "COBOL",
    created: "1959-01-01",
  },
  {
    name: "LISP",
    created: "1958-05-01",
  },
  {
    name: "ALGOL",
    created: "1958-04-01",
  },
  {
    name: "Assembly Language",
    created: "1940s",
  },
  {
    name: "FORTRAN II",
    created: "1958-03-01",
  },
  {
    name: "BASIC",
    created: "1964-05-01",
  },
  {
    name: "PL/I",
    created: "1964-04-01",
  },
  {
    name: "APL",
    created: "1962-10-01",
  },
  {
    name: "COBOL-85",
    created: "1985-01-01",
  },
  {
    name: "C++",
    created: "1983-01-01",
  },
  {
    name: "C#",
    created: "2000-01-01",
  },
  {
    name: "Java",
    created: "1995-05-23",
  },
  {
    name: "JavaScript",
    created: "1995-12-04",
  },
  {
    name: "Perl",
    created: "1987-12-18",
  },
  {
    name: "PHP",
    created: "1994-06-08",
  },
  {
    name: "Python",
    created: "1989-12-20",
  },
  {
    name: "Ruby",
    created: "1995-02-24",
  },
  {
    name: "Swift",
    created: "2014-06-02",
  },
  {
    name: "Go",
    created: "2009-11-10",
  },
  {
    name: "Rust",
    created: "2010-07-07",
  },
  {
    name: "Kotlin",
    created: "2011-07-20",
  },
  {
    name: "TypeScript",
    created: "2012-10-01",
  },
  {
    name: "Haskell",
    created: "1990-01-01",
  },
  {
    name: "R",
    created: "1993-08-01",
  },
  {
    name: "Scala",
    created: "2004-01-20",
  },
  {
    name: "Clojure",
    created: "2007-10-16",
  },
  {
    name: "Erlang",
    created: "1986-01-01",
  },
  {
    name: "Elixir",
    created: "2011-01-01",
  },
  {
    name: "Julia",
    created: "2012-02-01",
  },
  {
    name: "F#",
    created: "2005-01-01",
  },
];

// get items from languages such that the names are all unique
const uniqueLanguages = languages.filter((language, index, array) => {
  return (
    array.findIndex(
      (item) => item.name.toLowerCase() === language.name.toLowerCase()
    ) === index
  );
});

// log the number of unique languages in the list
console.log(uniqueLanguages.length);

// write this list to a json file named technologies.json
const fs = require("fs");
fs.writeFile(
  "./technologies.json",
  JSON.stringify(uniqueLanguages, null, 2),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written successfully");
    }
  }
);
