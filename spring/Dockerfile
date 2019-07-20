FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
COPY target/*.jar app.jar
COPY data data
ENTRYPOINT ["java","-jar","/app.jar"]