axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        let productContainer = document.getElementById('productContainer');
        let responseData = response.data;
        responseData.forEach((product) => {

            // console.log(product);

            let productItem = document.createElement('div');
            productItem.classList.add('product-item');

            let heading = document.createElement('h2');
            heading.innerHTML = product.category;
            heading.classList.add('heading');
            // let des = product.description;

            // Image
            let productImg = document.createElement('img');
            productImg.src = product.image;
            productImg.alt = product.title;

            // title
            let title = document.createElement('h2');
            title.innerHTML = truncateData(product.title);
            title.classList.add('title');

            // Price
            let price = document.createElement('p');
            price.innerHTML = '$ ' + product.price;
            price.classList.add('price');

            // Buttons
            let btnflex = document.createElement('div');
            btnflex.classList.add('btn-flex');

            let btn1 = document.createElement('button');
            btn1.innerHTML = 'Show Detail';
            btn1.classList.add('detail');

            btn1.addEventListener('click', () => {
                productDetails(product);
            })

            let btn2 = document.createElement('button');
            btn2.innerHTML = 'Add to Cart';
            btn2.classList.add('cart-btn');

            // Append List
            productContainer.append(productItem);
            productItem.append(heading);
            productItem.append(productImg);
            productItem.append(title);
            productItem.append(price);
            productItem.append(btnflex);
            btnflex.append(btn1);
            btnflex.append(btn2);



        })
    })
    .catch((error) => {
        console.error('Error Occured: ', error);
    })





// //////////////   Functions
function truncateData(data) {
    return data.length > 20 ? data.slice(0, 20) + '...' : data;
}





function productDetails(product) {
    let productDetailDiv = document.createElement('div');
    productDetailDiv.classList.add('ProdDetailsDiv');

    let leftRightParent = document.createElement('div');
    leftRightParent.classList.add('leftRightParent');

    // left div
    let leftSide = document.createElement('div');
    leftSide.classList.add('left-side');

    // Title
    let itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.innerHTML = product.title;


    // image
    let itemImg = document.createElement('img');
    itemImg.classList.add('item-img')
    itemImg.src = product.image;
    itemImg.alt = product.title;

    // Price
    let itemPrice = document.createElement('p');
    itemPrice.classList.add('item-Price');
    itemPrice.innerHTML = '$ ' + product.price;

    // Right div
    let rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    // Description on right side
    let itemDes = document.createElement('p');
    itemDes.classList.add('item-des');
    itemDes.innerHTML = product.description;


    // Close Button
    let remBtn = document.createElement('button');
    remBtn.classList.add('rmvBtn');
    remBtn.innerText = ' X ';


    // Append Nodes
    document.body.appendChild(productDetailDiv);
    productDetailDiv.append(leftRightParent);

    leftRightParent.append(leftSide);
    leftSide.append(itemTitle);
    leftSide.append(itemImg);
    leftSide.append(itemPrice);

    leftRightParent.append(rightSide);
    rightSide.append(itemDes);

    productDetailDiv.append(remBtn);

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.ProdDetailsDiv')) {
            console.log('y');
            e.preventDefault();

        }
        else {
            remBtn.addEventListener('click', () => {
                productDetailDiv.parentNode.removeChild(productDetailDiv);
                console.log('z');
            })
        }
    })

}















