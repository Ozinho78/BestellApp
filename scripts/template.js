function getTemplateHeadline(){
  return `
        <div class="headline-imgs">
          <img src="./assets/img/cheese-1869708_1280.jpg" alt="">
          <a href="./index.html"><img class="logo-img" src="./assets/img/pizza-6875615_640.png" alt="Logo"></a>
        </div>
        <h1>Welcome to Pizza Paradise</h1>
          <div class="stars">
            <p>
              <span>4,2 von 5 Sternen</span><img src="./assets/icons/icons8-star-48-full.png" alt="Star"><img class="single-star" src="./assets/icons/icons8-star-48-full.png" alt="Star"><img src="./assets/icons/icons8-star-48-full.png" alt="Star"><img src="./assets/icons/icons8-star-48-full.png" alt="Star"><img src="./assets/icons/icons8-stern-32-empty.png" alt="Star">
            </p>
          </div>
          
        <nav><button onclick=clickedMenu(0)>Pizza</button><button onclick=clickedMenu(1)>Pasta</button><button onclick=clickedMenu(2)>Salate</button><button onclick=clickedMenu(3)>Desserts</button>
        </nav>
        <img src="./assets/img/food-1050813_1280.jpg" alt="">
  `;
}

function getTemplateMainMenu(idxMenu, idxDish){
  return `
         <div class="dish">
          <p class="dish-title">${myDishes[idxMenu].dishes[idxDish].name}</p>
          <p>${myDishes[idxMenu].dishes[idxDish].description}</p>
          <p class="dish-price">${myDishes[idxMenu].dishes[idxDish].price.toFixed(2).replace('.', ',')}€</p>
          <span onclick="addToCart(${idxDish})" class="add-span">+</span>
        </div>  
  `;
}

function getTemplateCart(idxCart){
  return `
      <h4>${cart[idxCart].name}</h4>
      <p>
        <span><b><img onclick="removeFromCart(${idxCart})" src="./assets/icons/icons8-minus-50-orange.png" alt=""></b></span>
        <span>${cart[idxCart].quantity}</span>
        <span><img onclick="increaseAmount(${idxCart})" src="./assets/icons/icons8-plus-50-orange.png" alt=""></span>
        <span>${cart[idxCart].total.toFixed(2).replace('.', ',')}€</span>
        <span onclick=intoTrash(${idxCart})><img src="./assets/icons/icons8-müll-80-orange.png" alt=""></span>
      </p>
  `;
}

function getTemplateInvoice(){
  return `
    <p><span>Zwischensumme</span><span>${invoice[0].cost.toFixed(2).replace('.', ',')}€</span></p>
    <p><span>Lieferkosten</span><span>${invoice[0].delivery.toFixed(2).replace('.', ',')}€</span></p>
    <p><span>Gesamt</span><span>${invoice[0].total.toFixed(2).replace('.', ',')}€</span></p>
    <a href="./order-completed.html" target="_blank"><button id="order-btn" onclick="orderCompleted()" disabled>JETZT BESTELLEN</button></a>
  `;
}

function getTemplateOverlay(idxCart){
  return `
        <h4>${cart[idxCart].name}</h4>
        <p>
          <span><b><img onclick="removeFromCart(${idxCart})" src="./assets/icons/icons8-minus-50-orange.png" alt=""></b></span>
          <span>${cart[idxCart].quantity}</span>
          <span><img onclick="increaseAmount(${idxCart})"  src="./assets/icons/icons8-plus-50-orange.png" alt=""></span>
          <span>${cart[idxCart].total.toFixed(2).replace('.', ',')}€</span>
          <span><img onclick=intoTrash(${idxCart}) src="./assets/icons/icons8-müll-80-orange.png" alt=""></span>
        </p>
  `;
}

function getTemplateOverlayInvoice(){
  return `
      <p><span>Zwischensumme</span><span>${invoice[0].cost.toFixed(2).replace('.', ',')}€</span></p>
      <p><span>Lieferkosten</span><span>${invoice[0].delivery.toFixed(2).replace('.', ',')}€</span></p>
      <p><span>Gesamt</span><span>${invoice[0].total.toFixed(2).replace('.', ',')}€</span></p>

      <a href="./order-completed.html" target="_blank"><button id="order-btn-overlay" onclick="orderCompleted()" disabled>JETZT BESTELLEN</button></a> 
  `;
}