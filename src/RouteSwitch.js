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
        console.log(cartItems);
        let addedFruit = fruits.filter((fruit) => (
            id === fruit.id
        ))
        //console.log(addedFruit);
        addedFruit = Object.assign({}, addedFruit[0], {quantity: Number(qty)});
        //console.log(addedFruit);
        let bool = false;
        let updatedCartItems = cartItems.map((fruit) => {
            if (fruit.id === addedFruit.id) {
                fruit.quantity = Number(fruit.quantity) + Number(qty);
                bool = true;
            }
            return fruit;
        });
        if (!bool) {
            updatedCartItems = [...updatedCartItems, addedFruit];
        }
        setCartItems(updatedCartItems);


        // const updatedCart = cartItems.map((fruit) => {
        //     if (id === fruit.id) {
        //         console.log(fruit);
        //         return fruit.quantity += qty;
        //     }
        //     else {
        //         return fruit;
        //     }
        // });
        // console.log(updatedCart);
        /* if (addedFruit.length === 0) {
            addedFruit = fruits.filter((fruit) => (
                id === fruit.id
            ))
            addedFruit[0] = {...addedFruit[0], quantity: qty};
        } else {
            addedFruit[0].quantity += qty;
        } */
        // setCartItems([...cartItems, updatedCart[0]]);
        // if (cartItems.includes(addedFruit[0])) {
        //     const prevQuantity = cartItems.filter(fruit => (
        //         addedFruit[0].id === fruit.id
        //     ));
        //     console.log(prevQuantity);
        //     addedFruit[0].quantity = prevQuantity + qty;
        //     setCartItems([...cartItems, addedFruit[0]]);
        // } else {
        //     addedFruit[0].quantity = qty;
        //     setCartItems([...cartItems, addedFruit[0]]);
        // }
    }
    return (
        <Routes>
            <Route path='/' element={<Home products={fruits} addToCart={addToCart}/>} />
            <Route path='/shop' element={<Shop cart={cartItems}/>} />
        </Routes>
    )
}

export default RouteSwitch;