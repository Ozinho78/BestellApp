function saveToLocalStorage(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getFromLocalStorage(){
  let myObjCart = JSON.parse(localStorage.getItem("cart"));
  if(myObjCart != undefined){cart = myObjCart;}
}