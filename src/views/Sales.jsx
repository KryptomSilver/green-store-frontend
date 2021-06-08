import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Nav from "../components/Nav";
const Sales = () => {
    return (
        <Fragment>
            <Nav links={true} activo={'sales'}/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form-group d-flex justify-content-end mt-3">
                            <button
                                className="btn-success btn"
                                type="button"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-whatever="@getbootstrap"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
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
                        <label htmlFor="" className="submonto ">
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
                    >
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Buscar producto
                                    </h5>
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
                                    <div className="container">
                                        <form className="row">
                                            <div className="d-flex justify-content-around align-items-center">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <button className="btn ml-3 btn-secondary">
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
                                                        <th>Agregar</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="table-active text-center">
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Papas</td>
                                                        <td>12</td>
                                                        <td>$12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Manzana</td>
                                                        <td>$12</td>
                                                        <td>12</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="add"
                                                                id="add"
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                        Agregar
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
