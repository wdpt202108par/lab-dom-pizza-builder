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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const $sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    $sauce.classList.add('sauce-white');
  } else {
    $sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const $crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    $crust.classList.add('crust-gluten-free');
  } else {
    $crust.classList.remove('crust-gluten-free');
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  //
  // Refactored to:
  //
  // // css-class <=> state-name mapping
  // const mapClassState = {
  //   'btn-pepperoni': 'pepperoni',
  //   'btn-mushrooms': 'mushrooms',
  //   'btn-green-peppers': 'greenPeppers',
  //   'btn-sauce': 'whiteSauce',
  //   'btn-crust': 'glutenFreeCrust'
  // }

  // Object.keys(mapClassState).forEach(classname => {
  //   const $btn = document.querySelector(`.${classname}`)

  //   const stateName = mapClassState[classname];
  //   if (state[stateName]) {
  //     $btn.classList.add('active')
  //   } else {
  //     $btn.classList.remove('active')
  //   }
  // })

  const $btnPepperoni = document.querySelector('.btn-pepperoni')
  if (state.pepperoni) {
    $btnPepperoni.classList.add('active')
  } else {
    $btnPepperoni.classList.remove('active')
  }
  
  const $btnMushrooms = document.querySelector('.btn-mushrooms')
  if (state.mushrooms) {
    $btnMushrooms.classList.add('active')
  } else {
    $btnMushrooms.classList.remove('active')
  }

  const $btnGreenPeppers = document.querySelector('.btn-green-peppers')
  if (state.greenPeppers) {
    $btnGreenPeppers.classList.add('active')
  } else {
    $btnGreenPeppers.classList.remove('active')
  }

  const $btnWhiteSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    $btnWhiteSauce.classList.add('active')
  } else {
    $btnWhiteSauce.classList.remove('active')
  }

  const $btnCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    $btnCrust.classList.add('active')
  } else {
    $btnCrust.classList.remove('active')
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  //
  // a helper function to compute the total price
  //

  function total() {
    // Create a list of active ingredients names (the ones for those state is true)
    const topings = Object.keys(state).filter(name => state[name] === true);

    // Reduce to a price using `ingredients` object
    return topings.reduce(function (acc, topingName) {
      const topingPrice = ingredients[topingName].price;

      return acc + topingPrice;
    }, basePrice);
  }
  
  //
  // Empty the <ul> then append a <li> for each chosen ingredient
  //

  const $ul = document.querySelector('.panel.price ul')
  $ul.innerHTML = '' // empty <ul>

  Object.keys(state).forEach(function (ingredientName, i) {
    if (state[ingredientName] === true) {
      // $li.style.textDecoration = 'initial';
      const $li = document.createElement('li')
      $li.innerHTML = ingredients[ingredientName].name

      $ul.appendChild($li)
    }
  })

  //
  // update the total price
  //

  const price = total();
  document.querySelector('.panel.price strong').textContent = `${price}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}