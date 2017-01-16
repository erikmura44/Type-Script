var myName: string = "Erik";
var myAge: number = 29;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;


document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

document.write("myname is a " + typeof(myName) + "<br/>");
document.write("canvote is a " + typeof(canVote) + "<br/>");
document.write("anything is a " + typeof(anything) + "<br/>");

var strToNum: number = parseInt("5");
var numToString: number = 5;
document.write("numToStr is a " + typeof(numToString.toString()) + "<br />");

const PI = 3.14159;

var employees: string[] = ["bob", "sally", "sam"];

document.write(employees.toString() + "<br />");

interface superHero {
   realName: String;
   superName: String;
}
var superheroes: SuperHero[] = [];
superheroes.push({
   realName: 'Bruce Wayne',
   superName: 'Batman'
});

document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");

document.write("5 + 4 = " + (5+4) + "<br />");

document.write("5 + String 2 = " + (5+'2') + "<br />");

var randNum: number = 1;

document.write("randNum++ = " + randNum++ + "<br />");
document.write("++randNum = " + ++randNum + "<br />");
document.write("randNum-- = " + randNum-- + "<br />");
document.write("--randNum = " + --randNum + "<br />");
