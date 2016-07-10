var input = "<breakeverything>";
var result = "Hello, World";
var version = "1.0.0"

// Modifier Effects

if (input.indexOf('<breakeverything>') > -1) {
  var input = "π";
  var result = "";
}
if (input.indexOf('<add:') > -1) {
  if (input.indexOf('exclam>') > -1) {
    var result = result + "!";
  }
  if (input.indexOf('ask>') > -1) {
    var result = result + "?";
  }
}
if (input.indexOf('<clearallandgivemethecurrentversionofthisellodoparseralsothisisaprettylongstring>') > -1) {
  var result = "Well, if you just used <version> you could've actually got it without typing that extremely long function in this quite complicated and never going to be fixed programming language named Ellodo, but the version of this is " + version + ".";
}
if (input.indexOf('<version>') > -1) {
  var result = "The version of this is " + version + ".";
}
if (input.indexOf('<rawversion>') > -1) {
  var result = version + ".";
}
if (input.indexOf('<reallyrawversion>') > -1) {
  var result = version + " ";
}
if (input.indexOf('<whydidyouputthatspacethere>') > -1) {
  var result = version + "               ";
}
if (input.indexOf('<stopputtingthosespacesthere>') > -1) {
  var result = version + "ok, fine";
}
if (input.indexOf('<justputthevariablecalledversion>') > -1) {
  var result = version;
}
if (input.indexOf('<thankyou>') > -1) {
  var result = "ERROR. Cannot compute this. I mean, who thanks me?"
}
if (input.indexOf('<ellodo>') > -1) {
  var result = "Èllòdò";
}
  
document.getElementById('result').innerHTML = result;

// Afterward Effects

if (input.indexOf('<alertthistoo>') > -1) {
  window.alert(result);
}
