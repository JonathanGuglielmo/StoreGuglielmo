import React from "react";
import Item from "../Item/Item";

const ItemListContainer = ({addToCardWidget}) => {

  // addToCardWidget => es la funcion que traje desde main para parasar al <Item/>

    const items = [
    
        { id : 0 , nombre :"salchipapa", stock:5, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 1 , nombre :"hamburgesa", stock:4, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 2 , nombre :"pizza",      stock:1, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 3 , nombre :"salchipapa", stock:10, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 4 , nombre :"salchipapa", stock:20, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 5 , nombre :"salchipapa", stock:30, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 6 , nombre :"salchipapa", stock:3, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        { id : 7 , nombre :"salchipapa", stock:6, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"}
    
    ]
  return (
    <div className="container p-3 my-5">

        {/* aqui estoy recorriendo el array y estoy generando <Item/> "componente" dinamicamente ! */}
        
        {items.map((item => 
            ( <Item 
                key={item.id} 
                nombre={item.nombre}
                stock={item.stock}
                img={item.img}
                addToCardWidget={addToCardWidget}
              /> ) 
            
            ))}
    </div>
  );
};

export default ItemListContainer;