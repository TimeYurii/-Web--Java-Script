let isCatalogOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.getElementById('homeLink');
  const catalogLink = document.getElementById('catalogLink');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  // Обробники меню
  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadCategories();
  });

  catalogLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadCategories();
  });

  // Гамбургер: показ/приховування меню
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('menu-visible');
    });
  }

  // Якщо ширина ≥768 — прибрати клас мобільного меню
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      menu.classList.remove('menu-visible');
    }
  });

  loadHomePage();
});

function loadHomePage() {
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';
}

function loadCategories() {
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  fetch('./api/categories.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(category => {
      const categoryLink = document.createElement('a');
      categoryLink.href = '#';
      categoryLink.textContent = category.name;
      categoriesContainer.appendChild(categoryLink);

      categoryLink.addEventListener('click', function(event) {
        event.preventDefault();
        isCatalogOpen = true;
        loadCategory(category.name);
      });
    });

    const specialsLink = document.createElement('a');
    specialsLink.href = '#';
    specialsLink.textContent = 'Specials';
    categoriesContainer.appendChild(specialsLink);

    specialsLink.addEventListener('click', function(event) {
      event.preventDefault();
      isCatalogOpen = true;
      loadSpecials();
    });
  });
}

function loadCategory(categoryName) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  fetch(`./api/categories/${categoryName}.json`)
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;
        productDiv.appendChild(productImg);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
        productDiv.appendChild(productPrice);

        productsContainer.appendChild(productDiv);
      });
    });
}

function loadSpecials() {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  const categories = ['electronics', 'clothes', 'music'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  loadCategory(randomCategory);
}

function loadCatalog() {
  isCatalogOpen = true;
  const categories = ['electronics', 'clothes', 'music'];
  categories.forEach(category => {
    loadCategory(category);
  });
}
