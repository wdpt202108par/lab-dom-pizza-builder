// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce')
    
  if (state.whiteSauce) {
    sauce.className = 'sauce sauce-white';
  } else {
    sauce.className = 'sauce';
  };
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust')
    
  if (state.glutenFreeCrust) {
    crust.className = 'crust crust-gluten-free';
  } else {
    crust.className = 'crust';
  };
}

function renderButtons() {
  let btnPepperoni = document.querySelector('.btn.btn-pepperoni');
  let btnMushrooms = document.querySelector('.btn.btn-mushrooms');
  let btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
  let btnWhiteSauce = document.querySelector('.btn.btn-sauce');
  let btnGFCrust = document.querySelector('.btn.btn-crust');

  state.pepperoni ? btnPepperoni.classList.add("active") : btnPepperoni.classList.remove("active");
  state.mushrooms ? btnMushrooms.classList.add("active") : btnMushrooms.classList.remove("active");
  state.greenPeppers ? btnGreenPeppers.classList.add("active") : btnGreenPeppers.classList.remove("active");
  state.whiteSauce ? btnWhiteSauce.classList.add("active") : btnWhiteSauce.classList.remove("active");
  state.glutenFreeCrust ? btnGFCrust.classList.add("active") : btnGFCrust.classList.remove("active");
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let sum = basePrice;
 
  state.pepperoni ? sum += ingredients.pepperoni.price : sum = sum; 
  state.mushrooms ? sum += ingredients.mushrooms.price : sum = sum;
  state.greenPeppers ? sum += ingredients.greenPeppers.price : sum = sum;
  state.whiteSauce ? sum += ingredients.whiteSauce.price : sum = sum;
  state.glutenFreeCrust ? sum += ingredients.glutenFreeCrust.price : sum = sum;
  
  document.querySelector('.price strong').textContent = sum;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
