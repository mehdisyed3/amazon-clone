import React, { useState } from 'react'

const Context = React.createContext()


function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user , setUser] = useState('')
  const [userObj,setUserObj] = useState([])

  

  
  const addToCart = (newItem) => {
    setCart([...cart, newItem])
  }

  const removeItem = (id) => {

    let index = cart.findIndex(item => item.id === id)

    const final = cart.filter((item, i) => i !== index)

    setCart(final)

  }


  return (
    <Context.Provider value={{ cart, setCart, addToCart, removeItem, setUser, user, setUserObj,userObj }} >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
