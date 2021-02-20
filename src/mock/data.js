import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Recipe App',
    info:
      'A react website for searching recipes. The user can access to the favorites recipes after logged in.',
    info2: '',
    url: '',
    repo: 'https://github.com/aureliasegarra/MyRecipe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Chat App',
    info: 'A chat application with identification system to play with websocket server and UX/UI',
    info2: '',
    url: '',
    repo: 'https://github.com/aureliasegarra/MyMessenger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Blog Page',
    info: 'A blog to display articles after fetching datas via an API',
    info2: '',
    url: '',
    repo: 'https://github.com/aureliasegarra/BlogReact-V2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'av.segarra@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SegarraAurelia',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aureliasegarra/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aureliasegarra',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
