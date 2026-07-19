# Stage 1: Build the application with Gradle
FROM gradle:8.8-jdk17 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle bootJar --no-daemon

# Stage 2: Run the application with a slim JRE image
FROM eclipse-temurin:17-jre-alpine
EXPOSE 8080
WORKDIR /app
COPY --from=build /home/gradle/src/build/libs/*.jar /app/portfolio-api.jar

# Health check to ensure the container is running and healthy
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/portfolio-api.jar"]
