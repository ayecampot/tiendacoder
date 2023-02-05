const CartWidget = ({cantCarrito}) => {
    return (
        <>
             <i className="bi bi-cart-fill mx-1 font-color px-2"></i> 
            <p class="mb-0">{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
