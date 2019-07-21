# Spring-Docker
## Develop on your machine
1. change database configurations in application.properties file
2. run ```mvn spring-boot:run```
## Develop on your machine with docker 
1. Download [Docker](https://www.docker.com/)
2. ```./mvnw install``` to create the jar files 
3.  ``` docker run --name {container name} -e MYSQL_ROOT_PASSWORD={root password} -e MYSQL_DATABASE={database name} -e MYSQL_USER={username} -e MYSQL_PASSWORD={password} -d mysql:5.6```
4. Change database name in application properties to container name
5. ``` docker build . -t {container name for Spring Boot}``` This will create an image for Spring Boot to link with our mysql container.
6.  ```docker run -p 8080:8080 --name {final container name} --link {container name}:mysql -d {container name for mysql}``` This will run the docker on port 8080. You could modify the port by changing the port number on the left side 
7 . Go to localhost:8080 and check if it works

*The names in {} are arbitrary, but make sure to be consistent.

## Troubleshooting With Docker
run ```docker logs {final container name}``` to see the list of logs.
