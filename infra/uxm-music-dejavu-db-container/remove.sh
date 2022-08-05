#!/usr/bin/env sh
docker rm uxm-music-dejavu-mysql
docker rmi mysql:mysql:8.0.29

docker volume rm uxm-music-dejavu-db-container_config
docker volume rm uxm-music-dejavu-db-container_data