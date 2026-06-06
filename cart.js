console.log("cart.js loaded");

const CART_KEY = "ut_cart_v1";
const ORDER_KEY = "ut_orders_v1";

// Load Cart
function loadCart() {
    let cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

// Save Cart
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add Product
function addToCart(productName, price) {

    let cart = loadCart();

    cart.push({
        name: productName,
        price: Number(price)
    });

    saveCart(cart);

    updateCartDisplay();

    alert(productName + " Added To Cart 🛒");
}

// Clear Cart
function clearCart() {

    saveCart([]);

    updateCartDisplay();

    alert("Cart Cleared");
}

// View Cart
function viewCart() {

    let cart = loadCart();

    if (cart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    let text = "🛒 CART ITEMS\n\n";

    let total = 0;

    cart.forEach(function(item, index) {

        text +=
            (index + 1) +
            ". " +
            item.name +
            " - ₹" +
            item.price +
            "\n";

        total += item.price;
    });

    text += "\n--------------------";
    text += "\nTotal = ₹" + total;

    alert(text);
}

// Checkout
function checkout() {

    let cart = loadCart();

    if (cart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });

    alert(
        "Order Placed Successfully 🎉\n\nItems: " +
        cart.length +
        "\nTotal: ₹" +
        total
    );

    saveCart([]);

    updateCartDisplay();
}

// Update Cart Counter
function updateCartDisplay() {

    let cart = loadCart();

    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });

    let countEl = document.getElementById("cartCount");
    let totalEl = document.getElementById("cartTotal");

    if (countEl) {
        countEl.innerText = cart.length;
    }

    if (totalEl) {
        totalEl.innerText = total;
    }
}

// Place Order
function placeOrder() {

    let cart = loadCart();

    if (cart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    let name =
        document.getElementById("name")?.value || "";

    let address =
        document.getElementById("address")?.value || "";

    let phone =
        document.getElementById("phone")?.value || "";

    let payment =
        document.getElementById("payment")?.value || "";

    if (
        name === "" ||
        address === "" ||
        phone === "" ||
        payment === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });

    let order = {
        name: name,
        address: address,
        phone: phone,
        payment: payment,
        items: cart,
        total: total
    };

    let orders =
        JSON.parse(
            localStorage.getItem(ORDER_KEY) || "[]"
        );

    orders.push(order);

    localStorage.setItem(
        ORDER_KEY,
        JSON.stringify(orders)
    );

    alert("Order Saved Successfully");

    saveCart([]);

    updateCartDisplay();
}

// IMPORTANT
// Do NOT write:
// window.addToCart = (name,price)=>addToCart(name,price);

// Use this instead:
window.addToCart = addToCart;
window.clearCart = clearCart;
window.viewCart = viewCart;
window.checkout = checkout;
window.placeOrder = placeOrder;

// Auto Start
document.addEventListener(
    "DOMContentLoaded",
    updateCartDisplay
);