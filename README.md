# Groupe de david_t 940256
# Documentation of the project 
- [Groupe de david_t 940256](#groupe-de-david_t-940256)
- [Documentation of the project](#documentation-of-the-project)
  - [DockerFile](#dockerfile)
    - [what we have done](#what-we-have-done)
    - [How](#how)
  - [docker-compose](#docker-compose)
    - [container into](#container-into)
    - [for dev](#for-dev)
    - [network choice](#network-choice)
  - [Kubernetes - minikube](#kubernetes---minikube)
  - [Helm](#helm)
    - [how to run](#how-to-run)
  - [Resume](#resume)
## DockerFile
### what we have done

during this exercices we have to do a containerised api with 
kubernetes and docker, we have used docker, kubernetes , helm and minikube 

### How  

For hehance this system we have made a simple CRUD API with a database. We use prisma for more capability of chage and for speed.
If we want to change our database for mysql we have just to change it in prisma environnement and the connection string.
the language for the api is typescript. It is widely used for the web and don't require any great specificity other than just transpiling in js from nodejs.
we try to separate the package as  Clean Architecture ( not really done but almost )


## docker-compose 

### container into

Into the container we have the database and the app container, docker-compose is here for automat the system for the dev version. 
if a dev come and would like to make it better, he/she just have to get docker, and docker-compose and run
```bash
docker-compose up -d 
```

it will connect automatically 

### for dev

We choose to make the docker-compose and dockerFile for the ddev environnement so you could code without network ( good luck )
### network choice 

We choose to create a network in docker-compose so the dev don't have to make with the it in the set-up. 
It make it more simple and more comprehensible for everyone 

## Kubernetes - minikube 

Minikube is a small embeded system for kubernetes, here we had used with docker ( lot of symplicity ).

for start we just make kubernetes files. and apply normally with : 

```bash
 kubectl apply -f files.yaml
 ``` 

 after some times it get more and more times to iterate, we decide to switch Helm a better system and we could **code** into the configuration files.

 minikube is extremly easy to to understand and the documentation is really easy to find.

 for the project we have to enable an addon as metrics with this command 

 ```bash 
    minikube addons enable metrics-server
```

after we could use the the metrics and choose wich load we want

## Helm

Helm is a powerfull support for kubernetes. With it you can update and add as many as you want parameters and don't need to change all your codebase 

also you can apply all your chart in one times : your config files.

We use Helm for describe the system of load, we can choose in one second and update it simply and for choose the key we want to get 

### how to run

for run the system you have to get 

- minikube 
- kubctl 
- helm
- docker 
- docker-compose 
- nodejs ( if you don't want to use docker image ) 

we think you have installed all of theses tool by yourself, or see the doc 

for up and running docker-compose:

```bash
docker-compose up -d 
```

you should be able to see the api start on : **http://localhost:4242/peoples** ( it's an empty array : you have anny data in yu database);

for kubernetes: make thses apply

1. start minikube, apply addon and create a namespace 

```bash
    minikube start
    minikube addons enable metrics-server
    kubectl create namespace app-etna 
    # for app-etna you could get another one : change it in the values of helm , otherwith it will don't work 
    helm install app-etna app-conf --values=app-conf/values.yaml --namespace=app-etna  
    minikube tunnel
    # get the ip by
    k get service app-service-3
    # or other service you have give in the values 
    # you should connect with the external ip 
    
```
your system is up and running: get the ip and go to **http://IP:4245/peoples**
Your system should be up and running : congrat !


## Resume


for resume, we have seen how to make a tiny api in kubernetes, also we have a lot of think to see :
- like ingress controller for what out and in 
- persistent data : make the database persistent in an other system 
- kubernetes secret, how to keep our secret and don't give to anybody the key of the database 

Thanks for reading and hope you understand , bye bye 

