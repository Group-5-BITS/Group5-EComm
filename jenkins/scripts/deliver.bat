@echo off

:: Enable command echo
echo on

:: Run Maven commands
mvn jar:jar install:install help:evaluate -Dexpression=project.name

:: Extract project name
FOR /F "delims=" %%i IN ('mvn help:evaluate -Dexpression=project.name ^| findstr /r /c:"^[^^[]*"') DO SET NAME=%%i

:: Extract project version
FOR /F "delims=" %%i IN ('mvn help:evaluate -Dexpression=project.version ^| findstr /r /c:"^[^^[]*"') DO SET VERSION=%%i

:: Run Java command
java -jar target/%NAME%-%VERSION%.jar
