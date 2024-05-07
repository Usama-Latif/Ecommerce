axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        var products = response.data;
        var productContainer = document.getElementById('productContainer');

        products.forEach((product) => {
            productContainer.innerHTML += productItem(product.category, product.image, product.title, product.price);
        })

    })
    .catch((error) => {
        console.error('Error Happpening');
    })



// ///////////////  Functions
function productItem(category, image, title, price) {

    return `
            <div class= "product-item">
            <h2 class="heading text-center">${category}</h2>
            <img src="${image}" alt="${title}">
            <h2 class="title">${truncateData(title)}</h2>
            <p class="price"> Price $${price}</p>
            <div class="btn-flex">
            <button class="detail" id="dd">Show Detail</button>
            <button class="cart-btn"> Add to Cart </button>
            </div>
            </div>
            `;
}

function truncateData(data) {
    return data.length > 20 ? data.slice(0, 20) + '...' : data;
}
