let inputProductIdEl = document.querySelector('.product-id');
let inputTitleEl = document.querySelector('.title');
let inputPriceEl = document.querySelector('.price');
let inputDescriptionEl = document.querySelector('.description');
let inputCategoryEl = document.querySelector('.category-id');
let inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const buttonDeleteEl = document.querySelector('.button-delete');
const buttonSearchEl = document.querySelector('.button-search');
const buttonEditEl = document.querySelector('.button-edit');

const BASE_URL = "https://api.escuelajs.co/";
const endpoint = "api/v1/products";
const url = BASE_URL + endpoint;

async function POST(newObj) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj),
        });

        const data = await response.json();
        console.log(`Product created with ID: ${data.id}`);
        return data.id;
    } catch (error) {
        console.error("Error during POST request:", error);
    }
}

async function PUT(id, product) {
    const res = await fetch(`${BASE_URL}${endpoint}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
}

const GET= async (id) => {
    const res = await fetch (`${BASE_URL}${endpoint}/${id}`, {
        method: "GET", 
        headers: {
            accept:"application/json",
        },
    });
    const data = await res.json();
    return data;
};

const DELETE = async (productId) => {
    const deleteUrl = `${BASE_URL}${endpoint}/${productId}`;
    await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
}

let id = "";

buttonSearchEl.addEventListener('click', async (e) => {
    e.preventDefault();
    id = inputProductIdEl.value;
    
    const product = await GET(id);
    console.log (product);
    
    inputTitleEl.value = product.title;
    inputPriceEl.value = product.price;
    inputDescriptionEl.value = product.description;
    inputCategoryEl.value = product.category.id;
    inputImagesEl.value = product.images.join('').replace(/["[\]]/g, '');
    
});

const updatedProduct = {};

buttonSendEl.addEventListener('click', async (e) => {
    e.preventDefault();

    updatedProduct.title = inputTitleEl.value;
    updatedProduct.price= inputPriceEl.value;
    updatedProduct.description= inputDescriptionEl.value;
    updatedProduct.categoryId= inputCategoryEl.value;
    updatedProduct.images= [inputImagesEl.value];

    console.log ("sono la post", await POST(updatedProduct));
});

buttonEditEl.addEventListener('click', async (e) => {
    e.preventDefault();
    id = inputProductIdEl.value;
    updatedProduct.title = inputTitleEl.value;
    updatedProduct.price= inputPriceEl.value;
    updatedProduct.description= inputDescriptionEl.value;
    updatedProduct.categoryId= inputCategoryEl.value;
    updatedProduct.images= [inputImagesEl.value];

    const editedProduct = await PUT(id, updatedProduct);
    console.log("Edited product:", editedProduct);

})

buttonDeleteEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const productId = inputProductIdEl.value;
    if (!productId || isNaN(productId)) {
        alert("ID del prodotto non valido.");
        return;
    }
    await DELETE(productId);
    alert("Prodotto eliminato.");
});
