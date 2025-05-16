import React from 'react'

const ProductTable = ({products}) => {

  return (
    <div>
        <h3>No of Items: {products.length}</h3>

        <table>
            <thead>
                <tr>
                    <td>No. </td>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) => {
                        return(
                            <tr key = {index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default ProductTable