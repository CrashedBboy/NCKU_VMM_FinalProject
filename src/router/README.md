# Router Component

### 1. Build Docker Image from `Dockerfile`

```bash
# assume you are now in ./src/router/
sudo docker build -t vmm/router .
# run `sudo docker image ls` to check
```

then a new Docker image named `vmm/router` is created.

### 2. Create and Run Docker Container from Built Image

```bash
sudo docker run --name router -p 8080:8080 -d vmm/router
# run `sudo docker container ps` to check
```

### 3. Assign Static IP address for Container `router`

assign container `router` to docker network `my-network` and assign IP address= `172.18.0.2`

```bash
sudo docker network connect --ip 172.18.0.2 my-network router
```

Test connection:
```bash
curl -i 172.18.0.2:8080

# output

#HTTP/1.1 200 OK
#X-Powered-By: Express
#Content-Type: text/html; charset=utf-8
#Content-Length: 11
#ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
#Date: Sat, 13 Jun 2020 09:51:30 GMT
#Connection: keep-alive

#Hello World
```

### Rollback
If source code has been updated, to unset all built images & container, run:

```bash
sudo docker stop router
sudo docker container rm router
sudo docker image rm vmm/router
```
