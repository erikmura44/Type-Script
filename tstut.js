var myName = "Erik";
var myAge = 29;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
document.write("myname is a " + typeof (myName) + "<br/>");
document.write("canvote is a " + typeof (canVote) + "<br/>");
document.write("anything is a " + typeof (anything) + "<br/>");
var strToNum = parseInt("5");
var numToString = 5;
document.write("numToStr is a " + typeof (numToString.toString()) + "<br />");
var PI = 3.14159;
var employees = ["bob", "sally", "sam"];
document.write(employees.toString() + "<br />");
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
