import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand text-dark ps-5 fw-bold  fs-4" to="/home">Suffix IT Limited</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link me-5 active text-dark  fs-6" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link me-5 text-dark  fs-6" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-dark  fs-6" to="/about">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-dark  fs-6" to="/about">User</Link>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Nav;