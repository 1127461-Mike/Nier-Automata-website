const cartButton = document.querySelector('.cart-button');
const cart = document.querySelector('.cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout-button');

let total = 0;

cartButton.addEventListener('click', () => {
  if (cart.style.display === 'none') {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const price = parseFloat(product.dataset.price);
    const title = product.querySelector('h3').textContent;

    addToCart(title, price);
    updateTotal(price);
  });
});

function addToCart(title, price) {
  const listItem = document.createElement('li');
  listItem.textContent = `${title} - €${price}`;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Verwijder';
  removeButton.addEventListener('click', () => {
    listItem.remove();
    updateTotal(-price);
    saveCartToLocalStorage();
  });
  listItem.appendChild(removeButton);
  cartItems.appendChild(listItem);
  saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
  const cartItemsArray = Array.from(cartItems.children).map(item => {
    const title = item.textContent.split(' - ')[0];
    const price = parseFloat(item.textContent.split(' - ')[1].substring(1));
    return {title, price};
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
}


function updateTotal(price) {
  total += price;
  cartTotal.textContent = total.toFixed(2);
}

checkoutButton.addEventListener('click', () => {
  if (total > 0) {
    const cartItemsArray = Array.from(cartItems.children).map(item => {
      const title = item.textContent.split(' - ')[0];
      const price = parseFloat(item.textContent.split(' - ')[1].substring(1));
      return {title, price};
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
    localStorage.setItem('cartTotal', total);
    window.location.href = 'checkout.html';
  } else {
    alert('Je winkelwagentje is leeg. Voeg items toe om af te rekenen.');
  }
});
function loadCartFromLocalStorage() {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  storedCartItems.forEach(item => {
    addToCart(item.title, item.price);
    updateTotal(item.price);
  });
}

loadCartFromLocalStorage();

  