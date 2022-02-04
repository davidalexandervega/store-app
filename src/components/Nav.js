import { Link } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
    
    const cart = props.cart

    const previewCart = () => {
        let counter = 0;
        for (let i = 0; i < cart.length; i++) {
            counter += cart[i].quantity;
        }
        return counter;
    }

    return (
        <div id="navContainer">
            <div id="navHeader">
            téléchargement
            </div>
            <div id="navButtons">
                <Link to='/' className="navButton">home</Link>
                <Link to='/store' className="navButton">store</Link>
                <Link to='/cart' className="navButton">cart ({previewCart()})</Link>
            </div>
        </div>
    )
}

export default Nav;