/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fenil Darji",
  title: "Hi all, I'm Fenil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Flask and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hEuw6fz68NXRkyqapG-6ygx4kPjaUtdy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fenil249",
  linkedin: "https://www.linkedin.com/in/fenil-darji-4babb9215/",
  gmail: "fenildarji3210@gmail.com",
  instagram: "https://www.instagram.com/feeniil_/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Proficient in building modern PWAs with responsive and engaging applications."),
    emoji(
      "⚡ Dedicated to creative problem-solving for efficient and effective solutions."
    ),
    emoji(
      "⚡ Proficient in Python, Flask, NodeJS, GIT, PostgreSQL, AWS, showcasing adaptability in tech stacks."
    ),
    emoji(
      "⚡ Committed to continuous learning, staying updated on the latest technologies for a proactive stance."
    ),
    emoji(
      "⚡ Proven track record of significant contributions, focusing on achieving tangible results in roles."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql/Dynamo",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dhirubhai Ambani Institute of Information and Communication Technology",
      logo: require("./assets/images/LOGO.png"),
      subHeader: "Bachelor of Technology",
      duration: "July 2019 - May 2023",
      desc: "CPI : 7.97",
      descBullets: [
        "Completed Bachelor of Technology in Information and Communication Technology.",
        "Specialized coursework in key areas, including Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Database Management Systems, Operating Systems, Software Engineering, and NoSQL.",
        "Applied theoretical knowledge through hands-on projects, emphasizing problem-solving skills and collaboration in a team-oriented academic environment."
      ]
    },
    {
      schoolName: "Shree Vidyanagar High School,Ahmedabad",
      logo: require("./assets/images/VidyanagarLogo.jpeg"),
      subHeader: "Gujarat Secondary and Higher Secondary Education Board(HSC)",
      duration: "July 2017 - May 2019",
      desc: "Percentage : 93.33%",
      descBullets: [
        "Achieved an outstanding high school percentage of 93.33% with percentile of 99.53%, showcasing consistent academic excellence and dedication to studies.",
        "Secured a notable rank of 391 in the Gujarat Secondary and Higher Secondary Education Board (HSC) examinations, underscoring strong problem-solving abilities and competitive performance.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Engineer",
      company: "Clomotech Pvt. Ltd.",
      companylogo: require("./assets/images/clomotechLogo.png"),
      date: "Sep 2023 – Present",
      desc: "",
      descBullets: [
        "Led the testing phase during a crucial migration of a banking system from desktop to web UI, with a focus on ensuring secure data access from the Oracle database in TLS mode. Verified and enhanced micro-front functionality for TLS operation (HTTPS), strengthening system security and ensuring a smooth transition to the new web interface",
        "Played a key role in improving the backend during the enhancement phase, concentrating on identifying and resolving Coverity issues. This contribution led to a general enhancement in code quality. Addressed generic bugs within the Java codebase, promoting a more dependable and efficient system architecture",
      ]
    },
    {
      role: "System Development Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.jpg"),
      date: "Jan 2023 – Jun 2023",
      desc: "",
      descBullets: [
        "Developed the Binding Utilization Notifier tool to monitor and manage max transactions per second for client services, preventing unnecessary scaling. Generated reports and created client tickets, offering valuable insights for data-driven decisions.",
        "Expertise in AWS services: CDK, Flask API, Step Function, S3, Lambda, SNS, and Postman, showcasing versatile cloud skills.",
        "Proficient in Python, DynamoDB, React JS, and Git for backend, databases, user-friendly interfaces, and collaborative coding, highlighting comprehensive software development skills.",
      ]
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project1.jpg"),
      projectName: "ProShop-Ecommerce website",
      projectDesc: "Built an e-commerce online store using React, Redux, MongoDB, Express, and Node. Created an easy-to-use product catalog, a simple search, and a smooth shopping cart with a secure checkout. Gave admins the ability to add products, handle orders and users, and set up security measures. Also, added a review system for customers and a cool sliding carousel to showcase top-rated products.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://proshop-jgyv.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project11.jpg"),
      projectName: "E-case Management System",
      projectDesc: "Developed an E-case Management system optimizing hospital operations, featuring a user-friendly portal for admins, patients, and doctors. Streamlining processes like appointment booking, payment tracking, prescription management, and medical records has improved scheduling, communication, and administrative efficiency, ultimately enhancing the overall healthcare experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecasehospitalmanagementsystem.000webhostapp.com/"
        }
      ]
    }
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
      title: "Leetcode",
      subtitle:
        "",
      image: require("./assets/images/LeetCodeLogo.png"),
      imageAlt: "Leetcode Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/fenil_darji/"
        }
      ]
    },
    {
      title: "GeeksforGeeks",
      subtitle:
        "",
      image: require("./assets/images/gfgLogo.png"),
      imageAlt: "GeeksforGeeks Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://auth.geeksforgeeks.org/user/201901130"
        }
      ]
    },

    {
      title: "coding Ninjas",
      subtitle: "",
      image: require("./assets/images/cnLogo.png"),
      imageAlt: "coding Ninjas Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.codingninjas.com/studio/profile/d3f1523b-4f11-42fc-b270-ca345e24cffa"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9978418818",
  email_address: "fenildarji3210@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
