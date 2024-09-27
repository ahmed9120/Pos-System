let products = {
  burger: [
    {
      name: "Cheese Burger",
      price: 150,
      img: "./assets/images/burger/1.jpg",
    },
    {
      name: "Double Cheese Burger",
      price: 250,
      img: "./assets/images/burger/2.jpg",
    },
    {
      name: "Classic Burger",
      price: 200,
      img: "./assets/images/burger/3.jpg",
    },
    {
      name: "Mushroom Burger",
      price: 220,
      img: "./assets/images/burger/4.jpg",
    },
    {
      name: "Halibino Burger",
      price: 300,
      img: "./assets/images/burger/5.jpg",
    },
    {
      name: "King Burger",
      price: 140,
      img: "./assets/images/burger/6.jpg",
    },
  ],
  pizza: [
    {
      name: "pizza vegetables",
      price: 150,
      img: "./assets/images/pizza/1.jpg",
    },
    {
      name: "pizza cheese lovers",
      price: 250,
      img: "./assets/images/pizza/2.jpg",
    },
    {
      name: "pizza ranch",
      price: 200,
      img: "./assets/images/pizza/3.jpg",
    },
    {
      name: "pizza pepperoni",
      price: 220,
      img: "./assets/images/pizza/4.jpg",
    },
    {
      name: "pizza italiano",
      price: 300,
      img: "./assets/images/pizza/5.jpg",
    },
    {
      name: "pizza classic",
      price: 140,
      img: "./assets/images/pizza/6.jpg",
    },
  ],
  disert: [
    {
      name: "chocolate cake",
      price: 150,
      img: "./assets/images/disert/1.jpg",
    },
    {
      name: "Dark choco cake",
      price: 250,
      img: "./assets/images/disert/2.jpg",
    },
    {
      name: "white cream cake",
      price: 200,
      img: "./assets/images/disert/3.jpg",
    },
    {
      name: "creamprole",
      price: 220,
      img: "./assets/images/disert/4.jpg",
    },
    {
      name: "cookies",
      price: 300,
      img: "./assets/images/disert/5.jpg",
    },
    {
      name: "cheese cake cup",
      price: 140,
      img: "./assets/images/disert/6.jpg",
    },
  ],
  drink: [
    {
      name: "lemon juice",
      price: 150,
      img: "./assets/images/drink/1.jpg",
    },
    {
      name: "havana drink",
      price: 250,
      img: "./assets/images/drink/2.jpg",
    },
    {
      name: "coctale",
      price: 200,
      img: "./assets/images/drink/3.jpg",
    },
    {
      name: "apple juice",
      price: 220,
      img: "./assets/images/drink/4.jpg",
    },
    {
      name: "sina cola",
      price: 300,
      img: "./assets/images/drink/5.jpg",
    },
    {
      name: "grape juice",
      price: 140,
      img: "./assets/images/drink/6.jpg",
    },
  ],
};

let cardsContainer = document.querySelector("#cardsContainer");
let fatoraTotal = document.querySelector("#fatora-total");
function renderHomeCategory() {
  cardsContainer.innerHTML = "";
  Object.keys(products).forEach((ele) => {
    cardsContainer.innerHTML += `
    <div onclick="enterCategory('${ele}')" class="card m-1" style="width: 18rem; height:18rem; cursor: pointer;" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
  <img src="${products[ele][0].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fs-4 fw-semibold">${ele}s</h5>
  </div>
</div>
    `;
  });
}
renderHomeCategory();

function enterCategory(category) {
  cardsContainer.innerHTML = "";
  let choosenProduct = Object.values(products[category]);
  choosenProduct.forEach((ele, index) => {
    cardsContainer.innerHTML += `
    <div onclick="addToCart('${category}',${index})" class="card m-1" style="width: 18rem; height:18rem; cursor: pointer;" data-aos="zoom-out-left">
  <img src="${ele.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center fs-4 fw-semibold">${ele.name}</h5>
    <h5 class="card-title text-center fs-4 fw-semibold text-danger">$${ele.price}s</h5>
  </div>
</div>
    `;
  });
  cardsContainer.innerHTML += `
    <div class="w-100 d-flex justify-content-center">
  <button onclick="renderHomeCategory()" class="btn btn-warning">Back to Home</button>
</div>

    `;
}

let cartArr = [];
function addToCart(category, index) {
  let obj = Object.values(products[category])[index];
  let isAlreadyinCart = cartArr.findIndex((ele) => ele.name === obj.name);
  if (isAlreadyinCart !== -1) {
    obj.qty++;
    renderFatora();
  } else {
    obj.qty = 1;
    cartArr.push(obj);
    renderFatora();
  }
}

let cartList = document.querySelector(".home-content .cart-list");
function renderFatora() {
  cartList.innerHTML = "";
  cartArr.forEach((ele, index) => {
    cartList.innerHTML += `
        <div
              class="cart-item w-100 d-flex justify-content-between border border-black rounded"
            >
              <div class="left d-flex">
                <img src="${ele.img}" alt="" />
                <p>${ele.name}<br/><span class="text-danger fw-bold">$${ele.price}</span></p>
              </div>
              <div class="right d-flex">
                <button onclick="decreaseQty(${index})" class="btn fs-2">-</button>
                <p class="p-2 fw-semibold">${ele.qty}</p>
                <button onclick="increaseQty(${index})" class="btn fs-2">+</button>
              </div>
            </div>
        `;
  });
  let total = cartArr.reduce((sum, ele) => sum + ele.price * ele.qty, 0);
  fatoraTotal.innerText = total;
}

function increaseQty(index) {
  cartArr[index].qty++;
  renderFatora();
}
function decreaseQty(index) {
  let itemQty = cartArr[index].qty;
  if (itemQty === 1) {
    cartArr.splice(index, 1);
    renderFatora();
  } else {
    cartArr[index].qty--;
    renderFatora();
  }
}
