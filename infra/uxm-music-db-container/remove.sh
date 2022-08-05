#!/usr/bin/env sh
docker rm uxm-music-mysql
docker rmi mysql:mysql:8.0.29

docker volume rm uxm-music-db-container_config
docker volume rm uxm-music-db-container_data