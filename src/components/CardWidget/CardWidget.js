
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = ({items,toggleMenu}) => {

    // carrito => recibi como parametro desde Navbar / muestra la cantidad de Articlulos que esta en 
    
    return (
        <div className=" d-flex align-items-center">
         <ShoppingCartIcon style={{width:"50px", color:"brown"}} fontSize="large"/> 
            <h1 className="text-light mr-5">{items}</h1>
        </div>
    )
}

export default CardWidget