/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');

//Перелік розмірів піци
var PizzaSize = {
    Big: "big_size",
    Small: "small_size"
};

//Змінна в якій зберігаються перелік піц в кошику
var Cart = [];

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");
var orderAmount = 0;
var totalPrice = Number(require('./PizzaMenu'));

function addToCart(pizza, size) {
    //Додавання однієї піци в кошик покупок
    orderAmount++;
    document.getElementById("orderAmo").innerHTML = orderAmount;
    //Приклад реалізації, можна робити будь-яким іншим способом
    Cart.push({
        pizza: pizza,
        size: size,
        quantity: 1
    });

    //Оновити вміст кошика на сторінці
    updateCart();

}

function removeFromCart(Cart ) {
    //Видалити піцу з кошика
    orderAmount--;
    document.getElementById("orderAmo").innerHTML = orderAmount;
    Cart.pop();

    //Після видалення оновити відображення
    updateCart();
}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    //TODO: ...

    updateCart();
}

function getPizzaInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.PizzaCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function(){
            //Збільшуємо кількість замовлених піц
            totalPrice+=199;
            document.getElementById("sumPrice").innerHTML = totalPrice;
            cart_item.quantity += 1;
            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function() {
            if (cart_item.quantity <= 1)
                alert("Ви не можете зменшити кылькість до нуля!");
            else {
                cart_item.quantity -= 1;
                updateCart();
            }
        });

        $node.find(".remove").click(function () {

            Cart.pop();
            removeFromCart(Cart);
            updateCart();
        });


        $cart.append($node);
    }

    Cart.forEach(showOnePizzaInCart);

}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.PizzaSize = PizzaSize;