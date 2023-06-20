import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMap, faGamepad, faGraduationCap, faBuilding } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../images/profilepic.jpg';

export const socialLinks = [
  { label: 'Github', Icon: faGithub, href: 'https://github.com/nathanip101' },
  { label: 'Linkedin', Icon: faLinkedin, href: 'https://linkedin.com/in/nathanip101' },
  { label: 'Instagram', Icon: faInstagram, href: 'https://instagram.com/nahtan.photography' }
];

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Work: 'work',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
};

export const aboutData = {
  profileImageSrc: profilepic,
  description: `
  Hi! My name is Nathan Ip and I am currently studying Computer Science at Cal Poly, San Luis Obispo. In my free time you can catch me playing tennis and honing my skills on a plethora of different instruments. 
  Other passions include photography, videography, and both live and studio sound engineering.`,
  aboutItems: [
    { label: 'Location', text: 'San Luis Obispo, California', Icon: faMap },
    { label: 'Interests', text: 'Music, Photography, Audio Engineering, Tennis', Icon: faGamepad },
    { label: 'Study', text: 'Cal Poly, San Luis Obispo', Icon: faGraduationCap },
  ],
};
