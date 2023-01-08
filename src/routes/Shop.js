function Shop(props) {
    console.log(props.cart);
    return (
        <div>
            {props.cart.map(function (item) {
                return (
                <div key={item[0].id} className='cart-item'>
                    <div>{item[0].name}</div>
                    <img src={item[0].image} width="50" height="50"/>
                    <div className='cart-quantity'>{item.quantity}</div>
                </div>
            )})};
        </div>
    )
}

export default Shop;