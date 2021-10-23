import { useState } from "react";

function ItemCount({ stock= 19, initial, onAdd }) {
    const [state, setState] = useState({
        stock: stock,
        initial: 1,
    });

    const addItem = () => {
        if(state.stock > state.initial) setState({...state,initial:state.initial+1})
    }
    return (
        <>
        <div className="bg-light">
            <p>{stock}</p>
            <button onClick={()=>addItem}>Add</button>
        </div>
        </>
    );
}

export default ItemCount