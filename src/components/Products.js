import React from "react"

function Product(props){
    console.log(props)
    return(
        <div className="App">
          <h1>{props.product.name}</h1>

        </div>
      );
}
export default Product