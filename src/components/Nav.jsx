import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ links,activo }) => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                <img
                    src="./img/store.png"
                    alt=""
                    width={38}
                    height={30}
                    className="d-inline-block align-center pr-2"
                />
                Green-Store
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                {links ? (
                    <ul className="navbar-nav mr-auto">
                        <li className={activo === 'home'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li  className={activo === 'sales'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="/sales">
                                Ventas
                            </Link>
                        </li>
                        <li  className={activo === 'statistics'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="/statistics">
                                Estadisticas
                            </Link>
                        </li>
                        <li  className={activo === 'purchases'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="!#">
                                Compras
                            </Link>
                        </li>
                        <li  className={activo === 'products'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="!#">
                                Productos
                            </Link>
                        </li>
                        <li  className={activo === 'inventory'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="!#">
                                Inventario
                            </Link>
                        </li>
                        <li  className={activo === 'users'?`nav-item active`:`nav-item`}>
                            <Link className="nav-link" to="!#">
                                Usuarios
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="navbar-nav mr-auto"></ul>
                )}
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-info my-2 my-sm-0" type="submit">
                        Sing In
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Nav;
