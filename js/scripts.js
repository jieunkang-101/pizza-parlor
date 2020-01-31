// =============Business Logic=============
function Pizza(size) {
  this.size = size,
  this.toppings = []
}
var cost = 10;

Pizza.prototype.addTopping = function() {
  for (var i=0; i<toppings.length; i++) {
    var toppings = ["Cheese", "Sausage", "Olives", "Mushrooms", "Sun-Dried Tomatoes"];
    var addTopping = [];
    addTopping.push(toppings[i]);
  }
  console.log(addTopping);
}

Pizza.prototype.costOfPizza = function() {
  if (this.size === "Family") {
    this.cost += 4;
  } else if (this.size === "Large") {
    this.cost += 2;
  } else {
    this.cost; //check!
  }
  if (this.toppings) {
    for (var i=0; i<toppings.length; i++) {
      this.cost += (i+1) * 2
    }
  }
  return "$" + cost;
}

function Topping() {
  this.topping = topping;
} 


// =========User Interface Logic===========
var pizza = new Pizza();


$(document).ready(function() {
  $("form#frmGetStarted").submit(function(event) {
    event.preventDefault();
    $("#myModal").show();
    var inputtedSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputtedToppings = $("input:checkbox[name=pizzaToppings]:checked").val();
    var newOrder = new Pizza (inputtedSize, inputtedToppings);
    pizza.costOfPizza(newOrder);
    console.log (pizza);
  });
});