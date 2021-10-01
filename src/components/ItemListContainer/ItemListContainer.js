import React from "react";
import Item from "../Item/Item";
import img1 from '.src/img/img1.png';
import img2 from '.src/img/img2.png';
import img3 from '.src/img/img3.png';
import img4 from '.src/img/img4.png';
import img5 from '.src/img/img5.png';
import img6 from '.src/img/img6.png';
import img7 from '.src/img/img7.png';
import img8 from '.src/img/img8.png';

const ItemListContainer = ({addToCardWidget}) => {

  // addToCardWidget => es la funcion que traje desde main para parasar al <Item/>

    const items = [
    
        { id : 0 , nombre :"Monitores", stock:5, img: <img src={img1} />},
        { id : 1 , nombre :"Teclados", stock:4, img: <img src={img2} />},
        { id : 2 , nombre :"Auriculares", stock:1, img: <img src={img3} />},
        { id : 3 , nombre :"Mouse", stock:10, img: <img src={img4} />},
        { id : 4 , nombre :"Gabinetes", stock:20, img: <img src={img5} />},
        { id : 5 , nombre :"Memoria Ram", stock:30, img: <img src={img6} />},
        { id : 6 , nombre :"Motherboard", stock:3, img: <img src={img7} />},
        { id : 7 , nombre :"Placa de Video", stock:6, img: <img src={img8} />},
    
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