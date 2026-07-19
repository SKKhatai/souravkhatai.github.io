package dev.souravkhatai.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1")
public class ProfileController {

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile() {
        Map<String, Object> data = new HashMap<>();
        data.put("name", "Sourav Kumar Khatai");
        data.put("role", "Software Engineer (Apprentice)");
        data.put("specialization", "Java Backend, Microservices & Cloud Development");
        data.put("experience_level", "Apprentice");
        data.put("current_employer", "Nike (SCPT Team)");
        data.put("location", "Bengaluru, India");
        data.put("uptime", "100%");
        data.put("status", "Open to exciting backend/cloud opportunities");

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("statusCode", 200);
        response.put("data", data);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/skills")
    public ResponseEntity<Map<String, Object>> getSkills() {
        List<Map<String, Object>> skills = new ArrayList<>();
        
        skills.add(createSkillGroup("Core Languages & Frameworks", Arrays.asList("Java (Java 8/11/21)", "Spring Boot 3.x", "Hibernate/JPA", "Spring Cloud Gateway", "RESTful Microservices", "Data Structures & Algorithms (DSA)")));
        skills.add(createSkillGroup("Databases & Messaging", Arrays.asList("PostgreSQL", "MySQL", "Apache Kafka", "Redis Caching")));
        skills.add(createSkillGroup("DevOps & Developer Tools", Arrays.asList("Docker", "Kubernetes", "AWS (EC2, S3, RDS, ECS, VPC, CloudWatch, IAM)", "OpenShift", "Maven", "Gradle", "Git", "GitHub", "CI/CD Pipelines")));
        skills.add(createSkillGroup("Testing & Observability", Arrays.asList("JUnit", "Mockito", "RestAssured", "Postman", "Bruno", "Splunk", "New Relic")));
        skills.add(createSkillGroup("Frontend Technologies", Arrays.asList("HTML5", "CSS3", "JavaScript", "React")));

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("statusCode", 200);
        response.put("data", skills);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/projects")
    public ResponseEntity<Map<String, Object>> getProjects() {
        List<Map<String, Object>> projects = new ArrayList<>();

        Map<String, Object> p1 = new HashMap<>();
        p1.put("title", "HypeStream - Event-Driven E-Commerce System");
        p1.put("description", "Designed an event-driven stock deduction loop using Spring Boot and Apache Kafka to decouple order and inventory services, reducing checkout latency by 35% under high concurrency.");
        p1.put("details", "Architected a microservices layout using Spring Cloud Gateway and Eureka for resilient load balancing. Optimized local build environments by migrating to a Gradle Multi-Project structure (Java 21), securing a 40% reduction in compile and build times. Resolved Docker JVM container crashes by upgrading ZooKeeper/Kafka images to 7.5.0, securing 99.9% uptime.");
        p1.put("stack", Arrays.asList("Java 21", "Spring Boot 3.x", "Spring Cloud Gateway", "Netflix Eureka", "Apache Kafka", "MySQL", "Redis", "Docker", "Gradle Multi-Project"));
        p1.put("github", "https://github.com/souravkhatai6/HypeStream");

        Map<String, Object> p2 = new HashMap<>();
        p2.put("title", "Supply Chain Management System");
        p2.put("description", "Designed and developed a fully backend Supply Chain Management System using Java and Spring Boot. Connected backend services to database systems, designing optimized schemas and queries to handle transaction flows.");
        p2.put("details", "Integrated message queues (Kafka) and caching (Redis) for real-time, distributed data processing. Automated build and deployment workflows using CI/CD pipelines and version control using Git, reducing release cycle times. Conducted system performance profiling and query optimizations, improving database retrieval times by 25% and ensuring stability.");
        p2.put("stack", Arrays.asList("Java", "Spring Boot", "Kafka", "Redis", "Git", "CI/CD"));
        p2.put("github", "https://github.com/souravkhatai6/supply-chain-spring");

        projects.add(p1);
        projects.add(p2);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("statusCode", 200);
        response.put("data", projects);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/experience")
    public ResponseEntity<Map<String, Object>> getExperience() {
        List<Map<String, Object>> experience = new ArrayList<>();

        Map<String, Object> role = new HashMap<>();
        role.put("company", "Nike India Technology Center Pvt. Ltd. – SCPT");
        role.put("location", "Bengaluru, India");
        role.put("title", "Software Engineer (Apprentice)");
        role.put("period", "August 2025 – Present");
        role.put("bullets", Arrays.asList(
            "Developed high-throughput Java/Spring Boot microservices, implementing TTL (Time-To-Live) data retention rules to automatically purge order records after 3 months, optimizing database storage.",
            "Spearheaded the migration of core backend services from Java 8/11 to Java 21 and Spring Boot 2.x to 3.x, resolving critical security vulnerabilities across microservices.",
            "Architected and configured isolated developer-specific CI/CD pipelines using Gradle to ensure local code testing did not disrupt the main testing/staging environment.",
            "Optimized application logging by establishing standardized logging guidelines and debugged memory leaks using Splunk, reducing MTTR by 50%.",
            "Designed robust unit and integration test suites using JUnit, Mockito, and RestAssured, securing 95%+ code coverage under Test-Driven Development (TDD).",
            "Conducted requirements analysis and technical design for cloud backend microservices, collaborating with team leads to mitigate technical risks."
        ));

        experience.add(role);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("statusCode", 200);
        response.put("data", experience);

        return ResponseEntity.ok(response);
    }

    private Map<String, Object> createSkillGroup(String category, List<String> items) {
        Map<String, Object> group = new HashMap<>();
        group.put("category", category);
        group.put("items", items);
        return group;
    }
}
