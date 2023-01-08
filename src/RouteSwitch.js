import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './routes/Home';
import Shop from './routes/Shop';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import strawberry from './images/strawberry.jpg'
import pineapple from './images/pineapple.jpg'
import papaya from './images/papaya.jpg'
import avocado from './images/avocado.jpg'
import uniqid from 'uniqid'

const fruits = [
    {name: 'Strawberry', image: strawberry, price: 200, id: uniqid()},
    {name: 'Pineapple', image: pineapple, price: 150, id: uniqid()},
    {name: 'Papaya', image: papaya, price: 100, id: uniqid()},
    {name: 'Avocado', image: avocado, price: 300, id: uniqid()},
 ];

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (id, qty) => {
        const addedFruit = fruits.filter(fruit => (
            id === fruit.id
        ));
        console.log(addedFruit);
        setCartItems([...cartItems, {...addedFruit, quantity: qty}]);
        console.log(cartItems);
    }
    return (
        <Routes>
            <Route path='/' element={<Home products={fruits} addToCart={addToCart}/>} />
            <Route path='/shop' element={<Shop cart={cartItems}/>} />
        </Routes>
    )
}

export default RouteSwitch;