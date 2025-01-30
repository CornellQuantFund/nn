import profile from './profile.png';
import logo from './profile_new.png';
import linkedIn from './linkedIn.png';
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "CQF",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Lectures",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Welcome to CQF's Trading Lecture Series",
  description: "An opportunity to learn more about quantitative finance.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Us",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Syllabus",
      link: "https://docs.google.com/document/d/1IaqLt9jOphFIQoZz8Klf5vHD9WN3bMEAazCId9srhic/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "What is this course",
  description: [
    "Cornell Quant Fund (CQF) is Cornell University’s premier student-run quantitative finance organization, dedicated to educating and equipping students with the skills needed to excel in the world of quantitative finance.",
    "This Trading Lecture Series is designed to provide a structured introduction to quantitative finance and trading.",
  ],
}

export const work = {
  title: "Instructors",
  cards: [
    {
      title: "Aryaan Jena",
      description: "Junior studying Math.",
      icons: [
         {
             icon: faLinkedin,
             link: "https://www.linkedin.com/in/aryaan-jena-332a00251/",
           }],
    },
    {
      title: "Olu Ogundare",
      description: "Junior studying ORIE.",
      icons: [
         {
             icon: faLinkedin,
             link: "https://www.linkedin.com/in/aryaan-jena-332a00251/",
           }],
    }
  ],
}

export const projects = {
    title: "Lectures",
    cards: [
      {
        title: "L1: Intro to Financial Markets + Market Microstructure",
        icons: [
          {
            icon: faGithub,
            link: "#",
          },
        ],
      },
      {
        title: "L2: Systematic Equities",
        icons: [
          {
            icon: faGithub,
            link: "#",
          },
        ],
      },
      {
        title: "L3: Intro to Options",
        icons: [
          {
            icon: faGithub,
            link: "#",
          },
        ],
      },
      {
        title: "L4: Delta, Options Pricing, Start of Greeks",
        icons: [
          {
            icon: faGithub,
            link: "#",
          },
        ],
      },
      {
        title: "L5: Greeks and Sample Trade Sequence",
        icons: [
          {
            icon: faGithub,
            link: "#",
          },
        ],
      },
    ],
  }


export const contact = {
  title: "Get in touch",
  description: "Feel free to email us below.",
  buttons: [
    {
      title: "Email",
      link: "mailto:cornellquantfund@gmail.com",
      isPrimary: true,
    },
    {
      title: "Slack Channel",
      link: "https://cornellquantfund.org/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "CQF | Trading Lectures",
  description: "An oppportunity to learn more about quantitative finance and trading from Cornell Quant Fund.",
  image: logo.src,
}

export const links = {
  image: profile.src,
  title: "@cornellquantfund",
  description: "A community of financial innovation",
  cards: [
    {
      title: "Website",
      link: "https://cornellquantfund.org/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/cornellquantfund/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/cornell-quant-fund/",
    },
    {
      title: "GitHub",
      link: "https://github.com/CornellQuantFund/",
    },
  ]
}
