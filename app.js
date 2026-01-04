// ---------- AUTH ----------
function signup(){
  let user={
    name: name.value,
    email: email.value,
    pass: password.value,
    address: [],
    orders:[]
  };
  localStorage.setItem("user",JSON.stringify(user));
  location.href="account.html";
}

function login(){
  let u=JSON.parse(localStorage.getItem("user"));
  if(u && u.email===email.value && u.pass===password.value){
    location.href="index.html";
  }else alert("Invalid login");
}

function logout(){
  localStorage.removeItem("user");
  location.href="login.html";
}

// ---------- CART ----------
let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function goCart(){ location.href="cart.html"; }
function goAccount(){
  localStorage.getItem("user")?
  location.href="account.html":
  location.href="login.html";
}

function goCheckout(){
  localStorage.getItem("user")?
  location.href="checkout.html":
  location.href="login.html";
}

// ---------- LOAD CART ----------
if(document.getElementById("cartList")){
  cart.forEach(i=>{
    let li=document.createElement("li");
    li.innerText=i.name+" ₹"+i.price;
    cartList.appendChild(li);
  });
}

// ---------- ADDRESS ----------
if(document.getElementById("info")){
  let u=JSON.parse(localStorage.getItem("user"));
  info.innerText=u.name+" | "+u.email;
  u.address.forEach(a=>{
    let li=document.createElement("li");
    li.innerText=a;
    addrList.appendChild(li);
  });
}

function saveAddress(){
  let u=JSON.parse(localStorage.getItem("user"));
  u.address.push(address.value);
  localStorage.setItem("user",JSON.stringify(u));
  location.reload();
}

// ---------- ORDER ----------
function placeOrder(){
  let u=JSON.parse(localStorage.getItem("user"));
  u.orders.push({
    items:cart,
    status:"Placed"
  });
  localStorage.setItem("user",JSON.stringify(u));
  localStorage.removeItem("cart");
  alert("Order Placed");
  location.href="orders.html";
}

// ---------- LOAD ORDERS ----------
if(document.getElementById("orders")){
  let u=JSON.parse(localStorage.getItem("user"));
  u.orders.forEach(o=>{
    let li=document.createElement("li");
    li.innerText=o.items.length+" items | "+o.status;
    orders.appendChild(li);
  });
}
