import React from "react";
import { Link } from 'react-router-dom';
import './heading.css';

function Heading() {
    return (
        <div className="Heading">
            <header>
                {/* <img src=""> */}
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link className="nav-link" to={"/"}> home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/product/show"} > Catagory</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/product/add"}> Add New Product</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/register"} > Register</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/login"}> Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Heading;