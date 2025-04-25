
const getFromLoacalStorage = () => {

    const storedDataStringed = localStorage.getItem('cart');
    
    if (storedDataStringed) {
        const dataStored = JSON.parse(storedDataStringed);
        return dataStored;
    }
    return [];
}

const saveNewCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToLocalStorage = (id) => {

    const cart = getFromLoacalStorage();
    cart.push(id);
    // const newCart = [...cart, id];

    saveNewCartToLocalStorage(cart);
}

export {
    getFromLoacalStorage as getData,
    addItemToLocalStorage as addData
}