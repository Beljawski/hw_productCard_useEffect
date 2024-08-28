import { useEffect, useState } from "react";
import AddButton from "./components/AddButton";
import ProductList from "./components/ProductList";

function App() {
    const data = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 1}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
        ]
    const defaultState = JSON.parse(localStorage.getItem("products")) ?? data
    const [product, setProduct] = useState(defaultState)

    const addProduct = (promptInput) => {
        const inputArray = promptInput.split(', ');
    
        if (inputArray.length !== 3) {
            alert("Please enter the product details in the format: 'name, price, count'.");
            return;
        }

        const [name, priceStr, countStr] = inputArray;
    
        const price = parseFloat(priceStr.trim());
        const count = parseInt(countStr.trim(), 10);
    
        if (isNaN(price) || isNaN(count)) {
            alert("Please enter valid numbers for price and count.");
            return;
        }
    
        const newProduct = {
            id: Date.now(),
            name: name.trim(),
            price: price,
            count: count
        };
    
     
        setProduct((prevProducts) => [newProduct, ...prevProducts]);
    }
    function deleteProduct(id) {
        const filteredProducts = product.filter((elem) => id !== elem.id)
        setProduct(filteredProducts)
    }
    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(product))
    },[product])
    return(
    <div className="product-app">
        <AddButton addProduct={addProduct}/>
        <ProductList
            data = {product}
            deleteProduct = {deleteProduct}
        />
    </div>
    )
}

export default App;