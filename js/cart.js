$(document).ready(function () {
    // cart
    var $cartItem = $('.cart__item');
    var $cartMinusButton = $('.cart-product__calculation--minus');
    var $cartPlusButton = $('.cart-product__calculation--plus');
    var $cartInput = $('.cart-product__input');
    var $cartProductPrice = $('.cart-product__price--txt');
    var $cartFullProductPrice = $('.cart__personal-price--number');
    var $cartFullProductPoint = $('.cart-product__price--txt--point');

    function getFullProductPrice() {
        var $fullPrice = 0;
        var $fullPoint = 0;
        $cartItem.each(function () {
            if ( $(this).hasClass('cart__item--point') ) {
                $fullPoint += (+$(this).find($cartInput).val() * +$(this).find($cartProductPrice).html());
            }
            else{
                $fullPrice += (+$(this).find($cartInput).val() * +$(this).find($cartProductPrice).html());
            }
        });
        $cartFullProductPrice.html($fullPrice);
        $cartFullProductPoint.html($fullPoint);
    }

    getFullProductPrice();
    $cartMinusButton.click(function () {
        var currentInput = $(this).parent().find($cartInput);
        var currentValue = +currentInput.val();
        if (currentValue > 1) {
            currentInput.val(currentValue - 1);
            getFullProductPrice();
        }
    });
    $cartPlusButton.click(function () {
        var currentInput = $(this).parent().find($cartInput);
        var currentValue = +currentInput.val();
        currentInput.val(currentValue + 1);
        getFullProductPrice();
    });
});