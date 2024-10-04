
// Adding to Cart
export const addItem = (product) => {
    return {
        type : "ADDPRODUCT",
        payload : product
    }
};

// Deleting from Cart
export const delItem = (product) => {
    return {
        type : "DELPRODUCT",
        payload : product
    }
};