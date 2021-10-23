import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount';
// import CantidadClick from '../Clicks/CantidadClick'

const Main = () => {

    // Carrito de compras !! 
    // Muestra la cantidad de articulos que se agregaron
    const [carrito,setCarrito] = useState(0); 

    // State para mostrar y/o ocultar los articulos
    const [open,setOpen] = useState(true)

    // Funcion que muestra y/o oculta los articulos
    const toggleMenu = () => {
        setOpen(!open)
    }

    // Esto es una funcion que me va a agregar los articulos en el cardWidget 
    // Lo voy a utilizar en el componente Item.js en el boton agregar 
    const addToCardWidget = (articles) => {
        setCarrito(carrito + articles)
    }

    // tira console.log cada vez que carrito se cambia
    useEffect(() => {
       console.log("se agrego un item")
    }, [carrito])

    return (
        <div className="container-fluid p-2">
            <Navbar

            toggleMenu={toggleMenu}
            //es el state que controla cuantos articulos tengo actualmente en el carrito
            carrito={carrito} 
            />
            {/* Esto son la lista de los articulos , recuerda que depende de la condicion "open" para mostrar o ocultar se */}
            {open && <ItemListContainer
                       // este funcion addToCardWidget esta declarado en la linea 23 y lo estoy llevando al Item.js para utilizar lo 
                      addToCardWidget={addToCardWidget} 
                      /> }
            {/* Este componente cuenta los clicks */}
            {/* <CantidadClick/> */}
            <ItemCount/>
        </div>
    )
}

export default Main