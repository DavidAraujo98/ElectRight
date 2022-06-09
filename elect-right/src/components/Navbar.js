import React from 'react';
import Title from './Title';

const Navbar = ({ username, img_src, links }) => {

    return (
        <nav className="navbar navbar-static-top navbar-expand-lg bg-light py-1">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand p-0 m-0" href="/">
                    <Title size={30} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        {links.map((link) => (
                            <li className="nav-item mx-2">
                                <a
                                    className={
                                        window.location.pathname === link.path
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    href={link.path}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-flex flex-row">
                    <h5 className="mx-2">{username}</h5>
                    <img
                        width="30"
                        height="30"
                        className="rounded-circle"
                        src={img_src}
                        alt="user"
                    ></img>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;