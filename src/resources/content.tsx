import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Piyush",
  lastName: "Jain",
  name: `Piyush Jain`,
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpeg",
  email: "pjain.work@proton.me",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Telugu"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on web development, AI, and emerging technologies</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/whyismeleige",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/piyush-jain-2005-/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into powerful digital solutions</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">JOSH-Net</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/josh-net",
  },
  subline: (
    <>
      I'm Piyush, a full stack developer and BBA IT student at <Text as="span" size="xl" weight="strong">St Joseph's College</Text>. I specialize in building <br /> scalable web applications with AI integration and real-time features.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Hyderabad, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Piyush is a Hyderabad-based full stack developer with a passion for building innovative web applications 
        that solve real-world problems. With expertise in modern web technologies, AI integration, and cloud 
        infrastructure, he creates scalable solutions that make a difference. Currently pursuing BBA in Information 
        Technology while actively contributing to the tech community as Vice President of The PowerBytes Club.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience & Leadership",
    experiences: [
      {
        company: "The PowerBytes Club",
        timeframe: "Present",
        role: "Vice President",
        achievements: [
          <>
            Leading and organizing multiple technical events, seminars, and workshops for students 
            at St Joseph's Degree and PG College.
          </>,
          <>
            Building a community of tech enthusiasts and fostering collaborative learning 
            in web development and emerging technologies.
          </>,
        ],
        images: [],
      },
      {
        company: "ABACUS Hackathon",
        timeframe: "2025",
        role: "Winner - 1st Prize",
        achievements: [
          <>
            Won first prize among 1000+ participants at the ABACUS Hackathon conducted at 
            Badruka College of Information Technology.
          </>,
          <>
            Developed an innovative solution showcasing full stack development and problem-solving skills 
            under competitive conditions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "St Joseph's Degree and PG College",
        description: <>Bachelors of Business Administration in Information Technology (CGPA: 8.9) - Specialization in IT with coursework in Software Development and Business Administration.</>,
      },
      {
        name: "Little Flower Junior College",
        description: <>Senior Secondary (12th Grade) - Maths, Economics, Commerce, and Computer Science (81%).</>,
      },
      {
        name: "St. Andrews High School",
        description: <>Secondary High School (10th Grade) - CGPA: 90%.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>Building modern web applications with Next.js, React, and Node.js, deployed on scalable cloud infrastructure.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Database & Real-time Systems",
        description: (
          <>Experienced in MongoDB, Redis, and WebSocket implementations for real-time data synchronization and caching.</>
        ),
        tags: [
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Deploying and managing applications on AWS EC2 with focus on scalability and performance optimization.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Git",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on Web Dev & Technology",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full stack development and AI projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };