import React from 'react';
import Title from './Title';

const Navbar = ({ username, img_src }) => {
    return ( 
        <nav class="navbar fixed-top navbar-expand-lg bg-light py-1">
            <div class="container-fluid justify-content-between">
                <a class="navbar-brand p-0 m-0" href='/'><Title size={30} /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/'>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  href='/'>Profile</a>
                        </li>
                    </ul>
                </div>
                <h5 class="mx-2">{username}</h5>
                <img width="30" height="30" class="rounded-circle" src={img_src} alt="user"></img>
            </div>
        </nav>
    );
}
 
export default Navbar;