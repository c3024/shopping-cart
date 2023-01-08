import { useState } from "react";

const Fruit = (props) => {
    const [quantity, setQuantity] = useState(0);
    const handleChange = (e) => {
        setQuantity(e.target.value);
        //console.log(`Entered value is ${quantity}`);
    }
    return (
        <div className="fruit">
            <h3>{props.name}</h3>
            <img src={props.image} width="300" height="300" />
            <h4>{props.price} Rs./kg</h4>
            <div className="fruit-quantity">
                <input type="number" min='0' max='5' onChange={handleChange} />
                <button onClick={() => props.addToCart(props.id, quantity)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Fruit;