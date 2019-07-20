# react-docker

This project runs a react application in [docker](https://www.docker.com/). 

## Build docker image
`docker build . -t react-docker`
## Run docker container
`docker run -p 8000:80 react-docker` and Navigate to `http://localhost:8000/`
-p 8000:80 is to Map TCP port 80 in the container to port 8080 on the Docker host.
8000 is arbitrary as long as it is not used by another service.

## Development server

Run `yarn start` for a dev sever. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files inside `app directory`.

## Build
 * Run `yarn build` to build the project. The build artifacts will be stored in the `build/` directory.
 
## Possible Errors and Solutions
* “port is currently used by another application”
  
  Try to map to another port or find out with sudo lsof -i -n -P | grep TCP on mac to see what service is using that port.

## Detailed Explanation
 * Go to medium(https://medium.com/@debabrata100/so-you-want-to-dockerize-your-react-app-64fbbb74c217)
