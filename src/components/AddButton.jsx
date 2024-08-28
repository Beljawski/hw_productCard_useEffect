function AddButton({addProduct}) {
function buttonHandle() {
    let input = prompt("Please enter the product details in the format: 'name, price, count'.")
    if (input){
        addProduct(input)
      }
}
    return(
        <div>
            <button className="add-product" onClick={buttonHandle}>
            Add new Product
            </button>
        </div>
    )
}
export default AddButton         