#!/bin/bash
docker stack deploy -c docker-stack.yml blogsphere
docker service ls
