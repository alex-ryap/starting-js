const copyrightYear = document.querySelector('.copyright__year');
const currentYear = new Date().getFullYear();
copyrightYear.insertAdjacentHTML('afterbegin', currentYear);

const products = [
  {
    id: 1,
    img: 'img/product1.jpeg',
    title: 'Notebook',
    price: 2000,
  },
  {
    id: 2,
    img: 'img/product2.jpg',
    title: 'Mouse',
    price: 20,
  },
  {
    id: 3,
    img: 'img/product3.jpg',
    title: 'Keyboard',
    price: 200,
  },
  {
    id: 4,
    img: 'img/product4.jpg',
    title: 'Gamepad',
    price: 50,
  },
];

const renderProduct = (product) => {
  return `<div class="product-card">
                  <img class="product-card__img" src="${product.img}" alt="product image">
                  <h3 class="product-card__title">${product.title}</h3>
                  <p class="product-card__price">${product.price}</p>
                  <button class="btn btn-buy">Купить</button>
              </div>`;
};

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderPage = (list) => {
  const container = document.querySelector('.products__list');
  const productsList = list.map((item) => renderProduct(item));
  productsList.forEach((productMarkup) => {
    container.insertAdjacentHTML('beforeend', productMarkup);
  });
};

renderPage(products);
