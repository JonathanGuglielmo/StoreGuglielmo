import React from "react";
import './NavBar.css';
import logo from '../../img/logo.png';
import CardWidget from "../CardWidget/CardWidget";


const NavBar = () => {

    return (
        <div>
            <nav>
                <img src={logo} width="300" className="logo" alt="logo shark store" />
                <ul>
                    <li><a href="#home">Home</a></li>                        
                    <li><a href="#shop">Shop</a></li>                        
                    <li><a href="#faq">Preguntas Frecuentes</a></li>                        
                    <li><a href="#contacto">Contacto</a></li>
                    <CardWidget/>                        
                </ul>
            </nav>
        </div>
    )
}



export default NavBar;