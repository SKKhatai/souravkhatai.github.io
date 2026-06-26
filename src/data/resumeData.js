export const resumeSkills = [
  {
    category: 'Backend & Databases',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'JDBC', 'RESTful APIs', 'Microservices', 'MySQL', 'Oracle SQL', 'PostgreSQL', 'DynamoDB'],
  },
  {
    category: 'Frontend Development',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive Web Design'],
  },
  {
    category: 'Cloud, DevOps & Tools',
    items: ['AWS (EC2, S3, Lambda, IAM)', 'Docker', 'Git', 'GitHub', 'Maven', 'Gradle', 'Jenkins (CI/CD)', 'Splunk', 'Linux', 'VS Code', 'Eclipse', 'Jira'],
  },
  {
    category: 'CS Fundamentals & Methods',
    items: ['Data Structures & Algorithms', 'OOP (Object-Oriented Programming)', 'TDD (Test-Driven Development)', 'Agile/Scrum', 'Problem / Incident Management'],
  },
];

export const resumeExperience = [
  {
    company: 'Nike — SCPT Team',
    location: 'Bengaluru',
    title: 'Software Engineering Apprentice',
    period: '2025–Present',
    bullets: [
      'Design, build, and maintain Spring Boot microservices for supply-chain workflows with clean layering and stable REST APIs.',
      'Translate product requirements into technical designs, implement features, and participate in code reviews across Agile sprints.',
      'Improve reliability with robust validation, consistent exception handling, and idempotent request patterns where applicable.',
      'Practice TDD and write unit + integration tests; focus on maintainable test suites that protect critical business behavior.',
      'Work with AWS (EC2, S3, Lambda, IAM) and Docker to ship cloud-ready services and improve deployment consistency.',
      'Use DynamoDB for NoSQL use cases and relational databases where appropriate; optimize queries and data access patterns.',
      'Monitor and troubleshoot production issues using Splunk and Jenkins; collaborate in incident/problem/change processes.',
      'Contribute to CI/CD hygiene (build stability, test signal, and release readiness) to keep delivery smooth.',
    ],
  },
];

export const resumeEducation = [
  {
    degree: 'Master of Computer Application',
    school: 'G.M University, Sambalpur (Odisha)',
    meta: 'CGPA: 8.7 (2022–2024)',
  },
  {
    degree: 'Bachelor of Science',
    school: 'Berhampur University, Ganjam (Odisha)',
    meta: 'CGPA: 8.4 (2019–2022)',
  },
];

export const resumeCertifications = [
  { name: 'Advanced Java (SCALER)', note: 'https://drive.google.com/file/d/1g-r8QOmmfS6g2v2leI1f1L0KWJv4j53o/view?usp=sharing' },
  { name: 'Cloud Computing (IIT Kharagpur, NPTEL)', note: 'https://drive.google.com/file/d/1uYN6uda0voxscf_YktH4f-TY8oeJ4Fzh/view?usp=drive_link' },
  { name: 'NPTEL Software Testing (NIT)', note: 'https://drive.google.com/file/d/1tVsAybSrnywTjYpxfh_rNOfVsXHh29X0/view?usp=sharing' },
  { name: 'Deep Learning (IIT Madras, NPTEL)', note: 'https://drive.google.com/file/d/1ju2iKPr35NCvipysLSCQHW1wI9j4nLCA/view?usp=sharing' },
];

export const resumeProjects = [
  {
    title: 'Supply Chain Management System',
    description:
      'End-to-end platform for inventory, orders, and supplier workflows. Includes role-based access, reporting endpoints, and transactional consistency for stock movements.',
    details: 'Built with Spring Boot and Spring Security for robust authentication. Employs MySQL with optimized indexes and JPA/Hibernate for complex relational querying. Achieved high transactional consistency across concurrent order processing, reducing race conditions and inventory drift. Deployed APIs follow strictly RESTful principles with structured error handling and DTO mappings.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs'],
    github: 'https://github.com/yourusername/supply-chain-spring',
  },
  {
    title: 'Student Management System',
    description:
      'Web application for managing students, courses, and enrollments. Features CRUD modules, validation, and an admin-friendly dashboard backed by a relational schema.',
    details: 'Developed a robust monolithic backend utilizing Spring Boot. Implemented strict data validation rules to ensure data integrity before persistence in MySQL. Integrated an MVC architecture to handle frontend templating or API JSON responses dynamically. Simplified deployment and configuration using Maven and Spring properties profiles across environments.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript'],
    github: 'https://github.com/yourusername/student-management-spring',
  },
];


