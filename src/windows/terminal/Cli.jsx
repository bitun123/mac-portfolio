import React from "react";
import MacWindow from "../MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import { color } from "framer-motion";
function Cli() {
  const commands = {
    details: {
      description: "List all available commands.",
      fn: () => {
        return `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  about          - About me
  skills         - Display my technical skills
  projects       - View my portfolio projects
  contact        - Get my contact information
  social         - Social media links
  clear          - Clear the terminal
  whoami         - Display current user
  pwd            - Print working directory
  ls             - List directory contents
  date           - Display current date and time
  echo <text>    - Echo the passed string
  theme          - Show available themes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      },
    },
    about: {
      description: "About me",
      usage: "about",
      fn: () => {
        return `
Satyajit | Full Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hi! I'm a passionate full-stack developer with expertise in 
modern web technologies. I love building interactive and 
responsive applications.
Location: India
Focus: React, Node.js, MERN Stack`;
      },
    },
    skills: {
      description: "Display my technical skills",
      usage: "skills",
      fn: () => {
        return `
Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:
  • React.js, Next.js, Vue.js
  • HTML5, CSS3, SCSS
  • Tailwind CSS
  • JavaScript (ES6+)

Backend:
  • Node.js, Express.js
  • MongoDB, MySQL
  • REST APIs, 

Tools:
  • Git & GitHub
  • VS Code`;
      },
    },
    projects: {
      description: "View portfolio projects",
      usage: "projects",
      fn: () => {
        return `
Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. E-commerce Platform
   Tech: MERN Stack | Deploy: Vercel
   Features: Payment integration, inventory management

2. Social Media Dashboard
   Tech: React + Firebase | Real-time updates
   Features: User authentication, post creation

3. Task Management App
   Tech: React + MongoDB | Cloud-based
   Features: Collaboration, notifications

Type 'github' to explore my repositories!`;
      },
    },
    contact: {
      description: "Get my contact information",
      usage: "contact",
      fn: () => {
        return `
Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: satyajit@example.com
Phone: +91 (Your number)
Location: India

Type 'social' to see my social media links`;
      },
    },
    social: {
      description: "Social media links",
      usage: "social",
      fn: () => {
        return `
Social Media Links
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GitHub: https://github.com/satyajit
LinkedIn: https://linkedin.com/in/satyajit
Twitter: https://twitter.com/satyajit
Portfolio: https://satyajit.dev`;
      },
    },
    whoami: {
      description: "Display current user",
      usage: "whoami",
      fn: () => "satyajit",
    },
    pwd: {
      description: "Print working directory",
      usage: "pwd",
      fn: () => "/home/satyajit/portfolio",
    },
    ls: {
      description: "List directory contents",
      usage: "ls",
      fn: () => {
        return `
drwxr-xr-x  projects/
drwxr-xr-x  about/
drwxr-xr-x  contact/
-rw-r--r--  resume.pdf
-rw-r--r--  portfolio.json`;
      },
    },
    date: {
      description: "Display current date and time",
      usage: "date",
      fn: () => new Date().toString(),
    },
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    theme: {
      description: "Show available themes",
      usage: "theme",
      fn: () => {
        return `
Available Themes:
  • dark (current)
  • light
  • ocean
  • forest
  • retro`;
      },
    },
  };

  const welcomeMsg = `
Type 'help' to see all available commands.
Type 'about' to learn more about me.

Happy exploring! 🚀
`;

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMsg}
          promptLabel={"satyajit:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        ></Terminal>
      </div>
    </MacWindow>
  );
}

export default Cli;
