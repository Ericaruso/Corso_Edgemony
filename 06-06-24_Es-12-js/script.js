fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

const containerEl = document.querySelector(".container");

data.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const title = document.createElement('h2');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;

    const description = document.createElement('p');
    description.textContent = product.description;

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title; 

    productCard.appendChild(image); 
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(description);

    containerEl.appendChild(productCard);
    });
})

.catch(error => {
    console.error('Errore:', error);
});
