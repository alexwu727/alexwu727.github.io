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
        paragraphs: [
            'When I was in Poshmark, I worked in the core infrastructure team. We use Trinidad as our web server. It is not well-maintained, the last release is about 7 years ago. This may cause the server is not compatible while new tech comes in. Thus, to increase the reliability, we found that Puma is suitable in our situation. It is simple and fast. Most importantly, it has been updated lately and its community is active these days. My task is refactoring our JRuby application. I started Puma server, immigrate the configurations, implement log features, deploy to the docker cluster, and run the performance test at the end. The server works well and the performance is 20% faster than the previous one.',
            'Migrated application server from JRuby to Puma: By migrating the outdated JRuby server to Puma, I was able to improve the stability and reliability of the company\'s application server. This involved updating the server configurations, testing the new server and ensuring that all of the existing applications were compatible with the new server.',
            'Implemented logging feature: To improve the visibility into the application server\'s performance, I implemented a logging feature using Apache Log4j2. This included configuring various log levels and implementing a deflator to reduce the amount of data stored in the logs.',
            'Developed an automated load testing framework: To ensure that the new application server could handle high traffic loads, I developed an automated load testing framework using Locust. This framework was able to simulate millions of simultaneous users and was distributed across multiple virtual machines.',
            'Created performance plots: To monitor the performance of the new application server, I created performance plots using Python and Shell script. This allowed me to track key metrics such as response time and throughput, and make adjustments as necessary to optimize performance.',
            'In addition to these technical contributions, I also had the opportunity to showcase my work during an all-hands meeting. This experience gave me the opportunity to present my achievements to the entire company and was a valuable learning experience for me. Through this experience, I learned the importance of effective communication in a professional setting.'
        ],
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
        paragraphs: [
            'During my internship at Aiello Ai, I had the opportunity to work as a software engineer and enhance the company\'s RESTful API\'s availability, flexibility, and scalability by restructuring the API and building an entire skeleton that met OpenAPI specifications using Java Vert.x.',
            'One of my main responsibilities was to develop an API gateway instance to deploy API controller verticles, intercept incoming requests, and communicate with those verticles through eventBus. This allowed for improved management of incoming requests and ensured that they were directed to the correct API controller.',
            'In addition, I constructed an abstract class that defined the instance\'s behaviors and how to invoke the corresponding methods through the arriving requests in the API verticle. This abstraction helped to ensure consistency and ease of use across all API controllers.',
            'Furthermore, I established a Vert.x instance to consume log data via Apache Kafka queue to analyze customer experience and enhance business strategy. This helped the company to gain valuable insights into customer behavior and make more informed decisions. Overall, it was a valuable learning experience and I am grateful for the opportunity to work on such an exciting project.'
        ],
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
        tech: 'Python, R',
        markdown: 'academiaSinica_1.md',
        description: 'At Academia Sinica, Taiwan\'s top research institution, we developed a system to automate data entry, reducing costs.',
        paragraphs: [
            'During my internship at Academia Sinica, I had the opportunity to work as a software engineer intern on a project aimed at improving the efficiency of data collection for research studies. The main issue we faced was that a lot of time was spent manually inputting subjects\' answers to questionnaires into a database.',
            'My task was to develop a system that could recognize subjects\' answers and store them automatically into the database. To accomplish this, I utilized OpenCV to split each question and checkbox, and then used a rule-based model, which is a part of questionnaire recognition system, to figure out which option the subject had chosen. The rule-based model was developed using feature engineering results to accurately detect check box selections and automate the collection of handwritten paperwork for user identification. The system was developed using Django as the server-side framework.',
            'The result of this project was that we were able to save a significant amount of time while inputting data into the database for further research. Additionally, we were able to decrease the operating cost by 90% by automating the data collection process.',
            'Furthermore, We prototyped a real-time, online experimental platform with event listeners using Google Firebase and Python, allowing researchers to design interactive experiments for participants. Overall, it was a valuable and educational experience, and I am proud of the contributions I made to the team.'
        ],
    },
    {
        id: '6',
        name: 'Academia Sinica',
        employer: 'Academia Sinica',
        position: 'Data Analyst (Contract)',
        display: 'Data Analyst (Contract) at Academia Sinica',
        date: 'July 2020 - August 2021',
        image: 'images/academiaSinica.jpg',
        tech: 'Python, R',
        markdown: 'academiaSinica_2.md',
        description: 'Uncovering patterns in criminal networks through data analysis.',
        paragraphs: [
            'I had the opportunity to work on a project as a data analyst for a researcher at the Sinica Academia. The project focused on studying criminal networks and my role was to assist in the construction and analysis of a large social network.',
            'One of my main responsibilities was to construct a large social network using Python, utilizing data from three sources provided by the Coast Guard Administration. I also researched the collaboration tendency and behavior patterns of different groups within the network, such as "good people," suspects, and criminals, by extracting features such as vertices\' attributes and DID features. I then implemented ANOVA analysis using Python to further understand these patterns.',
            'In addition to these tasks, I also built exponential random graph models using R to analyze the features of the criminal network. I also created random graphs of active and criminal networks to calculate their efficiencies and securities, and then compared these with the features of the real networks using R.',
            'Overall, this project provided me with valuable experience in utilizing programming languages such as Python and R to construct and analyze large social networks. It was a challenging and rewarding experience, and I am grateful for the opportunity to work on such an interesting project.'
        ],
    }
];

const experiences = { educations: educations, works: works }

export default experiences;