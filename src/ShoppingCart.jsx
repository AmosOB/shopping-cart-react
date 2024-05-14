import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if(storedCart){
        setCart(storedCart);
        }
    }, []);
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                {cart.map((item, index) => (
                    <div key={index} className="card my-3 ">
                        <img src={item.imagePath} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart