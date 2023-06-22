import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Login from "../component/Login.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const Register = () => {
    return (
      <>
        <h1>registrar un usuario</h1>
      </>
    );
  };

  return <>{store.token ? <p>OMostramos las tareas</p> : <Login />}</>;
};
