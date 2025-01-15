import React, { createContext } from 'react'

import all_products from "../components/Product_Category/All_Products"

const ShopContext = createContext(null);

function ShopContext(props) {
const contextValue ={all_products};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContext