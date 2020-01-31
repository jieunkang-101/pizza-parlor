// =============Business Logic=============
function Pizza(size) {
  this.size = size,
  this.toppings = []
}

Pizza.prototype.addTopping = function() {
  $('input[type:"checkbox"]').click(function() {
    if($(this).prop("checked") == true) {
      toppings.push(inputtedToppings);
    }
  });
}

// Pizza.prototype.addTopping = function() {
//   for (var i=0; i<toppings.length; i++) {
//     var toppings = ["Cheese", "Sausage", "Olives", "Mushrooms", "Sun-Dried Tomatoes"];
//     var addTopping = [];
//     addTopping.push(toppings[i]);
//   }
//   this.customToppings.push(addTopping);
// }

var cost = 10;

Pizza.prototype.costOfPizza = function() {
  if (this.size === "Family") {
    this.cost += 4;
  } else if (this.size === "Large") {
    this.cost += 2;
  } else {
    this.cost; //check!
  }
  // if (this.toppings) {
  //   for (var i=0; i<toppings.length; i++) {
  //     this.cost += (i+1) * 2
  //   }
  // }
  return "$" + cost;
}




// =========User Interface Logic===========
var pizza = new Pizza();

function addToCartListeners() {
  $("div.modal-footer").on("click", "button#addPizzaToCart", function() {
    var inputtedSize = $("input:radio[name=pizzaSize]:checked").val();
    console.log(inputtedSize);
    var inputtedToppings = $("input:checkbox[name=pizzaToppings]:checked").val();
    console.log(inputtedToppings);
    var newOrder = new Pizza (inputtedSize, inputtedToppings);
    pizza.costOfPizza(newOrder);
    console.log (pizza);
  });
}


$(document).ready(function() {
  addToCartListeners();
  $("form#frmGetStarted").submit(function(event) {
    event.preventDefault();
    $("#myModal").show();
  });
});