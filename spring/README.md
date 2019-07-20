 
1. ./mvnw install to create the jar files 
2.  command to start mysql database 
docker run --name mysql-standalone -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=ezops -e MYSQL_USER=denghanfei -e MYSQL_PASSWORD=denghanfei -d mysql:5.6
3. docker build . -t tonydeng1997/backend
3. command used to link mysql and springboot 
 docker run -p 8080:8080 --name springboot-mysql --link mysql-standalone:mysql -d tonydeng1997/backend
*Important thing to note is to change the application context database name to database name