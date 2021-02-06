// CREATE OBJECTS
function Item(name, price) {
  this.name = name.toUpperCase();
  this.price = Number(price).toFixed(2);
}

function UI() {}
// =======================================

// CREATE EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getTotal());
document.addEventListener('DOMContentLoaded', displayItems());
document.getElementById('form-list').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const name2 = name.toUpperCase();
  const price = document.getElementById('price').value;
  const price2 = Number(price).toFixed(2)
  const item = new Item(name, price);
  const ui = new UI();
  if (name === '' || price === '') {
    ui.showAlert('Please fill in the required fields', 'alert');
  } else {
    const list = document.getElementById('item-list');
    const row = document.createElement('tr');
    row.innerHTML += `
    <td>${name2}</td>
    <td>£${price2}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
    ui.showAlert('Item added', 'alert');
    clearInputs();
    storeItems(item);
  }
  
  getTotal();
});

document.getElementById('item-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Item deleted', 'alert');
  ui.deleteItemFromStorage();
  e.preventDefault();
  getTotal();
})

// ============================================

// CREATE PROTOYPES
// ALERTS
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.getElementById('form');
  container.insertBefore(div, form);
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 1500);
};
// DELETE ITEM
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
};
// DELETE FROM STORAGE
UI.prototype.deleteItemFromStorage = function(price) {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.forEach(function(item, index) {
    items.splice(index, 1);
  });
  localStorage.setItem('items', JSON.stringify(items));
};

// ===========================================
// CREATE FUNCTIONS
// LOCAL STORAGE
function storeItems(item) {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
}
function clearInputs() {
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
}
// GET TOTALS
function getTotal() {
  let prices = JSON.parse(localStorage.getItem('items'));

  if (prices === null) {
    document.getElementById('total').innerHTML = `TOTAL: £ 0`;
  } else {
    let total = 0;
    for (i = 0; i < prices.length; i++) {
      total += parseFloat(prices[i].price);
    }
    final = total.toFixed(2);
    document.getElementById('total').innerHTML = `TOTAL: £${final}`;
  }
}
// DISPLAY ITEMS IN STORAGE
function displayItems() {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.forEach(function(item) {
    const list = document.getElementById('item-list');
    const row = document.createElement('tr');
    row.innerHTML += `
    <td>${item.name}</td>
    <td>£${item.price}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  });
}


// let numbers = [1,2,3,4,5]
// let numbers2 = [2,2,2,2]

// function sum(numbers){
//   let output = 0;
//   numbers.forEach(function(number){
//   output += number;
// })
// console.log(output)
// };

// sum(numbers2)
