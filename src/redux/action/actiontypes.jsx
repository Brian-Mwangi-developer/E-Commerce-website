//action types


//For add items to the Cart 
export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
// For Delete items from the Cart
export const deleteCart =(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}