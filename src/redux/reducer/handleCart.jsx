//Reducer 

const cart =[];

const handleCart =(state=cart, action)=>{
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if the product Already exists
            const exist = state.find((x)=>x.id ===product.id);
            if(exist){
                //increase the quantity if existing
                return state.map((x)=>
                x.id === product.id ? {...x, qty:x.qty + 1}:x);
            } else{
                const product = action.payload;  
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELETEITEM":
            //check if the item exists if so delete it
            const exist1 = state.find((x)=> x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x)=>x.id !== exist1.id)
            }else{
                //if the item is more than 1 item then delete  1 from the list
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty - 1} : x
                );
            }
            break;
    
        default:
           return state
            break;
    }
}

export default handleCart;