function Shop(props) {
    console.log(props.cart);
    let total = 0;
    return (
        <div class='shopping-cart'>
            {props.cart.map(function (item) {
                total += Number(item.quantity * item.price);
                return (
                    <div>
                        <div key={item.id} className='cart-item'>
                            <h4>{item.name}</h4>
                            <img src={item.image} width="50" height="50"/>
                            <div className='cart-quantity'>{item.quantity}</div>
                        </div>
                    </div>
            )})}
            <h4>Total {total}</h4>
        </div>
    )
}

export default Shop;