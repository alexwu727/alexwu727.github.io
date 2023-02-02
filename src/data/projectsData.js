const projects = [
    {
        id: '10',
        name: 'Party Game',
        date: 'Jan 2023',
        image: 'images/chineseNewYear.jpg',
        description: 'A helper website for Chinese New Year Party Game!',
        tech: 'React.js, Javascript',
        url: 'https://github.com/alexwu727/party-game-helper',
        paragraphs: [
            'As a developer, I recently had the opportunity to put my skills to the test by creating a series of party games for the Chinese New Year. I grouped players together and had them compete against each other in a total of five challenges, with the team with the highest score winning a prize at the end.',
            'To bring this project to life, I used React to create a website that helped me manage the different aspects of the game, such as playing audio files, generating questions, and displaying them on screen. One of the challenges I designed was a game in which players had to guess the song that the lyrics were being spoken by Google Translate. This particular challenge required me to use an API that allowed me to retrieve mp3 files.',
            'I am proud to have been able to incorporate my technical skills and professional knowledge into my personal life, and I found the experience to be both challenging and enjoyable. The ability to merge my personal and professional lives in this way has made me appreciate the versatility and potential of my skills even more. Overall, this project was a great opportunity for me to showcase my abilities and I am looking forward to creating more projects like this in the future.'
        ],
    },
    {
        id: '9',
        name: 'Personal Website',
        date: 'Jan 2023',
        image: 'images/selfie.jpg',
        description: 'My personal website which includes experiences and projects.',
        tech: 'React.js, Javascript, Figma',
        url: 'https://github.com/alexwu727/alexwu727.github.io',
        paragraphs: [
            'My personal website is built using React. To deploy the website, I used the gh-pages dependency, which made it easy to build and publish the site to GitHub Pages.',
            'The website includes information about me, including my education and work experiences. Additionally, it features a portfolio section where I showcase various projects I\'ve worked on in the past. Visitors to the site can learn more about me as a developer and see the types of projects I have experience with.',
            'One of the main benefits of creating a personal website is that it serves as an online portfolio and CV, making it easy for potential employers or clients to learn more about me and my skills. Additionally, having a personal website demonstrates my proficiency in web development and my ability to create a polished and professional online presence.',
            'Overall, creating this website was a valuable learning experience and I am proud to have it as a showcase of my skills and experiences as a developer. I believe it will be a great asset to me in my future career.'
        ],
    },
    {
        id: '8',
        name: 'Calculator',
        date: 'Dec 2022',
        image: 'images/calculator.jpg',
        description: 'A simple calculator web application using React.',
        tech: 'React.js, Javascript',
        url: 'https://github.com/alexwu727/calculator',
        paragraphs: [
            'In this project, I created a simple calculator web application using React. The calculator has the basic features of addition, subtraction, multiplication, division, decimal point, percentage, and the ability to invert positive and negative numbers. This was my first time using React and I found it to be a great learning experience.',
            'One of the challenges I faced while creating this application was understanding the component-based structure of React. I had to learn how to break down the application into smaller, reusable components and how to manage the state of the application. Additionally, I had to learn how to use JSX, a syntax extension for JavaScript, in order to create the user interface for the calculator.',
            'Despite the challenges, I found the development process to be very enjoyable and I was able to successfully implement all of the desired features in the calculator. I am proud of my progress and the final product, and I am excited to continue learning more about React and other web development technologies.',
            'Overall, this project was a great opportunity for me to learn and practice my skills in web development, particularly with React. I am confident that this experience will help me in future projects and I am looking forward to using what I\'ve learned to continue building more advanced applications.'
        ],
    },
    {
        id: '7',
        name: 'Tetra-Star',
        date: 'Dec 2022',
        image: 'images/tetraStar.png',
        description: 'Tetra-Star Simulation is a game-like simulation project.',
        tech: 'Java',
        url: 'https://github.com/alexwu727/Tetra-Star-Simulation',
        paragraphs: [
            'The simulation is of a scenario of events that take place on a distant planet, Tetra. The planet Tetra is inhabited by TetRovers. TetRovers are generally peaceable people who love to explore and see “what is out there” in the universe. Therefore, TetRovers value “StarMaps” which contain many secrets to the distant galaxies in the universe and were written a long time ago by their ancestors.',
            'Some of TetRovers, called TetHeroes, are specially trained to study and protect the StarMaps from falling into evil hands (TetVaders). TetVaders are TetRovers who have ambitions to take over the universe and have chosen evil ways to do so. TetVaders are always on the lookout for StarMaps since they will help them to find the worlds out there for them to conquer.',
            'So on Tetra, when our story unfolds, there is just one TetraVader who lives in VaderBase, a number of (at least two) TetHeroes who have HeroBase, their home- bases, a few TetRovers (at least two) and a number of StarMaps in a number of locations.',
            'More details about this simulation are in the github repo.',
            'We used 6 design patterns listed below.',
            'Prototype: While TetHero is in the Vader base. He/She restores the map and clones one save it in his/her base. Add an abstract function “clone(): MapClass” and a prototype constructor “MapClass(MapClass map)” in the abstract parent class MapClass. In this way, we can create clone objects without coupling to their concrete classes.',
            'Singleton: In our scope, there is one and only Tetra surface. Use singleton pattern to make sure that the Tetra surface has only a single instance and has a global access point to this instance.',
            'Factory: We use a inhabitant factory to create inhabitant on Tetra star. There is an abstract creator “Inhabitant” and three concrete creators “TetRover”, “TetHero”, and “TetVader”. These creators create the product “Base”. There is an abstract function “createBase(): Base” in the abstract creator “Inhabitant”. In concrete creators “TetHero” and “TetVader”, they create “HeroBase” and “VaderBase” and put them on the Tetra surface.',
            'Template: In the abstract parent class “Inhabitant”, the function “walk()” is built by multiple steps. It contains two abstract methods which are implemented in its children “TetRover”, “TetHero”, and “TetVader”. We can let subclasses override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.',
            'Facade: We separate our application into two parts: frontend and backend. Create a facade “BackendConsole” which contains all functions the frontend needs. The frontend uses this facade instead of calling the subsystem objects directly.',
            'Command: Use Command interface as a middle layer and concrete commands to reduces coupling. Instead of send the request directly by buttons to BackendConsole, store separate request details with method to trigger requests into two concrete command buttons to link to.'
        ],
    },
    {
        id: '6',
        name: 'Stores Backend',
        date: 'Dec 2022',
        image: 'images/flask.webp',
        description: 'This is a RESTful API built with Flask, designed for a store system\'s backend.',
        tech: 'Python, Flask, Docker, PostgreSQL, Redis',
        url: 'https://github.com/alexwu727/flaskApp',
        paragraphs: [
            "In this project, I built a RESTful API using Python and Flask. I utilized Docker to containerize the application, and utilized PostgreSQL as the database. I also integrated user authentication using JSON Web Tokens (JWT). The API allows for the creation, read, update, and deletion of different store locations, products, and users. To handle the high volume of requests, I incorporated a task queue using Redis. Finally, I deployed the API to Render for public access.",
            "One of the key challenges I faced during this project was properly structuring the database schema to efficiently handle requests and relationships between different entities, such as stores, products, and users. I spent a considerable amount of time analyzing and optimizing the database for performance. ",
            "To handle user authentication, I implemented JWT which allows for secure communication between the client and server. I also added rate-limiting using Redis to prevent against brute force attacks and ensure the stability of the API. ",
            "Overall, this project allowed me to gain a deeper understanding of building a robust and scalable API. It was a great opportunity to work with various technologies such as Flask, Docker, and Redis. And I am proud that I have deployed the API on Render and It's available for public access."
        ],
    },
    {
        id: '5',
        name: 'Card Flip Game',
        date: 'March 2022',
        image: 'images/cardFlipGame.jpg',
        description: 'This is a simple card-matching game developed using C++ and Qt.',
        tech: 'C++, Qt',
        url: 'https://github.com/alexwu727/cardFlipGame',
        paragraphs: [
            "Our team has developed a simple card matching game for our OOP course final project. The game is designed for two players, who take turns flipping cards in order to match pairs and earn points. One of the key features of our game is the use of OOP concepts, such as inheritance and encapsulation. We have implemented three classes: Player, Card, and Board. The Player class manages the players' scores and turn-taking, the Card class handles the individual card functionality, and the Board class manages the game board and the overall flow of the game. By utilizing OOP, we were able to create a structured and organized codebase, which made it easier to add new features and debug any issues. The game also allows for easy modification and expansion in the future. Our team is proud of the final outcome of the game and it has been a great learning experience for us to apply the knowledge of OOP in this project.",
            "Additionally, our game features a graphical user interface (GUI) that was created using the Qt framework. The GUI allows players to interact with the game through a visually pleasing and intuitive interface. It includes features such as buttons for flipping cards and displaying the players' scores, as well as the game board itself. By using Qt to create the GUI, we were able to take advantage of its powerful and versatile set of widgets and layout management tools. This made it easy for us to create a polished and professional-looking interface, and to ensure that it was responsive and user-friendly.",
            "Overall, the combination of C++ for the game logic and Qt for the GUI allowed us to create a complete and well-rounded project that successfully incorporates OOP concepts and provides an enjoyable user experience."
        ],
    },
    {
        id: '4',
        name: 'IQ Booster',
        date: 'Dec 2021',
        image: 'images/androidStudio.png',
        description: 'IQ Booster is a knowledge sharing app using Android Studio.',
        tech: 'Java, Android Studio, Firebase',
        url: 'https://github.com/zawinglee/IQBooster',
        paragraphs: [
            "IQ Booster is a mobile app that aims to provide users with a platform for sharing and acquiring new knowledge. Our app includes a variety of features to enhance the user experience and make it easy for people to connect and share information.",
            "One of the key features of IQ Booster is our tag function. This allows users to assign one or more tags to their posts, which helps other users to quickly identify and find posts that are relevant to their interests. The tags are pre-defined by us, and currently include categories such as technology, sport, travel, food, psychology, health, business and entertainment.",
            "Another important feature of IQ Booster is our search function. This allows users to search for posts by tag, by user, or by title. This makes it easy for users to find the information they are looking for, and ensures that they can quickly and easily access the information they need.",
            "In order to use IQ Booster, users will need to register and log in. This process is quick and easy, and requires users to provide a unique username, password, location and user photo. Once logged in, users can access a variety of features, including commenting, liking, collecting and sharing posts. These features are designed to encourage interaction and engagement between users, and help to create a sense of community within the app.",
            "Additionally, IQ Booster also includes a news feed feature which displays articles for users to read and recommended people for users to follow. In the News Feed, we take advantage of tagging and liking to help users find content that is relevant to their interests.",
            "Lastly, we added animation and visual effects to enhance the user experience. This includes smoothly transitioning between pages and adding subtle animations to buttons and other elements. Additionally, we used Firebase Messaging Service to push notifications to users for new posts and followers. Overall, we believe that these features and animations combine to create a comprehensive and enjoyable experience for users.",
            "In conclusion, IQ Booster is a mobile app that provides users with a platform for sharing and acquiring new knowledge. Our app is designed with a variety of features to enhance the user experience, including tagging, search, registration/login, interaction, news feed, and notification. We believe that IQ Booster will be a valuable resource for people looking to expand their knowledge and connect with others who share similar interests."
        ],
    },
    {
        id: '3',
        name: 'Customized Protocol',
        date: 'Dec 2021',
        image: 'images/networkProtocols.png',
        description: 'Designed a protocol on top of UDP protocol for implementing communications between clients and servers using C.',
        tech: 'C, Socket',
        url: 'https://github.com/alexwu727/Customized-Protocol/',
        paragraphs: [
            "In this project, I was tasked with creating a customized protocol on top of UDP for a client-server communication system. The system consisted of two main parts: the client and the server. The client would send packets to the server, and the server would acknowledge the receipt of each packet with ACKs.",
            "One of the challenges I faced was implementing error handling mechanisms for the system. For example, if the ACK timer expires and the ACK from the server has not been received by the client, an error message should be displayed on the screen. Additionally, the server would also need to handle various types of errors such as out-of-sequence packets, length mismatch errors, missing end of packet identifier errors, and duplicate packets.",
            "Another aspect of the project was creating a client-side software module that acts on behalf of a cell phone. The module would send a request for identification to the server, which would then verify the validity of the request by checking a Verification_Database. The contents of this file would be saved on the server and contains the subscriber's number, technology, and payment status.",
            "Overall, this project allowed me to gain experience in creating a customized protocol on top of UDP and implementing error handling mechanisms. It also gave me the opportunity to work with a client-server communication system and understand the challenges that come with it.",
        ],
    },
    {
        id: '2',
        name: 'Log Consumer',
        date: 'March 2021',
        image: 'images/log.webp',
        description: 'Implementing Log Data Consumer with Apache Kafka and Vert.x.',
        tech: 'Java, Vert.x, Apache Kafka, Cassandra',
        url: 'https://github.com/alexwu727/kafka-vert.x-cassandra-practice',
        paragraphs: [
            'During my internship at Aiello Ai, I had the opportunity to work on a project that aimed to analyze customer experience and enhance business strategy. My role as a data analyst involved the collection, cleaning, and analysis of log data using Apache Kafka queue.',
            'One of my main responsibilities was to establish a Vert.x instance to consume log data via Apache Kafka queue and analyze customer experience. This helped the company to gain valuable insights into customer behavior and make more informed decisions. Additionally, I helped to develop a predictive model to forecast sales using machine learning techniques.',
            'Working on this project was a great learning experience for me. I was able to gain hands-on experience in data analysis and machine learning, and learn how to work with Apache Kafka and Vert.x. It was also a valuable opportunity to work with a team of experienced data analysts and learn about the industry best practices.'
        ],
    },
    {
        id: '1',
        name: 'API Gateway',
        date: 'Feb 2021',
        image: 'images/apiGateway.png',
        description: 'Optimizing RESTful API Performance with Java Vert.x.',
        tech: 'Java, Vert.x, ',
        url: 'https://github.com/alexwu727/intern-partialAPI',
        paragraphs: [
            'During my internship at Aiello Ai, I had the opportunity to work on a project that aimed to enhance the company\'s RESTful API\'s availability, flexibility, and scalability. My role as a software engineer involved restructuring the API and building an entire skeleton that met OpenAPI specifications using Java Vert.x.',
            'One of my main responsibilities was to develop an API gateway instance to deploy API controller verticles, intercept incoming requests, and communicate with those verticles through eventBus. This allowed for improved management of incoming requests and ensured that they were directed to the correct API controller. Additionally, I constructed an abstract class that defined the instance\'s behaviors and how to invoke the corresponding methods through the arriving requests in the API verticle. This abstraction helped to ensure consistency and ease of use across all API controllers.',
            'Working on this project was a great learning experience for me. I was able to gain hands-on experience in software engineering and API development, and learn how to work with Java Vert.x and OpenAPI specifications. It was also a valuable opportunity to work with a team of experienced developers and learn about the industry best practices.'
        ],
    }
]

export default projects