class ProductList {
  constructor(container = '.products__list') {
    this.container = container;
    this.goods = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      { id: 1, img: 'img/product1.jpeg', title: 'Notebook', price: 2000 },
      { id: 2, img: 'img/product2.jpg', title: 'Mouse', price: 20 },
      { id: 3, img: 'img/product3.jpg', title: 'Keyboard', price: 200 },
      { id: 4, img: 'img/product4.jpg', title: 'Gamepad', price: 50 },
    ];
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
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = product.img;
  }
  render() {
    return `<div class="product-card">
              <img class="product-card__img" src="${this.img}" alt="product image">
              <h3 class="product-card__title">${this.title}</h3>
              <p class="product-card__price">${this.price}</p>
              <button class="btn btn-buy">Купить</button>
          </div>`;
  }
}

class Cart {
  constructor(container = '.cart') {
    this.container = container;
    this.items = [];
  }

  removeFromCart(id) {}

  addToCart(id) {}

  getTotalPrice() {}

  render() {}
}

class CartItem {
  constructor(product) {
    this.id = product.id;
    this.img = product.img;
    this.count = 1;
    this.title = product.title;
    this.price = product.price;
  }

  render() {}
}

let list = new ProductList();
console.log(list.getSum());
