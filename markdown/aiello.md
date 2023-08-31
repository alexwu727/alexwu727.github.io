During my internship at Aiello Ai, I worked intensively on enhancing the company's RESTful API. Using Java and Vert.x, I tackled several challenges to improve the API's availability, flexibility, and scalability. Here are some of the project highlights:

## Enhancing RESTful API with Java Vert.x

At Aiello Ai, I took on the responsibility of revamping the company's RESTful API to meet OpenAPI specifications. 

- **API Gateway Development**: 
  - Designed and deployed an API gateway instance responsible for deploying controller verticles.
  - Implemented efficient handling of incoming requests, ensuring proper routing to the correct API controllers.

- **Abstract Base Class for API Verticle**: 
  - Created an abstract class that established the behavior and interactions for each API verticle instance.
  - Each API verticle would register itself to the API Gateway through the eventBus, providing a consistent interface for all API controllers.

By overhauling the API architecture, the system gained significant benefits. The API Gateway centralized the management of incoming requests, making it easier to add new features without affecting existing functionality, thus enhancing flexibility. Additionally, the Abstract Base Class for API Verticles provided a standard interface for all API controllers, making it simpler to scale by adding new verticles that automatically register themselves, thereby improving scalability.

### Data Consumption with Apache Kafka

Understanding our customers was crucial at Aiello Ai. I played a key role in enhancing this understanding by building a data consumption pipeline.

- **Customer Experience Analytics**:
  - To accomplish this, I established a Vert.x instance to consume log data via an Apache Kafka queue. This system was designed to gather logs from various services within our architecture. After collecting this data, it was then stored in a Cassandra database for further analysis.

By constructing this multifaceted data pipeline, we could not only gather logs from different services in real-time but also efficiently store and analyze them. The immediate availability of this data in our Cassandra database streamlined our analytical processes, allowing us to adapt our business strategies more effectively and enhance customer experience.


### The Learning Curve

Working at Aiello Ai didn't just allow me to apply my technical skills; it also contributed substantially to my personal growth.

- **Technical Skills**: 
  - I gained deeper insights into Java, Vert.x, and API development.

- **Soft Skills**: 
  - The experience honed my skills in teamwork, communication, and project management.

### Conclusion

Overall, my time at Aiello Ai was a rich learning experience. It offered me an opportunity to work in a dynamic tech environment and make tangible contributions, adding invaluable experience to my budding career.
