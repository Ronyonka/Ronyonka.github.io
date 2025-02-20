import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ron",
  lastName: "Onyonka",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["AWS","Python", "Django","Flask","FastAPI", "JavaScript", "React","Vue","Typescript","Angular", "Go", "Ruby","Ruby on Rails"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ronyonka",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ronyonka",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rononyonka@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Ron Onyonka, a software engineer at <InlineCode>Ovanova</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "Ron Onyonka",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/ronyonka/30min-1",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ron is a Nairobi-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ovanova",
        timeframe: "2024 - Present",
        role: "Backend Engineer",
        achievements: [
          <>
            Transformed raw telemetry data into structured formats, enabling seamless integration with downstream analytics platforms.
          </>,
          <>
            Automated data ingestion workflows using Python-based ETL scripts and APIs, ensuring efficiency and data integrity.
          </>,
          <>
            Designed and implemented robust pipelines for processing and storing operational data from IoT devices (e.g., inverters, solar panels) using Django, Kafka, Faust, Telegraf, and InfluxDB.
          </>,
        ],
        images: [],
      },
      {
        company: "Meltwater",
        timeframe: "2023 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and implemented efficient, scalable Python-based data polling services at scale, deployed on AWS Lambda and Kubernetes, designed to collect critical social media metadata from major platforms in real time, adhering to established design patterns and best practices.
          </>,
          <>
            Built and designed robust Python/FastAPI APIs, enabling seamless integration with front-end dashboards and improved data transfer, while following coding standards and design patterns to ensure maintainability, readability, and system performance.
          </>,
          <>
          Managed and optimized Amazon OpenSearch (ElasticSearch) clusters, focusing on maintaining high
availability, ensuring data backup, implementing disaster recovery strategies, and executing versatile
querying techniques for efficient data extraction, all in line with industry best practices.
          </>,
          <>
          Collaborated with UX designers to implement pixel-perfect, accessible user interfaces
          </>,
        ],
        images: [],
      },
      {
        company: "The Baobab Network",
        timeframe: "2020 - 2023",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed and maintained a full-stack web application using React.js and Django
          </>,
          <>
            Created a data analytics platform for tracking start-up investments in Africa, decreasing
collation time by 60% and improving data accuracy by 80%
          </>,
        ],
        images: [],
      },
      {
        company: "Upande Ltd",
        timeframe: "2019 - 2020",
        role: "Software Engineer",
        achievements: [
          <>
            Optimized website performance, improving load times by 25% through code refinement and
asset optimization
          </>,
          <>
            Developed interactive map features using Mapbox for asset tracking visualization.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Moringa School",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Egerton University",
        description: <>Studied Biochemistry.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Django",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
