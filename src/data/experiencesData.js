const educations = [
    {
        id: '1',
        name: 'Santa Clara University',
        date: 'Dec 2022',
        degree: 'Master of Science',
        major: 'Computer Science and Engineering',
        gpa: 3.6,
        content: 'Courseworks: Design Patterns, Computer Networks, Operating System, Advanced Algorithms'
    },
    {
        id: '2',
        name: 'Soochow University',
        date: 'June 2019',
        degree: 'Bachelor of Business Administration',
        major: 'Big Data Management',
        gpa: 3.3,
        content: 'Courseworks: Cloud Computing, Data Mining, Big Data Analytics, Machine Learning'
    }
];

const works = [
    {
        id: '3',
        name: 'Poshmark',
        employer: 'Poshmark',
        position: 'Software Engineer Intern',
        display: 'Software Engineer Intern at Poshmark',
        date: 'June 2022 - August 2022',
        image: 'images/poshmark.webp',
        tech: 'Ruby, Trinidad, Puma, Log4j2, Python, Shell script',
        markdown: 'poshmark.md',
        description: 'I worked on the core-infrastructure team for Poshmark, a marketplace for clothing, shoes, and accessories. My role was to migrate the server and deploy it.',
    },
    {
        id: '4',
        name: 'Aiello',
        employer: 'Aiello',
        position: 'Software Engineer Intern',
        display: 'Software Engineer Intern at Aiello',
        date: 'January 2021 - March 2021',
        image: 'images/aiello.jpeg',
        tech: 'Java, Vert.x, Apache Kafka',
        markdown: 'aiello.md',
        description: 'During my internship at Aiello Ai, I worked to improve the company\'s API infrastructure.',
        projects: ['1', '2']
    },
    {
        id: '5',
        name: 'Academia Sinica',
        employer: 'Academia Sinica',
        position: 'Software Engineer Intern',
        display: 'Software Engineer Intern at Academia Sinica',
        date: 'July 2018 - June 2019',
        image: 'images/academiaSinica.jpg',
        tech: 'Python, Django, OpenCV, Google Firebase',
        markdown: 'academiaSinica_1.md',
        description: 'At Academia Sinica, Taiwan\'s top research institution, we developed a system to automate data entry, reducing costs.',
    },
    {
        id: '6',
        name: 'Academia Sinica',
        employer: 'Academia Sinica',
        position: 'Data Analyst (Contract)',
        display: 'Data Analyst (Contract) at Academia Sinica',
        date: 'July 2020 - August 2021',
        image: 'images/academiaSinica.jpg',
        tech: 'Python, R, ERGM, ANOVA, Gephi',
        markdown: 'academiaSinica_2.md',
        description: 'Uncovering patterns in criminal networks through data analysis.',
    }
];

const experiences = { educations: educations, works: works }

export default experiences;