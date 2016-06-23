var java = require('java');
java.classpath.push(".");

var x = java.newInstanceSync("ComplexType");
x.setNameSync('Willy Wonka');
console.log(x.getNameSync());
