FROM adoptopenjdk/openjdk17:alpine-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled Spring Boot JAR file into the container
COPY target/portfolio-0.0.1-SNAPSHOT.war /app/app.jar

# Expose the port your Spring Boot app is running on
EXPOSE 8080

# Command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]