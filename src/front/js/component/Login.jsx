import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'

const initialState = {
  email: "",
  password: ""
}

const Login = () => {
  const { actions } = useContext(Context);

  const [user, setUser] = useState(initialState)

  const handleLogin = () => {
    actions.login({ email: "deimianvasquez@gmail.com", password: "123456" });
  };

  const handleChange = ({ target }) => {
    setUser({
      ...user, [target.name]: target.value
    })
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 Login__container">
            <h2>Iniciar sesión</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="doe@gmail.com"
                  onChange={handleChange}
                  value={user.email}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="password">Contraseña: </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary w-100 mt-3"
                  onClick={() => handleLogin()}
                >
                  Iniciar sesión
                </button>
              </div>
              <div>
                <Link to="/register">
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 mt-3"
                  >
                    Registrarse
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
