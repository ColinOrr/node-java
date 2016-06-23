node-java
=========
An exploratory spike for using [node-java](https://github.com/joeferner/node-java)
to call the JVM from Node.

```bash
# Start up the docker container
$ docker-compose run app bash

# Install node-java
$ npm install java

# Hello World Sample
$ cd /code/hello-world
$ node hello-world.js

# Calculator Sample
$ cd /code/calculator
$ javac -classpath . Calculator.java
$ node calculator.js

# Complex Type Sample
$ cd /code/complex-type
$ javac -classpath . ComplexType.java
$ node complex-type.js
```
