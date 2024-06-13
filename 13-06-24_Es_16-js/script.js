const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const buttonDeleteEl = document.querySelector('.button-delete');

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
        if (!response.ok) {
            throw new Error(`Hai commesso un errore nell'HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Product created with ID: ${data.id}`);
        return data.id;
    } catch (error) {
        console.error("Error during POST request:", error);
    }
}

buttonSendEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const objForm = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    }
    const productId = await POST(objForm);
    if (productId) {
        const updatedObj = {
            title: inputTitleEl.value,  
            price: inputPriceEl.value,
            description: inputDescriptionEl.value,  
            categoryId: inputCategoryEl.value,
            images: [inputImagesEl.value]
        };
        await PUT(productId, updatedObj);
        const updatedProduct = await GET(productId);
        console.log("Updated product:", updatedProduct);
    }
});

async function PUT(productId, updatedObj) {
    const putUrl = `${BASE_URL}${endpoint}/${productId}`;
    const response = await fetch(putUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
    });
    return response.json();
}

async function GET(productId) {
    const getUrl = `${BASE_URL}${endpoint}/${productId}`;
    const response = await fetch(getUrl);
    return response.json();
}

const DELETE = async (productId) => {
    const deleteUrl = `${BASE_URL}${endpoint}/${productId}`;
    await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
}

buttonDeleteEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const productId = prompt("Inserisci l'ID del prodotto da eliminare:");
    if (!productId || isNaN(productId)) {
        alert("ID del prodotto non valido.");
        console.log('ID non valido');
        return;
    }
    console.log('ID eliminato');
    await DELETE(productId);
});
