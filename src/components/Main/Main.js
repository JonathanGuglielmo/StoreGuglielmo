import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../NavBar/NavBar'
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';

// import ItemCount from '../ItemCount/ItemCount';
// import CantidadClick from '../Clicks/CantidadClick';
// import Probando from '../ui/Probando';

const Main = () => {

    // Carrito de compras !! 
    // Muestra la cantidad de articulos que se agregaron
    const [items,setItems] = useState(0); 

    // Tarea
    const [result,setResult] = useState(null)

    // State para mostrar y/o ocultar los articulos
    const [open,setOpen] = useState(true)

    // Funcion que muestra y/o oculta los articulos
    const toggleMenu = () => {
        setOpen(!open)
    }

    // Esto es una funcion que me va a agregar los articulos en el cardWidget 
    // Lo voy a utilizar en el componente Item.js en el boton agregar 
    const addToCardWidget = (articles) => {
        setItems(items + articles)
    }

    // tira console.log cada vez que carrito se cambia
    useEffect(() => {
        console.log("se agrego un item")
    }, [items])

    const tarea = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve([
                { id : 0 , nombre :"Monitores", stock:5, img: img1},
                { id : 1 , nombre :"Teclados", stock:4, img: img2},
                { id : 2 , nombre :"Auriculares", stock:1, img: img3},
                { id : 3 , nombre :"Mouse", stock:10, img: img4},
            ])
        }, 3000);
    })

    useEffect(() => {
        
        if(!result){
            tarea.then((res,err) => {
                if (err) console.log(err)
                setResult(res)
            }).catch((error) => {
                console.log(error)
            }).finally(()=> console.log("Finalizado"))
            
        }
        console.log(result)
    }, [result])


    return (
        <div className="container-fluid p-2">
            <Navbar
            items={items}

            toggleMenu={toggleMenu}
            //es el state que controla cuantos articulos tengo actualmente en el carrito
            carrito={items} 
            />
            {/* Esto son la lista de los articulos , recuerda que depende de la condicion "open" para mostrar o ocultar se */}
            {open && <ItemListContainer
                        items={result}
                       // este funcion addToCardWidget esta declarado en la linea 23 y lo estoy llevando al Item.js para utilizar lo 
                    addToCardWidget={addToCardWidget} 
                    /> }
            {/* Este componente cuenta los clicks */}
            {/* <CantidadClick/> */}
            <ItemListContainer setItems={setItems}/>
        </div>
    )
}

export default Main