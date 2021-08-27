// Skills Icons
import profilePic from "./images/jacob.jpg"
import resume from "./images/resume.pdf"

// Social Icon
import githubIcon from "./images/icon/github.svg"
import linkedinIcon from "./images/icon/linkedin.svg"
import emailIcon from "./images/icon/email.svg"

import amazonLogo from "./images/company/amazon.png"
import nvidiaLogo from "./images/company/nvidia.png"
import uptakeLogo from "./images/company/uptake.png"
import squareenixmontrealLogo from "./images/company/squareenixmontreal.png"
import environmentandclimatechangecanadaLogo from "./images/company/environmentandclimatechangecanada.png"

export default {
  //   Header Details ---------------------
  name: "Jacob",
  headerTagline: "Software Engineer",
  resume:resume,

  //   Header Paragraph
  headerParagraph:
    "Currently seeking 2022 Software Engineering New Grad opportunities",

  // End Header Details -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi, I'm a 4th year (senior) Computer Science student at the University of Waterloo, expected to graduate in April 2022. I'm an incoming software development engineer intern at Amazon (AWS) on the AWS Step Functions team for the Fall 2021 term (Sept 2021 - Dec 2021). Previously, I've completed 5 software engineering internships, including my most recent internship at NVIDIA.",
  aboutParaTwo:
    "I'm currently looking for 2022 new grad opportunities and/or Winter 2022 internships.",
  aboutParaThree:
    "If you have any questions, or would like to get in contact, please get in touch!",
  aboutImage:
    profilePic,

  //   End About Section ---------------------
  experience:[
    {
      title:"Amazon - Incoming Software Development Engineer Intern",
      date:"Sept. 2021 - Dec. 2021",
      location:"Vancouver, British Columbia",
      team:"AWS (Step Functions Team)",
      summary:"Working on the AWS Step Functions service to improve AWS workflows.",
      logo:amazonLogo
    },
    {
    title:"NVIDIA - Software Engineer Intern",
    date:"Jan. 2021 - Apr. 2021",
    location:"Santa Clara, California",
    team:"Metrics Infrastructure Team",
    summary:"At NVIDIA, I was on the Infrastructure Metrics team, where I built internal tools to process, store, analyze data for various other NVIDIA teams.",
    b:[
      "Designed and developed an internal real time search and analytics data platform with Apache Kafka, used to ingest, store, analyze data for 100+ NVIDIA teams",
      "Built an internal security token service that returns a JWT based authentication token using RSA",
      "Rewrote a Java service in Python to avoid JVM startup time, led to 23x speed increase, 5x memory decrease",
      "Developed a service to test the validity of a TLS Certificate in a Docker container based on an NGINX image"
    ],
    logo:nvidiaLogo
  },
  {
    title:"Uptake - Backend Developer Intern",
    date:"June 2020 - Aug. 2020",
    location:"Toronto, Ontario",
    team:"Backend Services Team",
    summary:"At Uptake, I was on the Backend Web Services team where I designed and developed backend microservices responsible for handling the ticketing system for maintenance requests for over 1 million industrial machines.",
    b:[
      "Developed APIs to manage the ticketing system for maintenance requests for 1M+ industrial machines",
      "Created an API Gateway for the ticketing system service that handles authentication, rate limiting, etc",
      "Refactored 10K+ lines of code in SQL Stored Procedures to TypeScript to improve structure and testing"
    ],
    logo:uptakeLogo
  },
  {
    title:"Square Enix Montreal - Machine Learning Developer Intern",
    date:"Sept. 2019 - Dec. 2019",
    location:"Montreal, Quebec",
    team:"Machine Learning Team",
    summary:"At Square Enix Montreal, I was on the Machine Learning team where I researched and implemented various machine learning models used to analyze and predict user behaviour for over 1 million users from our various mobile games.",
    b:[
      "Developed a classification algorithm using random forest to predict player lifetime value (85% accuracy rate)",
      "Architected a clustering algorithm using k-medoids to analyze the behaviour of 1million+ players",
      "Built an application that retrieves and analyzes 50K+ weekly user reviews/feedback using NLP"
    ],
    logo:squareenixmontrealLogo
  },
  {
    title:"Environment And Climate Change Canada - Full Stack Developer Intern",
    date:"May 2018 - Dec. 2018",
    location:"North York, Ontario",
    team:"Web Applications Team",
    summary:"At Environment and Climate Change Canada, I was on the Web Applications Team where I designed and developed an ERP web application used by over 50 mining companies in Canada.",
    b:[
      "Led the fullstack development of a cloud-based ERP web application, used by 50+ mining companies",
      "Designed and architected the relational data model in SQL used to represent complex environmental data",
      "Created multiple secure and responsive web forms to collect 350+ environmental reports/year"
    ],
    logo:environmentandclimatechangecanadaLogo
  }
],

  //   Contact Section --------------

  contactSubHeading:"Feel free to reach out!",
  social: [
    {img: emailIcon, url:"mailto:yh35kim@uwaterloo.ca"},
    {img: githubIcon, url: "https://github.com/jacobk52/"},
    {img: linkedinIcon, url:"https://www.linkedin.com/in/jacobk52/"}
  ]

  // End Contact Section ---------------
}