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
    "Interested in fullstack development, artificial intelligence, machine learning.",

  // End Header Details -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi, I'm a 4th year (senior) Computer Science student at the University of Waterloo, expected to graduate in April 2022.",
  aboutParaTwo:
    "I have 6 previous software engineering internship experiences.",
  aboutParaThree:
    "If you have any questions, or would like to get in contact, please get in touch!",
  aboutImage:
    profilePic,

  //   End About Section ---------------------
  experience:[
    {
      title:"Amazon - Software Development Engineer",
      date:"Sept. 2021 - Dec. 2021",
      location:"Vancouver, British Columbia",
      team:"AWS (Step Functions Team)",
      summary:"Developed core functionalities of the AWS Step Functions service to improve AWS workflows.",
      logo:amazonLogo
    },
    {
    title:"NVIDIA - Software Engineer",
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
    title:"Uptake - Backend Developer",
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
    title:"Square Enix Montreal - Machine Learning Developer",
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
    title:"Environment And Climate Change Canada - Full Stack Developer",
    date:"May 2018 - Dec. 2018",
    location:"North York, Ontario",
    team:"Web Applications Team",
    summary:"At Environment and Climate Change Canada, I was on the Web Applications Team where I designed and developed an ERP web application used by over 50 mining companies in Canada.",
    b:[
      "Led the fullstack development of a cloud-based ERP web application, used by 50+ mining companies",
      "Designed the relational data model in SQL and developed REST APIs to handle CRUD operations",
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