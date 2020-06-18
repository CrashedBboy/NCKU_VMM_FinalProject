# NCKU_VMM_FinalProject
Final project for course 'Virtualization & Virtual Machine' in NCKU.

## Goal- Comparison of Microservice Performance between Hyper-V and VirtualBox
To test performance of utilizing hardware resources including CPU, memory, disk in following virtualization type:
* Bare-metal hypervisor (Windows Hyper-V)
* Hosted hypervisor (Oracle VirtualBox)

To conduct experiment, we construct a microservice consisting of containers using CPU, disk, memory resources respectively.

## Experiments

* network throughput- get `request per minutes` between host OS and dockerized HTTP client in VM
* memory allocation- get `execution time` of :
    - allocation of 512MB, 758MB, 1024MB
    - iteration for 5000 times, 7500 times, 10000 times
* prime number calculation- get `execution time` of :
    - calculating prime numbers under 5000, 7500, 10000
    - iteration for 5000 times, 7500 times, 10000 times
* disk read & write- get `execution time` of :
    - writing & reading 5000 chars, 7500 chars, 10000 chars
    - iteration for 500 times, 750 times, 1000 times

## Presentation Outline

1. Introduction
    - Goal: Comparison of Microservice Performance between Hyper-V and VirtualBox
    - Motivation: investigate the performance of 2 common types of virtualization, and build microservice in practice.
    - Brief intro of system architecture for experiments
2. Related Works
    - Summary of all previous paper presentation which is related to:
        - Performance comparison
        - Benchmark tools
        - Container visualization
3. System Architecture
    - Tools used:
        - Docker
        - Oracle VirtualBox
        - Windows Hyper-V
        - Vagrant
    - Architecture:
        - Illustration
        - Each container's function, corresponding test command, evaluation metrics
4. Experimental Analysis
    - Compare Bare-Metal(Hyper-V) with Hosted (VirtualBox) in aspect of:
        - Network throughput
        - CPU computing
        - Memory allocation
        - Disk Read & Write
    - present: code for evaluation, experiment results, our insights
5. Conclusion & Future Work

## Development Notes

### 1. Initial Docker Setup

create new docker network named `my-network`
```bash
sudo docker network create --driver bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 my-network
```

### 2. IP List

* Docker network gateway: 172.18.0.1
* VMM component - router: 172.18.0.2
* VMM component - memory: 172.18.0.3
* VMM component - compute: 172.18.0.4
* VMM component - disk: 172.18.0.5