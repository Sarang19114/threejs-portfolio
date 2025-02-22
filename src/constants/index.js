export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Storer - Personal Storage and Sharing Platform',
    desc: 'Storer is a highly secure platform designed for individuals to store and share files effortlessly. With advanced features like access control, it offers a reliable solution for data management.',
    subdesc:
      'Built with Next.js, Tailwind CSS, Appwrite, and Typescript Storer ensures data security, scalability, and a smooth user experience for modern file-sharing needs.',
    href: 'https://storer.vercel.app', // Replace with the actual link
    texture: '/textures/project/project1.mp4',
    logo: '/assets/storerlogo.png',
    logoStyle: {
      backgroundColor: '#1B1D2C',
      border: '0.2px solid #2E3547',
      boxShadow: '0px 0px 60px 0px #5157A34D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'NEXT.js', path: '/assets/next.png' },
      { id: 2, name: 'Appwrite', path: '/assets/appwrite.png' },
      { id: 3, name: 'Typescript', path: '/assets/typescript.png' },
      { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'AI Form Builder - Smart Form Creation Tool',
    desc: 'AI Form Builder simplifies form creation and management with AI-driven customization. It enables users to design shareable forms, collect data, and analyze it effortlessly.',
    subdesc:
      'Developed using Next.js, JavaScript, Stripe, and Gemini APIs, this project integrates advanced AI capabilities for form generation while maintaining a user-friendly interface.',
    href: 'https://ai-form-builder-s.vercel.app', // Replace with the actual link
    texture: '/textures/project/project2.mp4',
    logo: '/assets/aiflogo.png',
    logoStyle: {
      backgroundColor: '#2E1A47',
      border: '0.2px solid #4F2A69',
      boxShadow: '0px 0px 60px 0px #BF74F14D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'NEXT.js', path: '/assets/next.png' },
      { id: 2, name: 'Gemini', path: '/assets/gemini.png' },
      { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
      { id: 4, name: 'Stripe', path: '/assets/stripe.png' },
      { id: 5, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'JBS Lounge Website - Dynamic Lounge Booking',
    desc: 'An elegant and functional website created for JBS Lounge in Agra, offering a beautiful interface to explore menus, galleries, and reservations.',
    subdesc:
      'Developed with Next.js and integrated with the WhatsApp API for real-time booking notifications, the JBS Lounge website provides a seamless experience for both users and staff.',
    href: 'https://jbsbar.com',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/jbslogo1.png',
    logoStyle: {
      backgroundColor: '#1A1A1A',
      border: '0.2px solid #333333',
      boxShadow: '0px 0px 60px 0px #5555554D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/next.png' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'WhatsApp API', path: '/assets/whatsapp.png' },
    ],
  },
  {
    title: 'Sleep Tracker Website - Health Monitoring Platform',
    desc: 'A comprehensive health monitoring platform that tracks sleep patterns, environmental data, and heart rate, with a video call feature for consulting doctors.',
    subdesc:
      'Created with Next.js, Firebase, and the Gemini API, the Sleep Tracker Website delivers a user-friendly and data-driven solution for health monitoring.',
    href: 'https://github.com/Sarang19114/sleep-tracker', // Replace with the actual link
    texture: '/textures/project/project4.mp4',
    logo: '/assets/sleeplogo.png',
    logoStyle: {
      backgroundColor: '#1E2332',
      border: '0.2px solid #2F3B4F',
      boxShadow: '0px 0px 60px 0px #6BA4FF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'NEXT.js', path: '/assets/next.png' },
      { id: 2, name: 'Firebase', path: '/assets/firebase.png' },
      { id: 3, name: 'Gemini API', path: '/assets/gemini.png' },
      { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 5, name: 'JavaScript', path: '/assets/javascript.png' },
      { id: 6, name: 'Arduino', path: '/assets/ard.png' },
    ],
  },
  {
    title: 'iPhone 15 Website Clone - Visual Perfection',
    desc: 'A stunning recreation of the iPhone 15 website that showcases 3D animations and sleek visual design, delivering an immersive experience.',
    subdesc:
      'Developed using GSAP and Three.js, this clone project focuses on combining creative animations and cutting-edge web technologies to replicate a premium design.',
    href: 'https://apples-iphone15.vercel.app', // Replace with the actual link
    texture: '/textures/project/project5.mp4',
    logo: '/assets/applelogo.png',
    logoStyle: {
      backgroundColor: '#121212',
      border: '0.2px solid #1F1F1F',
      boxShadow: '0px 0px 60px 0px #CCCCCC4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'tailwindcss', path: '/assets/tailwindcss.png' },
      { id: 1, name: 'GSAP', path: '/assets/gsap.png' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.png' },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'TriggerMind',
    pos: 'Technical Lead',
    duration: 'Mar 2024 - Present',
    title: "As the Technical Lead of TriggerMind, I was responsible for organizing and leading technical events, workshops, and coding competitions. I guided teams in project development, mentored juniors in various technologies, and contributed to fostering a strong tech culture within the club. My role involved collaborating with peers to drive innovation, manage technical challenges, and ensure smooth execution of club activities.",
    icon: '/assets/TriggerMind1.png',
  },
  {
    id: 2,
    name: 'Unsaidtalks',
    pos: 'Design Intern',
    duration: 'Oct 2024 - Dec 2024',
    title: "At Unsaid Talks, I designed posters, carousels, and social media graphics using Canva, helping enhance the brand’s digital presence. I worked on event promotions, announcements, and marketing materials, ensuring visually appealing and engaging content. Collaborating with the team, I maintained a consistent brand aesthetic and improved audience engagement through creative design strategies.",
    icon: '/assets/UsT.png',
  },
];
