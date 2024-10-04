const Cart = [];

const handleCart = (state = Cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDPRODUCT":
            const Exist = state.find((item) => item.id === product.id);
            if (Exist) {
                return state.map((item) => 
                    // Increasing QTY of an item in CART
                    item.id === product.id ? {...item, qty: item.qty +1} : item
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELPRODUCT":
            const Exist1 = state.find((item) => item.id === product.id);
            if (Exist1.qty === 1) {
                return state.filter((item) => item.id !== Exist1.id);
            } else {
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty - 1} : item
                );
            }

        default:
            return state;
    }
};

export default handleCart;