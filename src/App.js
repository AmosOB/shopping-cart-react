import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
   useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if(storedCart){
      setCart(storedCart);
    }
   }, []);

   const addToCart = () => {
    const newItem = {
      imagePath: image_path[0],
      title: image_path[1],
      description: image_path[2]
    };
  
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const image_path =[
    'https://media.istockphoto.com/id/637912692/photo/nairobi-cityscape-capital-city-of-kenya.jpg?s=1024x1024&w=is&k=20&c=JXAFoFikyPmfHK7YxHT4pzykP2ydqXdBE0xb870pagY=',
    'Nairobi',
    'Modern Nairobi cityscape - capital city of Kenya, East Africa'
  ];
  
  return (
    <div className="container">
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className="card">
            <img src={image_path[0]} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{image_path[1]}</h5>
              <p className="card-text">{image_path[2]}</p>
              <a className="btn btn-primary" onClick={addToCart}>Add to cart</a>
              <Link to={`/shopping-cart`}>
                <button type="button" className="btn btn-primary position-relative float-end">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
              </Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
