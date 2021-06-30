

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false 
};

const greeting = {
  username: "Oshanik",
  title: "Hi all, I'm Oshanik",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having experience in designing and building Web and Mobile applications with Reactjs / Flutter / Firebase and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1i2bkQ8MbSCbZ8M00cUHoNSRsJGF-uU0i?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Oshanik22",
  linkedin: "https://www.linkedin.com/in/oshanik/",
  gmail: "oshanik22@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am passionate about learning and working with new technologies",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop Hybrid mobile apps using the latest tech in App Development"),
    emoji(
      "⚡ Develop Progressive Web Applications ( PWA ) using the last tech in Web Development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "No-SQL Database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Netaji Subhas Institute of Technology",
      logo: require("./assets/images/nsit_logo.png"),
      subHeader: "Bachelor of Engineering, Computer Engineering",
      duration: "Graduating 2022"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React.js",
      progressPercentage: "80%"
    },
    {
      Stack: "Problem-Solving",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-Founder and CTO",
      company: "VNV IT Solutions",
      companylogo: require("./assets/images/vnv_logo.png"),
      date: "July 2019 – September 2020",
      desc:
        "Co-founded VnV IT Solutions, helping businesses get online",
      descBullets: [
        "Contract development, including analysis, negotiation, and closeout",
        "Cross functional coordination across internal departments",
        "Web and App developer"
      ]
    },
    {
      role: "SDE-Intern",
      company: "TestAIng",
      companylogo: require("./assets/images/testaing_logo.png"),
      date: "Summer 2022",
      desc:
        "Worked as an SDE intern at TestAIng",
      descBullets: [
        "Implemented Blue-Green Deployment strategy on Google Cloud Platform",
        "Testing ML Image Recognition Model",
        "Converting Excel to TreeView Based GUI unsing Tkinter (Python)"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/eventia.png"),
      projectName: "Eventia Pro",
      projectDesc: "An app that connects customers with Event Managers, built for the startup - 'Eventia'",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.evnetiapro.eventia_pro&hl=en_IN&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Social Media App",
      projectDesc: "A social media app, inspired by Facebook",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://facebook-clone-82ff9.web.app/"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/Oshanik22/Facebook-Clone"
        }
      ]
    },
    
    {
      image: require("./assets/images/lightning.png"),
      projectName: "Flash-Chat",
      projectDesc: "An instant messaging app, compatible with both Android and iOS",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Oshanik22/Flash-Chat"
        }
      ]
    },
    {
      image: require("./assets/images/tinder2.png"),
      projectName: "Tinder-Clone",
      projectDesc: "A visual clone of the app Tinder, built using React.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tinder-clone-6fdd0.web.app/"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/Oshanik22/Tinder-Clone"
        }
      ]
    },
    {
      image: require("./assets/images/sun.png"),
      projectName: "Clima - The Weather App",
      projectDesc: "A weather app with a beautiful UI",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Oshanik22/Clima"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking to hire someone like me? Want to discuss a project? Or just want to say hi? My Inbox is open for all.",
  number: "+919983867999",
  email_address: "oshanik22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
