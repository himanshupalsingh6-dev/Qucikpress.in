let cart = [];

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) item.qty++;
  else cart.push({name, price, qty:1});
  render();
}

function render() {
  let html = "", total = 0;
  cart.forEach((i, index) => {
    total += i.price * i.qty;
    html += `${i.name} x ${i.qty}
    <button onclick="change(${index},1)">+</button>
    <button onclick="change(${index},-1)">-</button><br>`;
  });
  document.getElementById("cart").innerHTML = html;
  document.getElementById("total").innerText = total;
}

function change(i, v) {
  cart[i].qty += v;
  if (cart[i].qty <= 0) cart.splice(i,1);
  render();
}

function placeOrder() {
  fetch(https://script.google.com/macros/s/AKfycbw92PI55WHJk8QFtcoPtmOmRgz_qYKOeQ6mAzWmWVHFAKlSYHbi10YMQt7HcCTsIb3G/exec, {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      phone: phone.value,
      address: address.value,
      map: map.value,
      items: cart,
      total: total.innerText
    })
  }).then(() => alert("Order Placed"));
}
