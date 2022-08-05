#!/usr/bin/env sh
docker-compose --file ./infra/uxm-music-db-container/docker-compose.yml up -d
docker-compose --file ./infra/uxm-music-dejavu-db-container/docker-compose.yml up -d