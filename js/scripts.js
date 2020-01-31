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
function cancelListeners() {
  $("div.modal-footer").on("click", "button#cancelAddPizza", function() {
    $(':checkbox:checked').prop('checked',false);
    $(':radio:checked').prop('checked',false);
    $("#showPrice").hide();
  }); 
}


function addToCartListeners() {
  $("div.modal-footer").on("click", "button#addPizzaToCart", function() {
    var inputtedSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputtedToppings = [];
    $("input[name='pizzaToppings']:checked").each(function () {
      inputtedToppings.push($(this).val());
    });
    var newOrder = new Pizza (inputtedSize, inputtedToppings);
    newOrder.costOfPizza();
    $("#showPrice").show();
    $(".pizza-size").html(inputtedSize);
    $(".add-toppings").html(inputtedToppings);
    $(".total-price").html("$" + newOrder.cost);
  });
}


$(document).ready(function() {
  cancelListeners();
  addToCartListeners();
  $("form#frmGetStarted").submit(function(event) {
    event.preventDefault();
    $("#myModal").show();
  });
});