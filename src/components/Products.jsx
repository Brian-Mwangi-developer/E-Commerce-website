import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ....
            </>
        )
    }

    const filterProduct = (cat)=>{
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center justify-center">
                    <button className="bg-gray-200 hover:bg-black focus:bg-black focus:outline-none text-black hover:text-white focus:text-white w-auto h-8 rounded-md border-gray-400 border  px-3"onClick={(e)=> setFilter(data)}>All </button>
                    <button className="bg-gray-200 hover:bg-black focus:bg-black focus:outline-none text-black hover:text-white focus:text-white w-auto h-8 rounded-md border-gray-400 border ml-2 px-3"onClick={()=>filterProduct("men's clothing")}>Men's Clothing </button>
                    <button className="bg-gray-200 hover:bg-black focus:bg-black focus:outline-none text-black hover:text-white focus:text-white w-auto h-8 rounded-md border-gray-400 border ml-2 px-3" onClick={()=>filterProduct("women's clothing")}>Women's Clothing </button>
                    <button className="bg-gray-200 hover:bg-black focus:bg-black focus:outline-none text-black hover:text-white focus:text-white w-auto h-8 rounded-md border-gray-400 border ml-2 px-3"onClick={()=>filterProduct("jewelery")}>Jewellery </button>
                    <button className="bg-gray-200 hover:bg-black focus:bg-black focus:outline-none text-black hover:text-white focus:text-white w-auto h-8 rounded-md border-gray-400 border ml-2 px-3"onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="flex flex-wrap">
                    {filter.map((product) => (
                        <div className="flex ml-5 p-2" key={product.id}>
                            <div className="card w-60 bg-base-100 shadow-xl">
                                <figure><img src={product.image} alt="Image" className="h-[250px]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.title.substring(0,12)}</h2>
                                    <p>Ksh {product.price}</p>
                                    <div className="card-actions justify-end">
                                        <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </>
        )
    }
    return (
        <div className='mt-[100px] py-5 mx-10'>
            <div className=''>
                <div className='w-full mb-5 '>
                    <h1 className='font-extrabold  text-2xl text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className='text-center py-5'>
                {loading ? <Loading /> : <ShowProducts />}

            </div>

        </div>
    )
}

export default Products