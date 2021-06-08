import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Nav from "../components/Nav";
const Sales = () => {
    return (
        <Fragment>
            <Nav links={true} activo={"sales"} />
            <div className="container">
                <form className="row ">
                    <div className="d-flex align-items-center mt-3 p-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="No. Producto"
                        />
                        <button
                            className="btn btn-secondary ml-3"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-whatever="@getbootstrap"
                        >
                            Buscar
                        </button>
                    </div>
                </form>
                <div className="row">
                    <table className="table table-borderless table-primary  table-hover mt-3">
                        <thead className="text-center">
                            <tr>
                                <th>No. Producto</th>
                                <th>Nombre producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-active text-center">
                            <tr>
                                <td>12</td>
                                <td>Papas</td>
                                <td>20</td>
                                <td>$342</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Manzana</td>
                                <td>2</td>
                                <td>$200</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex flex-row justify-content-end align-items-center p-0">
                        <label htmlFor="" className="pr-3 submonto ">
                            IBA:
                        </label>
                        <label htmlFor="" className="submonto">
                            $25.677
                        </label>
                    </div>
                    <div className="d-flex flex-row justify-content-end align-items-center p-0">
                        <label htmlFor="" className="pr-3 money">
                            Total:
                        </label>
                        <label htmlFor="" className="money">
                            $734,434.677
                        </label>
                    </div>

                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        data-backdrop="static"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3
                                        className="modal-title "
                                        id="exampleModalLabel"
                                    >
                                        Producto
                                    </h3>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <h5 className="text-center pb-3 text-white product-title">
                                            Manzana amarilla
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Cantidad del producto:
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Precio del producto:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value="$12"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group text-center">
                                                <label
                                                    htmlFor=""
                                                    className="product-unit"
                                                >
                                                    Precio unitario = $40.33
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        data-dismiss="modal"
                                    >
                                        Cerrar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Sales;
