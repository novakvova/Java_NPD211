mvn -v

mvn clean package

mvn spring-boot:run

http://localhost:8082/swagger-ui/index.html

java -jar target/npd211.jar

mvn clean verify

mvn test

mvn dependency:resolve

mvn clean

java -jar target/npd211.jar --server.port=8082

```
docker build -t npd211-java . 
docker images --all
docker run -it --rm -p 5086:8082 --name npd211_container npd211-java
docker run -d --restart=always --name npd211_container -p 5086:8082 npd211-java
docker run -d --restart=always -v d:/volumes/spring/uploading:/app/uploading --name npd211_container -p 5086:8082 npd211-java
docker run -d --restart=always -v /volumes/spring/uploading:/app/uploading --name npd211_container -p 5086:8082 npd211-java
docker ps -a
docker stop npd211_container
docker rm npd211_container

docker images --all
docker rmi npd211-java

docker login
docker tag npd211-java:latest novakvova/npd211-java:latest
docker push novakvova/npd211-java:latest

docker pull novakvova/npd211-java:latest
docker ps -a
docker run -d --restart=always --name npd211_container -p 5086:8082 novakvova/npd211-java


docker pull novakvova/npd211-java:latest
docker images --all
docker ps -a
docker stop npd211_container
docker rm npd211_container
docker run -d --restart=always --name npd211_container -p 5086:8082 novakvova/npd211-java

---------------/etc/nginx/sites-available/--------------------------

server {
    server_name   slush.itstep.click *.slush.itstep.click;
    location / {
       proxy_pass         http://localhost:5086;
       proxy_http_version 1.1;
       proxy_set_header   Upgrade $http_upgrade;
       proxy_set_header   Connection keep-alive;
       proxy_set_header   Host $host;
       proxy_cache_bypass $http_upgrade;
       proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx
```

