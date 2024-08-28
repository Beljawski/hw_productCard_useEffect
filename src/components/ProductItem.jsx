import { useEffect, useState } from "react"

function ProductItem(props) {
    const {
        id,
        name,
        price,
        count,
        deleteProduct
    } = props
    const defaultCount = parseInt(localStorage.getItem(`count_${id}`)) || count
    const [countState, setCountState] = useState (defaultCount)
    useEffect(()=>{
        localStorage.setItem(`count_${id}`, countState)
    },[countState, id])
    function increment() {
        setCountState(countState + 1)
    }

    function decrement() {
        if( countState > 1 ){
            setCountState (countState - 1)}
            else if (countState === 1){
                deleteProduct(id)
            }
    }

    function hanldeDiv(){
        deleteProduct(id)
    }
    return(
        <div className="product-item" onDoubleClick={hanldeDiv}>
            <p className="product-item__name">{name}</p>
            <p className="price">Price: {price}</p>
            <div className="count-wrapper">
            <button className="increment" onClick={increment}>+</button>
            <p className="count">{countState}</p>
            <button className="decrement" onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default ProductItem