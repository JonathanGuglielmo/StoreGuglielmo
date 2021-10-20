import React from "react";
import Item from "../Item/Item";
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/img5.png';
import img6 from '../../img/img6.png';
import img7 from '../../img/img7.png';
import img8 from '../../img/img8.png';

const ItemListContainer = ({addToCardWidget}) => {

  // addToCardWidget => es la funcion que traje desde main para parasar al <Item/>

    const items = [
    
        { id : 0 , nombre :"Monitores", stock:5, img: img1},
        { id : 1 , nombre :"Teclados", stock:4, img: img2},
        { id : 2 , nombre :"Auriculares", stock:1, img: img3},
        { id : 3 , nombre :"Mouse", stock:10, img: img4},
        { id : 4 , nombre :"Gabinetes", stock:20, img: img5},
        { id : 5 , nombre :"Memoria Ram", stock:30, img: img6},
        { id : 6 , nombre :"Motherboard", stock:3, img: img7},
        { id : 7 , nombre :"Placa de Video", stock:6, img: img8},
    
    ]
  return (
    <div className="row">
    <div className="col-sm-6">

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
    </div>
  );
};

export default ItemListContainer;