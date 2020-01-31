// =============Business Logic=============
function Pizza(size) {
  this.size = size,
  this.toppings = []
}

var toppings = ["Chesse", "Sausage", "Olives", "Mushrooms", "Sun-Dried Tomatoes"];

Pizza.prototype.costOfPizza = function() {
  var cost = 10;
  if (this.size === "Family") {
    cost += 4;
  } else if (this.size === "Large") {
    cost += 2;
  } else {
    this.cost; //check!
  } return "$" + cost;
}






// =========User Interface Logic===========
