FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

FROM openjdk:17-oracle

# Set the working directory inside the container
COPY . .

# Build the Spring Boot application using Maven
RUN ./mvnw clean package

# Copy the compiled Spring Boot JAR file into the container
COPY --from=build /app/target/your-application.jar /app/your-application.jar

# Expose the port your Spring Boot app is running on
EXPOSE 8080

# Command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]