export default function useCart(){

    const addToCart = (product) =>{
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const productItem = cart.some(item => item.id === product.id)
        const productForCart = {
            id: product.id,
            title: product.title,
            price: product.price
        }
        if(!productItem){
            cart.push(productForCart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }else{
            console.log('Товар уже добавлен')
        }
    }

    return{
        addToCart
    }
}