const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "To Push Boundaries Out!" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Fullstack Adaptability",
    desc: "Quick learner who adapts to new technologies and frameworks, from React to Flutter to Angular migrations.",
  },
  {
    imgPath: "/images/teamwork.png",
    title: "Collaborative Problem-Solving",
    desc: "Strong team player with experience working in international environments and diverse project teams.",
  },
  {
    imgPath: "/images/innovative.png",
    title: "Creative Implementation",
    desc: "Innovative thinking applied to real-world solutions, from healthcare apps to telemedicine platforms.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Watcharasak demonstrated strong frontend development skills during his internship, particularly in implementing real-time data visualization for medical applications.",
    imgPath: "/images/logos/EJ-logo_revised_white.png",
    logoPath: "/images/logos/EJ-logo_revised_white.png",
    title: "Front-End Developer Intern",
    company: "Eyes Japan",
    date: "Jun 2024 - Dec 2024",
    responsibilities: [
      "Developed Sleep Polysomnography Application using Next.js with SSR for real-time medical data visualization",
      "Created interactive HUD systems for Ocean Digital Twin project using Unreal Engine Blueprints",
      "Built web interface for Air Traffic Control ASR comparison tool with audio playback features",
      "Collaborated with international team of developers and designers"
    ],
  },
  {
    review: "Watcharasak showed quick learning ability and technical adaptability during his short but impactful internship.",
    imgPath: "/images/logos/cropped-cropped-Kannabiz-Tech-Logo.png",
    logoPath: "/images/logos/cropped-cropped-Kannabiz-Tech-Logo.png",
    title: "IoT Engineer Intern", 
    company: "Kannabiz Tech",
    date: "Jun 2023 - Jul 2023",
    responsibilities: [
      "Developed and maintained custom scripts to improve system efficiency",
      "Troubleshot issues with LAN/WAN and voice systems",
      "Assisted in hardware-software integration projects"
    ],
  },
   {
    review: "Watcharasak demonstrated strong academic performance and practical application of software engineering principles through his thesis and coursework projects.",
    imgPath: "/images/logos/mahidol_logo.png",
    logoPath: "/images/logos/logo-MU_Color.png",
    title: "Computer Engineering Student",
    company: "Mahidol University",
    date: "2021 - Present",
    responsibilities: [
      "Developed Health Insight System thesis project using Flutter framework for elderly healthcare data collection",
      "Implemented API connections and backend integration for mobile applications",
      "Participated in Cyber Security Club activities and collaborative projects",
      "Maintained high academic standing while working on real-world software solutions"
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/watchanew"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png", 
    url: "https://www.facebook.com/newsrwch"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: ""
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/watcharasak-prommanee-a287771b3"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};