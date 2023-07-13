import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/actiontypes';
import { NavLink, useParams } from 'react-router-dom'


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    const dispatch = useDispatch();

    const addProduct =(product)=>{
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (componentMounted) {
                setProduct(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ....
            </>
        )
    }

    const Showproduct = () => {
        return (
            <div className='mt-28 mx-6 flex'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={product.image} className='' alt="Product Image" /></figure>
                    <div className="card-body">
                        <h1 className='font-serif'>{product.category}</h1>
                        <h2 className="card-title font-serif text-2xl uppercase font-bold">{product.title}</h2>
                        <p className='font-'>{product.description}</p>
                        <p className='text-xl'> Rating {product.rating && product.rating.rate}</p>
                        <i className='fa fa-star'></i>
                        <span className='font-extrabold text-xl'>KSh {product.price}</span>
                        <div className="card-actions justify-end">
                            <NavLink to='/cart' className="btn bg-gray-800 text-white focus:text-black hover:text-black  focus:bg-gray-400" onClick={()=> addProduct(product)}>Add to Cart</NavLink>
                            <NavLink to='/cart' className="btn bg-gray-400 text-black focus:text-white hover:text-white  focus:bg-black hover:bg-gray-800">Go to Cart</NavLink>
                        </div>
                    </div>
                </div>

            </div>

        )

    }

    return (

        <div>
            {loading ? <Loading /> : <Showproduct />}
        </div>

    )
}
export default Product