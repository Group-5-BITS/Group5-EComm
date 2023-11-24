#!/usr/bin/env bash

set -x
# Navigate to the 'clients' folder
cd clients || exit

# Run Maven command to get project name
NAME=$(mvn help:evaluate -Dexpression=project.name | grep "^[^\[]")
set +x

set -x
# Run Maven command to get project version
VERSION=$(mvn help:evaluate -Dexpression=project.version | grep "^[^\[]")
set +x

set -x
# Run Java command to execute the JAR file
java -jar target/${NAME}-${VERSION}.jar
