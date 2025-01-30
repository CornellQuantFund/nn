import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "CQF TLS 101",
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
    {
      title: "Website",
      link: "https://cornellquantfund.org/",
    }
  ],
}

export const intro = {
  title: "Welcome to CQF Trading 101",
  description: "An opportunity to learn about quantitative finance and trading.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Us",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Syllabus",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "What is Trading 101",
  description: [
    "Cornell Quant Fund (CQF) is Cornell University’s premier student-run quantitative finance organization, dedicated to educating and equipping students with the skills needed to excel in the world of quantitative trading and investment management. Through hands-on experience, rigorous research, and real-world applications, CQF bridges the gap between academia and industry.",
    "Breaking into trading—especially quantitative trading—is notoriously difficult. The industry is highly competitive, requiring a strong foundation in mathematics, statistics, programming, and financial markets. Without structured guidance, it can be overwhelming to navigate the complexity of trading strategies, market dynamics, and the technical skills demanded by top firms.",
    "This Trading Lecture Series is designed to provide a structured introduction to quantitative trading, breaking down its core concepts and methodologies. Throughout the series, we will cover the fundamentals of quantitative trading and dive into two crucial subfields: Statistical Arbitrage and Market Making. These areas are essential for understanding how firms leverage data, probability, and execution strategies to generate alpha in financial markets.",
    "Whether you are new to trading or looking to refine your quantitative skills, this series will offer valuable insights and practical knowledge to help you navigate this challenging yet rewarding field."
  ],
}

export const work = {
  title: "What You Will Learn",
  cards: [
    {
      title: "Statistical Arbitrage",
      description: "Understanding how to identify mispriced assets using mathematical models and data-driven strategies.",
      icons: null,
    },
    {
      title: "Market Making",
      description: "Learn how traders provide liquidity and optimize trade execution to capture profits.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Lecture Topics",
  cards: [
    {
      title: "Introduction to Quant Trading",
      description: "An overview of quantitative finance, its applications, and key players in the industry.",
      icons: []
    },
    {
      title: "Statistical Arbitrage",
      description: "Deep dive into mean reversion strategies and how to systematically trade mispriced assets.",
      icons: []
    },
    {
      title: "Market Making",
      description: "Understanding how market makers profit, manage inventory, and optimize spreads.",
      icons: []
    },
  ],
}

export const contact = {
  title: "Get in Touch",
  description: "Interested in learning more? Feel free to reach out or schedule a meeting to discuss how you can get involved.",
  buttons: [
    {
      title: "Email Us",
      link: "mailto:contact@cornellquantfund.org",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/cqf",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  title: "Cornell Quant Fund | Trading 101",
  description: "We are CQF, Cornell's premier quantitative finance organization. We help foster a space of financial innovation and stay on the cutting edge of investment technology. This semester we are bringing to campus a lecture series to talk about quantitative trading to help people start a career in quant.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Cornell Quant Fund",
  description: "Premier Quantitative Finance Organization at Cornell",
  cards: [
    {
      title: "CQF Website",
      link: "https://cornellquantfund.org/",
    },
    {
      title: "Trading 101 Syllabus",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/cornellquantfund/",
    },
    {
      title: "GitHub",
      link: "https://github.com/CornellQuantFund/",
    },
  ]
}
