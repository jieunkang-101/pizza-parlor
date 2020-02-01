// =============Business Logic=============
function Pizza(menu, size, toppings) {
  this.menu = menu,
  this.size = size,
  this.toppings = toppings,
  this.cost = 10
}

Pizza.prototype.costOfPizza = function() {
  if (this.menu === "Pepperoni") {
    this.cost = 11;
  }
  if (this.size === "Family") {
    this.cost += 4;
  } else if (this.size === "Large") {
    this.cost += 2;
  } else {
    this.cost; 
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
    $("#displayToppings").hide();
  }); 
}

function addDisplayToppings() {
  $("div#chooseOpt").on("click", "input:radio[name='toppingOpt']", function() {
    $("#displayToppings").show();
  });  
}

function addToCartListeners() {
  $(".close").click(function() {
    $("#myModal").hide();
    $("#displayToppings").hide();
    $(':checkbox:checked').prop('checked',false);
    $(':radio:checked').prop('checked',false);
  });
  $("div.modal-footer").on("click", "button#addPizzaToCart", function() {
    var inputtedMenu = $("input:radio[name=menu]:checked").val();
    var inputtedSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputtedToppings = [];
    $("input:checkbox[name='pizzaToppings']:checked").each(function () {
      inputtedToppings.push($(this).val());
    });
    var newOrder = new Pizza (inputtedMenu, inputtedSize, inputtedToppings);
    newOrder.costOfPizza();
    $("#myModal").hide();
    $("#showOpt").show();
    $(".menu").html(inputtedMenu);
    $(".pizza-size").html(inputtedSize);
    $(".add-toppings").html(" " + inputtedToppings);
    $(".total-price").html(" " + "$" + newOrder.cost);
  });
}

function addDeliveryListeners() {
  $("div#orderOpt").on("click", "input:radio[value='Delivery']", function() {
    $("#displayAddressFrm").show();
  });   
}

function addAddressListeners() {
  $("div.add-address").on("click", "button#addBtn", function() {
    $("#showCheckout").show();
    $(".input-address").show();
    var inputtedAddress = $("#input-address").val();
    $(".delivery-address").html(inputtedAddress);
  });   
}

function addCheckoutListeners() {
  $("div.checkout").on("click", "button#checkoutBtn", function() {
    location.reload();
    alert("Thank you for order!")
  });   
}

$(document).ready(function() {
  cancelListeners();
  addDisplayToppings();
  addToCartListeners();
  addDeliveryListeners();
  addAddressListeners();
  addCheckoutListeners();
  $("form#frmGetStarted").submit(function(event) {
    event.preventDefault();
    $("#myModal").show();
  });
});