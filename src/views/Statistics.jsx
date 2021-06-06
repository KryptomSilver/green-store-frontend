import React, { Fragment } from "react";
import Nav from "../components/Nav";
import ColumnChart from "../components/ColumnChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
const Statistics = () => {
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col mt-4 d-flex justify-content-center">
                        <LineChart
                            id="ventas"
                            title="Ventas"
                            datos={[
                                ["Enero", 200],
                                ["Febrero", 12000],
                                ["Marzo", 500],
                                ["Abril", 82752],
                                ["Mayo", 78782],
                                ["Junio", 45204],
                                ["Agosto", 2555],
                                ["Septiembre", 5000],
                                ["Octubre", 20000],
                                ["Noviembre", 7827],
                                ["Diciembre", 78782],
                            ]}
                            titleX={'Meses'}
                            titleY={'No. Ventas'}
                        />
                    </div>
                    <div className="col mt-4 d-flex justify-content-center">
                        <PieChart
                            id="usuarios"
                            title="Usuarios"
                            datos={[
                                ["Registrados", 20],
                                ["Administradores", 1],
                                ["Vendedores", 5],
                                ["Proveedores", 12],
                            ]}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-4 d-flex justify-content-center">
                        <ColumnChart
                            id="ganancias"
                            title="Ganancias"
                            datos={[
                                ["Enero", 200],
                                ["Febrero", 12000],
                                ["Marzo", 500],
                                ["Abril", 82752],
                                ["Mayo", 78782],
                                ["Junio", 45204],
                                ["Agosto", 2555],
                                ["Septiembre", 5000],
                                ["Octubre", 20000],
                                ["Noviembre", 7827],
                                ["Diciembre", 78782],

                            ]}
                            titleX={'Meses'}
                            titleY={'Dinero, $'}
                            width='96%'
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Statistics;
