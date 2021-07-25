class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = [stuffing];
    this.toppings = [];
    this.calculatePrice();
    this.calculateCalories();
  }

  changeSize(size) {
    this.size = size;
    this.calculatePrice();
    this.calculateCalories();
  }

  addStuffing(stuff) {
    this.stuffing.push(stuff);
    this.calculatePrice();
    this.calculateCalories();
  } // Добавить начинку

  removeStuffing(stuff) {
    this.stuffing = this.stuffing.filter((curStuff) => {
      if (curStuff != stuff) return curStuff;
    });
    this.calculatePrice();
    this.calculateCalories();
  } // Убрать начинку

  addTopping(topping) {
    this.toppings.push(topping);
    this.calculatePrice();
    this.calculateCalories();
  } // Добавить добавку

  removeTopping(topping) {
    this.toppings = this.toppings.filter((curTopping) => {
      if (curTopping != topping) return curTopping;
    });
    this.calculatePrice();
    this.calculateCalories();
  } // Убрать добавку

  calculatePrice() {
    let totalPrice = fetchData.sizes[this.size].price;
    this.stuffing.forEach(
      (stuff) => (totalPrice += fetchData.stuffing[stuff].price)
    );
    this.toppings.forEach((topping) => {
      totalPrice += fetchData.toppings[topping].price;
    });
    document.querySelector('.total__price').innerHTML = `${totalPrice}RUB`;
  } // Узнать цену

  calculateCalories() {
    let totalCalories = fetchData.sizes[this.size].calories;
    this.stuffing.forEach(
      (stuff) => (totalCalories += fetchData.stuffing[stuff].calories)
    );
    this.toppings.forEach((topping) => {
      totalCalories += fetchData.toppings[topping].calories;
    });
    document.querySelector(
      '.total__calories'
    ).innerHTML = `${totalCalories}ккал`;
  } // Узнать калорийность
}

const fetchData = {
  sizes: {
    small: {
      price: 50,
      calories: 20,
    },
    big: {
      price: 100,
      calories: 40,
    },
  },
  stuffing: {
    cheese: {
      price: 10,
      calories: 20,
    },
    salad: {
      price: 20,
      calories: 5,
    },
    potato: {
      price: 15,
      calories: 10,
    },
  },
  toppings: {
    condiment: {
      price: 15,
      calories: 0,
    },
    mayonnaise: {
      price: 20,
      calories: 5,
    },
  },
};

// Initial configuration
const defaultSize = document.querySelector('input[name="size"][checked]').id;
const defaultStuffing = document.querySelector('input.stuffing[checked]').id;
const hamburger = new Hamburger(defaultSize, defaultStuffing);

const sizes = document.querySelectorAll('input.size');
const stuffings = document.querySelectorAll('input.stuffing');
const toppings = document.querySelectorAll('input.topping');

// Size
sizes.forEach((size) => {
  size.addEventListener('click', changeSizeHandler);
});

function changeSizeHandler(event) {
  hamburger.changeSize(event.target.id);
}

// Stuffing
stuffings.forEach((stuffing) => {
  stuffing.addEventListener('click', stuffingHandler);
});

function stuffingHandler(event) {
  if (event.target.checked) {
    hamburger.addStuffing(event.target.id);
    return;
  }

  if (hamburger.stuffing.length > 1) {
    hamburger.removeStuffing(event.target.id);
    return;
  }

  event.preventDefault();
  showError();
}

function showError() {
  const error = document.querySelector('.error');
  error.classList.add('show');
  setTimeout(() => {
    error.classList.remove('show');
  }, 3000);
}

// Topping
toppings.forEach((topping) => {
  topping.addEventListener('click', toppingHandler);
});

function toppingHandler(event) {
  if (event.target.checked == true) {
    hamburger.addTopping(event.target.id);
  } else {
    hamburger.removeTopping(event.target.id);
  }
}
