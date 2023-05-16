// gitprofile.config.js

const config = {
  github: {
    username: 'ROUNAK-K-JHA-2002', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rounak-kumar-jha-a54437228',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '__rounak.k.jha_8683__',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'rounak_k_jha2002',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'developer.dextrix@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1-Ej35IaaHfqfo2USffuHJ2wxyjrwL0Y7/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Java',
    'React.js',
    'Node.js',
    'ExpressJs',
    'Flutter',
    'MySQL',
    'Python',
    'Git(VCS)',
    'Linux(Ubuntu)',
    'Netlify',
    'CSS',
    'Postman',
    'Hugo',
    'Firebase',
    'MySql',
  ],
  experiences: [
    {
      company: 'Triunits Pvt. Ltd.',
      position: 'Flutter Development Intern',
      work1: ' 1. Headed the Android Development of a Health App, integrated prominent features, improving overall user experience.',
      work2: ' 2. Contributing to Frontend Android Development in a Car Details Tracking App.',
      work3: ' 3. Tech Stacks Used -  ',
      techStackUsed: '  Flutter , Firebase , NodeJs',
      from: 'Jan 2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Alstonia Kolkata',
      position: 'Web Developer Intern',
      work1: ' 1. Contributed to the front-end of service of the Company using Hugo Site Builder and improved the website performance by 50%.',
      work2: ' 2. Made a React - Express Component for Company`s own Auth Server Authentication using React JS, Express JS.',
      work3: ' 3. Tech Stacks Used -  ',
      techStackUsed: '  Hugo, ReactJs, NodeJs',
      from: 'Dec 2022 ',
      to: 'Jan 2023',
      companyLink: 'https://example.com',
    },

    
   
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */

  

  
  education: [
    {
      institution: 'National Institute Of Technology, Durgapur',
      degree: 'B.Tech',
      from: '2021',
      to: 'present',
      note: 'CGPA : 8.13 (3rd Semester)',
    },
    {
      institution: 'Sunrise (English Medium) School,Liluah',
      degree: '12th',
       from: '',
      to: '2020',
      note: '90.5%',
    },
    {
      institution: 'Sunrise (English Medium) School,Liluah',
      degree: '10th',
       from: '',
      to: '2018',
      note: '88.2%',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '✌𝓡𝓞𝓤𝓝𝓐𝓚 𝓚𝓤𝓜𝓐𝓡 𝓙𝓗𝓐✌',
};

export default config;
