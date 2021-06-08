import React from "react";

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="card p-3 login">
                    <div className="card-body">
                        <div className="logo-img">
                            <img
                                src="./img/store.png"
                                alt=""
                                className="login-img"
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="" className="text-white">
                                        Usuario:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Usuario"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="text-white">
                                        Contraseña:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center  justify-content-center mt-2">
                            <a
                                href="!#"
                                className="btn btn-success btn-lg w-50"
                            >
                                Entrar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
