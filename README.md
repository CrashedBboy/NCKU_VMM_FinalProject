# NCKU_VMM_FinalProject
Final project for course 'Virtualization & Virtual Machine' in NCKU.

## Goal: Comparison of Microservice Performance between Hyper-V and VirtualBox
To test performance of utilizing hardware resources including CPU, memory, disk in following virtualization type:
* Bare-metal hypervisor (Windows Hyper-V)
* Hosted hypervisor (Oracle VirtualBox)

To conduct experiment, we construct a microservice consisting of containers using CPU, disk, memory resources respectively.

## Initial Setup

create new docker network named `my-network`
```bash
sudo docker network create --driver bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 my-network
```

## IP List

* Docker network gateway: 172.18.0.1
* VMM component - router: 172.18.0.2
* VMM component - memory: 172.18.0.3
* VMM component - compute: 172.18.0.4
* VMM component - disk: 172.18.0.5
* VMM component - DB: 172.18.0.6