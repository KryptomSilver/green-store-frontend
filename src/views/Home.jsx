import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <div className="row p-2 mt-5">
                    <div className="col d-flex justify-content-center">
                        <Link
                            to="/sales"
                            className="card btn  btn-primary align-items-center "
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Ventas</h1>
                            <img
                                src="./img/sales.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                                style={{ height: "11rem" }}
                            />
                        </Link>
                    </div>
                    <div className="col  d-flex justify-content-center">
                        <Link
                            to="/statistics"
                            className="card btn btn-primary align-items-center"
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Estadisticas</h1>
                            <img
                                src="./img/statistics.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                            />
                        </Link>
                    </div>
                    <div className="col  d-flex justify-content-center">
                        <a
                            href="!#"
                            className="card btn  btn-primary align-items-center "
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Compras</h1>
                            <img
                                src="./img/purchases.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                                style={{ height: "11rem" }}
                            />
                        </a>
                    </div>
                </div>
                <div className="row  p-2">
                    <div className="col  d-flex justify-content-center">
                        <a
                            href="/products"
                            className="card btn  btn-primary align-items-center"
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Productos</h1>
                            <img
                                src="./img/products.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div className="col  d-flex justify-content-center">
                        <a
                            href="!#"
                            className="card btn  btn-primary align-items-center"
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Inventario</h1>
                            <img
                                src="./img/suppliers.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div className="col  d-flex justify-content-center">
                        <a
                            href="!#"
                            className="card btn  btn-primary align-items-center "
                            style={{ height: "16rem", width: "16rem" }}
                        >
                            <h1>Usuarios</h1>
                            <img
                                src="./img/users.png"
                                className="card-img-top img-fluid mh-30 mw-100"
                                alt="..."
                                style={{ height: "13rem" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
