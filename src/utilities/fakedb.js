// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[ id ];
    if (!quantity) {
        shoppingCart[ id ] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[ id ] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    
    if (id in shoppingCart) {
        console.log(id, shoppingCart[ id ]);
        delete shoppingCart[ id ];

        console.log(shoppingCart);

        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         // delete shoppingCart[id];
//         const newCart = shoppingCart.splice(id - 1, 1);

//         console.log(newCart);

//         localStorage.setItem('shopping-cart', JSON.stringify(newCart));
//     }
// }

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}