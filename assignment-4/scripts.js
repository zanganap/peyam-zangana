//Greeting
var user = "Peyam, ";
var salutation = "Hello ";
var greeting = salutation + user + "here are the latest Chrome reviews!";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//Price
var price = 20,
  studentDiscount = .10,
  studentPrice = price - (price * studentDiscount);

var priceEl = document.getElementById("price");
var studentPriceEl = document.getElementById("student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
