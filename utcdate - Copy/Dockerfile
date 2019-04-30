FROM openjdk 
# jdk java development key
# get the java IMAGE(iso) an run as let say a virtual machine

COPY target/utcdate-0.0.1-SNAPSHOT.jar app/utcdate-0.0.1-SNAPSHOT.jar
# the command below copy the jar file create to a folder called app at docker container.

CMD ["java", "-jar", "app/utcdate-0.0.1-SNAPSHOT.jar"]
# open a cmd to run java with the folder.