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
                    <div
                        className="bg-secondary"
                        style={{
                            width: "1140px",
                            height: "510px",
                            padding: 0,
                            marginTop: "1rem",
                        }}
                    >
                        <table className="table table-borderless table-primary  table-hover ">
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
                                    <td>42005917</td>
                                    <td>Papas</td>
                                    <td>2</td>
                                    <td>$12</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>22142926</td>
                                    <td>Zanahoria</td>
                                    <td>3</td>
                                    <td>$20</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>95339345</td>
                                    <td>Manzana amarilla</td>
                                    <td>5</td>
                                    <td>$25</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>76962564</td>
                                    <td>Manzana verde</td>
                                    <td>7</td>
                                    <td>$14</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>55974777</td>
                                    <td>Lechuga</td>
                                    <td>1</td>
                                    <td>$9</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>79594901</td>
                                    <td>Naranja</td>
                                    <td>15</td>
                                    <td>$30</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>45223864</td>
                                    <td>Sandía</td>
                                    <td>2</td>
                                    <td>$50</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>63011492</td>
                                    <td>Brócoli</td>
                                    <td>3</td>
                                    <td>$10</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>55479776</td>
                                    <td>Limón</td>
                                    <td>10</td>
                                    <td>$20</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>41969435</td>
                                    <td>Cilantro</td>
                                    <td>2</td>
                                    <td>$10</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center mt-3 p-0">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <button className="page-link" >
                                    &laquo;
                                </button>
                            </li>
                            <li className="page-item active">
                                <button className="page-link" >
                                    1
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    2
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    3
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    4
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    5
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    &raquo;
                                </button>
                            </li>
                        </ul>

                        <label htmlFor="" className="submonto">
                            IBA: $5.67
                        </label>
                    </div>
                    <div className="d-flex flex-row justify-content-end align-items-center p-0">
                        <label htmlFor="" className="pr-3 money">
                            Total:
                        </label>
                        <label htmlFor="" className="money">
                            $205.67
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
