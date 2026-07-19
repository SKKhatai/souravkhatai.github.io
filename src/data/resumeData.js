export const resumeSkills = [
  {
    category: 'Core Languages & Frameworks',
    items: ['Java (Java 8/11/21)', 'Spring Boot 3.x', 'Hibernate/JPA', 'Spring Cloud Gateway', 'RESTful Microservices', 'Data Structures & Algorithms (DSA)'],
  },
  {
    category: 'Databases & Messaging',
    items: ['PostgreSQL', 'MySQL', 'Apache Kafka', 'Redis Caching'],
  },
  {
    category: 'DevOps & Developer Tools',
    items: ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS, ECS, VPC, CloudWatch, IAM)', 'OpenShift', 'Maven', 'Gradle', 'Git', 'GitHub', 'CI/CD Pipelines'],
  },
  {
    category: 'Testing & Observability',
    items: ['JUnit', 'Mockito', 'RestAssured', 'Postman', 'Bruno', 'Splunk', 'New Relic'],
  },
  {
    category: 'Frontend Technologies',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
];

export const resumeExperience = [
  {
    company: 'Nike India Technology Center Pvt. Ltd. – SCPT',
    location: 'Bengaluru, India',
    title: 'Software Engineer (Apprentice)',
    period: 'August 2025 – Present',
    bullets: [
      'Developed high-throughput Java/Spring Boot microservices, implementing TTL (Time-To-Live) data retention rules to automatically purge order records after 3 months, optimizing database storage.',
      'Spearheaded the migration of core backend services from Java 8/11 to Java 21 and Spring Boot 2.x to 3.x, resolving critical security vulnerabilities across microservices.',
      'Architected and configured isolated developer-specific CI/CD pipelines using Gradle to ensure local code testing did not disrupt the main testing/staging environment.',
      'Optimized application logging by establishing standardized logging guidelines and debugged memory leaks using Splunk, reducing MTTR by 50%.',
      'Designed robust unit and integration test suites using JUnit, Mockito, and RestAssured, securing 95%+ code coverage under Test-Driven Development (TDD).',
      'Conducted requirements analysis and technical design for cloud backend microservices, collaborating with team leads to mitigate technical risks.'
    ],
  },
];

export const resumeEducation = [
  {
    degree: 'Master of Computer Application (MCA)',
    school: 'G.M. University, Sambalpur, Odisha',
    meta: 'CGPA: 8.7 (2022–2024)',
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    school: 'Berhampur University, Ganjam, Odisha',
    meta: 'CGPA: 8.4 (2019–2022)',
  },
];

export const resumeCertifications = [
  { name: 'AWS Cloud Practitioner Essentials', note: 'Amazon Web Services Training' },
  { name: 'Solved 200+ Data Structures & Algorithms problems on LeetCode', note: 'Problem Solving Profile' },
  { name: 'Familiarity with secure coding guidelines for backend API security', note: 'Secure SDE Coding Best Practices' },
  { name: 'Advanced Java (SCALER)', note: 'https://drive.google.com/file/d/1g-r8QOmmfS6g2v2leI1f1L0KWJv4j53o/view?usp=sharing' },
  { name: 'Cloud Computing (IIT Kharagpur, NPTEL)', note: 'https://drive.google.com/file/d/1uYN6uda0voxscf_YktH4f-TY8oeJ4Fzh/view?usp=drive_link' },
  { name: 'NPTEL Software Testing (NIT)', note: 'https://drive.google.com/file/d/1tVsAybSrnywTjYpxfh_rNOfVsXHh29X0/view?usp=sharing' },
  { name: 'Deep Learning (IIT Madras, NPTEL)', note: 'https://drive.google.com/file/d/1ju2iKPr35NCvipysLSCQHW1wI9j4nLCA/view?usp=sharing' },
];

export const resumeProjects = [
  {
    title: 'HypeStream - Event-Driven E-Commerce System',
    description:
      'Designed an event-driven stock deduction loop using Spring Boot and Apache Kafka to decouple order and inventory services, reducing checkout latency by 35% under high concurrency.',
    details: 'Architected a microservices layout using Spring Cloud Gateway and Eureka for resilient load balancing. Optimized local build environments by migrating to a Gradle Multi-Project structure (Java 21), securing a 40% reduction in compile and build times. Resolved Docker JVM container crashes by upgrading ZooKeeper/Kafka images to 7.5.0, securing 99.9% uptime.',
    stack: ['Java 21', 'Spring Boot 3.x', 'Spring Cloud Gateway', 'Netflix Eureka', 'Apache Kafka', 'MySQL', 'Redis', 'Docker', 'Gradle Multi-Project'],
    github: 'https://github.com/souravkhatai6/HypeStream',
  },
  {
    title: 'Supply Chain Management System',
    description:
      'Designed and developed a fully backend Supply Chain Management System using Java and Spring Boot. Connected backend services to database systems, designing optimized schemas and queries to handle transaction flows.',
    details: 'Integrated message queues (Kafka) and caching (Redis) for real-time, distributed data processing. Automated build and deployment workflows using CI/CD pipelines and version control using Git, reducing release cycle times. Conducted system performance profiling and query optimizations, improving database retrieval times by 25% and ensuring stability.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Git', 'CI/CD'],
    github: 'https://github.com/souravkhatai6/supply-chain-spring',
  },
];

