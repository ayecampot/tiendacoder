const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <i className="bi bi-cart-fill mx-1 font-color px-2"></i>
            <p className="mt-3 font-color mr-3" >{cantCarrito}</p>
        </>
    );
}

export default CartWidget;