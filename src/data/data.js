import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMap, faGamepad, faGraduationCap, faBuilding} from '@fortawesome/free-solid-svg-icons';
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'San Luis Obispo, California', Icon: faMap},
    {label: 'Interests', text: 'Music, Photogrpahy, Audio Engineering, Tennis', Icon: faGamepad},
    {label: 'Study', text: 'Cal Poly, San Luis Obispo', Icon: faGraduationCap},
    {label: 'Employment', text: 'Amazon', Icon: faBuilding},
  ],
};
