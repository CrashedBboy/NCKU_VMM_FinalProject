# Disk Component

## 1. Compilation

```bash
g++ ./disk.cpp -std=c++11 -o disk.exe
```

## 2. Manual Execution

Command format:
```bash
./disk.exe <char number> <iteration times>
```

For example, if we want to test the execution time of writing & reading 1024 characters 5 times:

```bash
./disk.exe 1024 5
```

The `STDOUT` output will be a single floating number which is execution duration in `millisecond`, `-1` denotes that allocation failed.

## 3. Dockerize

### 1. Build Docker Image from `Dockerfile`

```bash
# assume you are now in ./src/disk/
sudo docker build -t vmm/disk .
# run `sudo docker image ls` to check
```
then a new Docker image named `vmm/disk` is created.

### 2. Create and Run Docker Container from Built Image

```bash
sudo docker run --name disk -p 8083:80 -d vmm/disk
# run `sudo docker ps` to check
```

### 3. Assign Static IP address for Container `disk`

assign container `disk` to docker network `my-network` and assign IP address= `172.18.0.5`

```bash
sudo docker network connect --ip 172.18.0.5 my-network disk
```

Test connection:
```bash
curl -i 172.18.0.5?size=1024&iteration=20

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
sudo docker stop disk
sudo docker container rm disk
sudo docker image rm vmm/disk
```