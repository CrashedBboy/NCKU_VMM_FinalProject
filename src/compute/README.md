# Compute Component

## 1. Compilation

```bash
g++ ./compute.cpp -std=c++11 -o compute.exe
```

## 2. Manual Execution

Command format:
```bash
./compute.exe <max prime number> <iteration times>
```

For example, if we want to get execution time of computing all prime numbers under 1000 5 times:

```bash
./memory.exe 1000 5
```

The `STDOUT` output will be a single floating number which is execution duration in `millisecond`, `-1` denotes that allocation failed.

## 3. Dockerize

### 1. Build Docker Image from `Dockerfile`

```bash
# assume you are now in ./src/compute/
sudo docker build -t vmm/compute .
# run `sudo docker image ls` to check
```
then a new Docker image named `vmm/compute` is created.

### 2. Create and Run Docker Container from Built Image

```bash
sudo docker run --name compute -p 8082:80 -d vmm/compute
# run `sudo docker ps` to check
```

### 3. Assign Static IP address for Container `compute`

assign container `compute` to docker network `my-network` and assign IP address= `172.18.0.4`

```bash
sudo docker network connect --ip 172.18.0.4 my-network compute
```

Test connection:
```bash
curl -i 172.18.0.4?max=1000&iteration=20

# output

# HTTP/1.1 200 OK
# X-Powered-By: Express
# Content-Type: application/json; charset=utf-8
# Content-Length: 48
# ETag: W/"30-y//btzZop6OiN3PV/+lNdwvjgzk"
# Date: Sat, 13 Jun 2020 19:47:07 GMT
# Connection: keep-alive

# {"result":true,"error":null,"duration":0.000116}
```

### Rollback
If source code has been updated, to unset all built images & container, run:

```bash
sudo docker stop compute
sudo docker container rm compute
sudo docker image rm vmm/compute
```