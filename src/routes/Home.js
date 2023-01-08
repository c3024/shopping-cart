import Fruit from '../components/Fruit'

function Home(props) {
    return (
        <div className='fruits-catalogue'>
            {props.products.map(product => (
                <Fruit key={product.id} name={product.name} image={product.image} price={product.price}
                        id={product.id} addToCart={props.addToCart}/>
            ))}
            {/* 
            <Fruit name="Pineapple" image={pineapple} price="150"/>
            <Fruit name="Papaya" image={papaya} price="100"/>
            <Fruit name="Avocado" image={avocado} price="300"/> */}
        </div>
    )
}

export default Home;