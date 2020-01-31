// =============Business Logic=============
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.cost = 10
}

Pizza.prototype.costOfPizza = function() {
  if (this.size === "familySize") {
    this.cost += 4;
  } else if (this.size === "largeSize") {
    this.cost += 2;
  } else {
    this.cost; //check!
  }
  if (this.toppings) {
    this.cost += (this.toppings.length) * 2 
  }
  return this.cost;
}

// =========User Interface Logic===========

function addToCartListeners() {
  $("div.modal-footer").on("click", "button#addPizzaToCart", function() {
    var inputtedSize = $("input:radio[name=pizzaSize]:checked").val();
    console.log(inputtedSize);
 
    var inputtedToppings = [];
    $("input[name='pizzaToppings']:checked").each(function () {
      inputtedToppings.push($(this).val());
    });
    console.log(inputtedToppings);

    var newOrder = new Pizza (inputtedSize, inputtedToppings);
    newOrder.costOfPizza();
    console.log (newOrder);
  });
}

$(document).ready(function() {
  addToCartListeners();
  $("form#frmGetStarted").submit(function(event) {
    event.preventDefault();
    $("#myModal").show();
  });
});