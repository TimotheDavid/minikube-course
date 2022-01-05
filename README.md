 # Requirement 

 - docker 
 - minikube
 - docker-compose 
 - bash 
 - kubctl
 - helm

# Run on docker 

## run on docker compose 
make juste : 

```bash
    docker-compose build 
```

it will build the image 

you can test by doing 

```bash
    docker-compose up -d 
```

the app will be present on port 4242

clean the app for use minikube 

### minikube 

first apply minikube env by 

```bash
    eval $( minikube docker-env )
```

also start minikube 
and apply helm configuration 

in the root repository

```bash
    helm install app-conf app-conf --values=app-conf/values.yaml     
```

your container should be up and running 

you could verify by :

```bash
kubectl get pods
kubectl get services

```

you could get the url of the kubernetes :

```bash

minikube service app-service-3 --url
```

click on the url and should be file


