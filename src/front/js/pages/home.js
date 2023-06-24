import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Login from "../component/Login.jsx";

const token = null

export const Home = () => {
  return (
    <div>
      {token ? <p>todos</p> : <Login />}
    </div>
  )
};
