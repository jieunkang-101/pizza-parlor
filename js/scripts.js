// =============Business Logic=============
function Pizza(size) {
  this.size = size,
  this.toppings = []
}
var cost = 10;
var toppings = ["Chesse", "Sausage", "Olives", "Mushrooms", "Sun-Dried Tomatoes"];

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


// =========User Interface Logic===========
var pizza = new Pizza();

