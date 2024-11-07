let dishSectionRef = document.getElementById('dishes_section');
dishSectionRef.innerHTML = '';


function initDishes(){
  getFromLocalStorage();
  showItemCounter();
  showHeadline();
  showDishes();
  showCart();
}

function showHeadline(){
  dishSectionRef.innerHTML = '';
  dishSectionRef.innerHTML += getTemplateHeadline();
}

function showDishes(){
  let objLength = myDishes[chosenMenu].dishes.length;
  for (let i = 0; i < objLength; i++) {
    dishSectionRef.innerHTML += getTemplateMainMenu(chosenMenu, i);
  }
}

function pushItemToCart(idxDish){
  cart.push({
    name: myDishes[chosenMenu].dishes[idxDish].name,
    quantity: 1,
    price: myDishes[chosenMenu].dishes[idxDish].price,
    total: 1
  });
  cart[cart.length-1].total = +(cart[cart.length-1].quantity * cart[cart.length-1].price.toFixed(2));
}

function addToCart(idxDish){
  showItemCounter();
  if(checkIfDishIsAlreadyOnCart(idxDish)){
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].name === myDishes[chosenMenu].dishes[idxDish].name){
        idxCart = i;
      } 
    }  
    increaseAmount(idxCart);  
  } else {
    pushItemToCart(idxDish);
  }
  saveToLocalStorage();
  showCart();
  updateOverlayInvoice();
}

function increaseAmount(idxCart){
  showItemCounter();
  cart[idxCart].quantity++;
  cart[idxCart].total = +((cart[idxCart].quantity * cart[idxCart].price).toFixed(2));
  saveToLocalStorage();
  showCart();
  updateOverlayInvoice();
}

function removeFromCart(idxCart){
  cart[idxCart].quantity--;
  if(cart[idxCart].quantity == 0){
    cart.splice(idxCart, 1);
  } else {
    cart[idxCart].total = +((cart[idxCart].quantity * cart[idxCart].price).toFixed(2));
  }
  saveToLocalStorage();
  showCart();
  updateOverlayInvoice();
}

function intoTrash(idxCart){
  cart.splice(idxCart, 1);
  saveToLocalStorage();
  showCart();
  updateOverlayInvoice();
}

function checkIfDishIsAlreadyOnCart(idxDish){
  let isOnCart = false;
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].name === myDishes[chosenMenu].dishes[idxDish].name){
      isOnCart = true;
    }
  }
  return isOnCart;
}

function showCart(){
  showItemCounter();
  let currentCartRef = document.getElementById('current_cart');
  currentCartRef.innerHTML = '';
  for(let i = 0; i < cart.length; i++) {
    currentCartRef.innerHTML += getTemplateCart(i);
  }
  showCartInvoice();
}

function calculateDeliveryAndTotalCost(){
  if(invoice[0].cost > 75){invoice[0].delivery = 0;} else
  if(invoice[0].cost > 50){invoice[0].delivery = 2.50;} else
  if(invoice[0].cost > 35){invoice[0].delivery = 5.00;} else
  if(invoice[0].cost > 25){invoice[0].delivery = 7.50;}
  return (invoice[0].cost + invoice[0].delivery);
}

function calculateInvoice(){
  invoice[0].cost = 0;
  invoice[0].delivery = 10.00;
  invoice[0].total = 0;
  for (let i = 0; i < cart.length; i++) {
    invoice[0].cost += cart[i].total;
  }

  invoice[0].total = calculateDeliveryAndTotalCost();
}

function showCartInvoice(){
  let cartInvoiceRef = document.getElementById('cart_invoice');
  cartInvoiceRef.innerHTML = '';
  calculateInvoice();
  cartInvoiceRef.innerHTML = getTemplateInvoice();
  checkIfCartIsEmptyForBtnDesktop();
}

function clickedMenu(choice){
  chosenMenu = choice;
  showHeadline();
  showDishes();
}


function checkIfCartIsEmptyForBtnDesktop(){
  if(cart.length === 0){
    document.getElementById('order-btn').disabled = true;
    document.getElementById('order-btn').style.color = "rgb(128, 128, 128)";
  } else {
    document.getElementById('order-btn').disabled = false;
    document.getElementById('order-btn').style.color = "white";
  }
}

function checkIfCartIsEmptyForBtnMobile(){
  if(cart.length === 0){
    document.getElementById('order-btn-overlay').disabled = true;
    document.getElementById('order-btn-overlay').style.color = "rgb(128, 128, 128)";
  } else {
    document.getElementById('order-btn-overlay').disabled = false;
    document.getElementById('order-btn-overlay').style.color = "white";
  }
}

function toggleCartOverlay(){
  let cartOverlayRef = document.getElementById('cart_overlay');
  cartOverlayRef.classList.toggle("dnone");
  updateOverlayInvoice();
  showItemCounter();
}

function updateOverlayInvoice(){
  let overlayCartRef = document.getElementById('overlay_cart');
  overlayCartRef.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    overlayCartRef.innerHTML += getTemplateOverlay(i);
  }
  let overlayInvoiceRef = document.getElementById('overlay_invoice');
  overlayInvoiceRef.innerHTML = '';
  overlayInvoiceRef.innerHTML = getTemplateOverlayInvoice();
  checkIfCartIsEmptyForBtnMobile();
  showItemCounter();
}

function orderCompleted(){
  window.location.href = "./order-completed.html";
}

function showItemCounter(){
  let itemCounterRef = document.getElementById('item_counter');
  let numItems = 0;
  for (let i = 0; i < cart.length; i++) {
    numItems += cart[i].quantity;
  }
  itemCounterRef.innerText = numItems;
}