import React from "react";
import './NavBar.css';
import logo from '../../img/logo.png';
import CardWidget from "../CardWidget/CardWidget";

const NavBar = ({items,toggleMenu}) => {

return (
    <nav id="navbar" className="navbar navbar-light bd-dark">
        <div className="container-fluid">
        <img src={logo} width="300" className="logo" alt="logo shark store" />
            <CardWidget toggleMenu={toggleMenu} items={items} />
        </div>
    </nav>
    );
}



export default NavBar;