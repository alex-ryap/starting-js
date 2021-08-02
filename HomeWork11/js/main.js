const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
  constructor(container = '.products__list') {
    this.container = container;
    this.goods = [];
    this._fetchProducts().then((data) => {
      this.goods = [...data];
      this.render();
    });
  }

  _fetchProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  getSum() {
    return this.goods.reduce((sum, product) => (sum += product.price), 0);
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', item.render());
    }
  }
}

class ProductItem {
  constructor(product) {
    this.title = product.product_name;
    this.id = product.id_product;
    this.price = product.price;
    this.img = `img/product${product.id_product}.jpg`;
  }
  render() {
    return `<div class="product-card">
              <img class="product-card__img" src="${this.img}" alt="product image">
              <h3 class="product-card__title">${this.title}</h3>
              <p class="product-card__price">${this.price}</p>
              <button onclick="addToCart(${this.id})" class="btn btn-buy">Купить</button>
          </div>`;
  }
}

class Cart {
  constructor(container = '.cart') {
    this.container = container;
    this.totalPrice = 0;
    this.countGoods = 0;
    this.items = [];
    this._fetchProducts().then((data) => {
      this.totalPrice = data.amount;
      this.countGoods = data.countGoods;
      this.items = [...data.contents];
      this.render();
    });
  }

  _fetchProducts() {
    return fetch(`${API}/getBasket.json`)
      .then((result) => result.json())
      .catch((error) => console.log(error));
  }

  removeFromCart(id) {
    this.items = this.items.filter((item) => item.id_product != id);
    this.render();
  }

  getSum() {
    return this.items.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0
    );
  }

  addToCart(product) {
    let isExist = false;
    for (let item of this.items) {
      if (item.id_product == product.id_product) {
        item.quantity++;
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      product.quantity = 1;
      this.items.push(product);
    }

    this.render();
  }

  render() {
    let productsMarkup = '';
    this.items.forEach((item) => {
      const cartItem = new CartItem(item);
      productsMarkup += cartItem.render();
    });
    const cartBlock = document.querySelector(this.container);
    cartBlock.innerHTML = `<div class="cart__products">
            ${productsMarkup}
          </div>
          <div class="cart__info">
            <p>Итого: <span class="cart__total-price">${this.getSum()} RUB</span></p>
          </div>`;
  }
}

class CartItem {
  constructor(product) {
    this.id = product.id_product;
    this.img = `img/product${product.id_product}.jpg`;
    this.count = product.quantity;
    this.title = product.product_name;
    this.price = product.price;
  }

  render() {
    return `<div class="cart__product">
              <img
                class="cart__product-image"
                src="${this.img}"
                alt="product"
              />
              <h3 class="cart__product-title">${this.title}</h3>
              <span class="cart__product-price">${this.price} RUB</span>
              <span class="cart__product-count">${this.count} шт</span>
              <button onclick="removeFromCart(${this.id})" class="cart__btn-remove">Удалить</button>
            </div>`;
  }
}

let list = new ProductList();
let cart = new Cart();

const btnCart = document.querySelector('.btn-cart');
btnCart.addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('open');
});

function removeFromCart(id) {
  cart.removeFromCart(id);
}

function addToCart(id) {
  const product = list.goods.find((product) => product.id_product == id);
  cart.addToCart(product);
}
