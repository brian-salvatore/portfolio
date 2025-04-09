import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

interface ITimelineData {
  type: string;
  icon: any;
  since: string;
  until: string;
  title: string;
  company: string;
  address: string;
  site: string;
  details: Array<string>;
}

const VerticalTimelineElementData = ({ since, until, icon, ...props }: ITimelineData) => ({
  elementProps: {
    date: [since, until].filter(Boolean).join(' - '),
    contentStyle: {
      background: 'rgba(33, 33, 33, 0.5)',
      color: '#ddd',
    },
    contentArrowStyle: {
      borderRight: '10px solid #ccc',
    },
    iconStyle: {
      background: '#2d1950',
    },
    icon: icon,
  },
  ...props,
});

const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2001',
    until: '2005',
    title: 'HSD',
    company: 'Whitehall Central High School',
    address: 'New York, NY, US',
    site: '',
    details: [],
  }),
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2005',
    until: '2009',
    title: 'Bachelor&apos;s Degree',
    company: 'Adirondack Community College',
    address: 'New York, NY, US',
    site: '',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Apr 2017',
    until: 'Jan 2019',
    title: 'Full Stack Engineer',
    company: 'Premier Pools & Spas',
    address: 'New York, United States (Remote)',
    site: '',
    details: [
      'As a Full-Stack Developer, I built and deployed a customer management system for Premier Pools & Spas, streamlining operations and improving customer tracking efficiency by 40%. Also, managed hosting server, designed database, improve the performance etc',
      'Developed and maintained high-performance web applications using MERN ( MongoDB, Express.js, React, Node.js) and LAMP ( Linux, Apache, MySQL, PHP) stacks, improving load times by 30% and boosting user engagement.',
      'Planned and optimized front-end interfaces for improved responsiveness and performance, resulting in a 20% increase in user retention and a smoother overall user experience.',
      'Built and integrated RESTful and GraphQL APIs, reducing data exchange latency by 40% and ensuring seamless communication between front-end and back-end systems.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Apr 2019',
    until: 'Dec 2023',
    title: 'Full Stack Engineer (Blockchain & Web3)',
    company: 'Earniverse',
    address: 'London, United Kingdom (Remote)',
    site: '',
    details: [
      'Built and launched an NFT marketplace for a world-famous metaverse game, maintaining it for over 3 years with consistent uptime.',
      'Built and maintained secure, scalable blockchain-based solutions for DeFi, NFTs, and tokenization, improving transaction speed by 30% and reducing costs by 20%.',
      "Collaborated with cross-functional teams to integrate blockchain technology into web and mobile platforms, resulting in a 25% increase in user adoption and a 30% improvement in transaction efficiency.",
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2024',
    until: 'Feb 2025',
    title: 'CEO & Senior Full Stack Engineer',
    company: "Wenzell & Fisher Hospitality Group",
    address: 'New York, US (Remote)',
    site: '',
    details: [
      'Developed the back-end performance by 50% after using batch processing for file reading',
      'Created and developed front-end GUI using JSP, HTML, JavaScript, CSS, and Ajax',
      'Designed a new, user interactive landing page, utilizing tools like HTML, XHTML, and CSS, achieving a 5.5/6 user score',
      'Joined with web designers to develop user interfaces and prototypes for a web-based internal financial manager system',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Feb 2025',
    until: '',
    title: 'Chief Executive Officer',
    company: "New Age Web Developmen",
    address: 'New York, US',
    site: '',
    details: [
    ],
  }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));

export default Experiences;
