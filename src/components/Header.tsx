import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const cartItems = useSelector((store) => store?.cart?.items);

    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>MeroMarket</Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>

                        </ul>
                        <div className="d-flex my-2 my-lg-0">

                            <Link to={"/cart"}>
                                <button
                                    className='btn btn-primary fw-bold'
                                >
                                    Cart: <span className='bg-warning text-black px-2 rounded'> {cartItems.length}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Header