var java = require('java');
java.classpath.push(".");

var calculator = java.import("Calculator");
console.log(calculator.addSync(1, 2));
