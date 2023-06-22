import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Login = () => {
  const { actions } = useContext(Context);

  const handleLogin = () => {
    actions.login({ email: "deimianvasquez@gmail.com", password: "123456" });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <form>
              <h2>Iniciar sesión</h2>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="doe@gmail.com"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="password">Contraseña: </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="********"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleLogin()}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
