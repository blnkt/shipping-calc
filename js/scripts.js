var shippingInfo = {};

$(document).ready(function() {
  $("form#shipping-info").submit(function(event){
    event.preventDefault();
    shippingInfo.weight = $("input.weight").val();
    shippingInfo.length = $("input.length").val();
    shippingInfo.width = $("input.width").val();
    shippingInfo.height = $("input.height").val();
    if (shippingInfo.weight < ((this.length * this.width * this.height) / 166)) {
      shippingInfo.weight = (this.length * this.width * this.height) / 166;
    } else {
      shippingInfo.weight = $("input.weight").val();
    }

    shippingInfo.type = $("select.shipping-type").val();

    if (($("select.shipping-type").val()) === "Regular") {
      shippingInfo.rate = 0.6 * shippingInfo.weight;
    } else if (($("select.shipping-type").val()) === "Two-Day") {
      shippingInfo.rate = 1.1 * shippingInfo.weight;
    } else if (($("select.shipping-type").val()) === "Overnight") {
      shippingInfo.rate = 1.5 * shippingInfo.weight;
    }

    $(".results").text("$" + shippingInfo.rate);

  });
});

