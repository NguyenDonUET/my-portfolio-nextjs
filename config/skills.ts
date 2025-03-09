export const skills = [
  {
    category: "Frontend",
    content: [
      {
        name: "HTML",
        image: "/icons/icons8-html.svg",
      },
      {
        name: "CSS",
        image: "/icons/icons8-css.svg",
      },
      {
        name: "Tailwind CSS",
        image: "/icons/icons8-tailwind-css.svg",
      },
      {
        name: "Javascript",
        image: "/icons/icons8-javascript.svg",
      },
      {
        name: "Typescript",
        image: "/icons/icons8-typescript.svg",
      },
      {
        name: "Redux Toolkit",
        image: "/icons/redux.svg",
      },

      {
        name: "React Js",
        image: "/icons/icons8-react.svg",
      },
      {
        name: "VueJs",
        image: "/icons/vue-logo.svg",
      },
      {
        name: "Next Js",
        image: "/images/nextjs.png",
      },
    ],
  },
  {
    category: "Backend",
    content: [
      {
        name: "Nodejs",
        image: "/icons/icons8-nodejs.svg",
      },
      {
        name: "Express Js",
        image: "/icons/icons8-express-js.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      // {
      //   name: "Firebase",
      //   image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      // },
    ],
  },
  {
    category: "Others",
    content: [
      {
        name: "Git",
        image: "/icons/git.svg",
      },
      {
        name: "Github",
        image: "/icons/icons8-github.svg",
      },
      {
        name: "Postman",
        image: "/icons/postman.svg",
      },
      {
        name: "VS Code",
        image: "/images/vscode_icon.png",
      },
    ],
  },
]

export type SkillType = (typeof skills)[0]
