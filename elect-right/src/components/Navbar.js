import React from 'react';
import Title from './Title';

const Navbar = () => {
    return ( 
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><Title /></a>
            </div>
        </nav>
    );
}
 
export default Navbar;