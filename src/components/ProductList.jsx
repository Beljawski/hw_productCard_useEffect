import ProductItem from "./ProductItem"

function ProductList(props){
    const {
        data,
        deleteProduct
    } = props
    return(
        <div>
            {data.map((product) => <ProductItem
                                        key={product.id}
                                        id={product.id}
                                        name = {product.name}
                                        price = {product.price}
                                        count = {product.count}
                                        deleteProduct = {deleteProduct}
                />)
            }
        </div>
    )
}
export default ProductList