const itemsList = document.querySelector('.selected-items');
const checkoutTotal = document.querySelector('.checkout-total');
const checkoutForm = document.querySelector('.checkout-form');

displayCartItems();

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Bedankt voor je bestelling');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('cartTotal');
  window.location.href = 'index.html';
});

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title} - €${item.price.toFixed(2)}`;
    itemsList.appendChild(listItem);
  });

  checkoutTotal.textContent = (parseFloat(localStorage.getItem('cartTotal')) || 0).toFixed(2);
}

  
