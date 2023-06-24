import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'

const initialState = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    avatar: ""
}

const Register = () => {
    const { actions } = useContext(Context)

    const [user, setUser] = useState(initialState)


    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const handleRegister = () => {
        const formData = new FormData()

        formData.append("name", user.name)
        formData.append("lastname", user.lastname)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("avatar", user.avata)

        const response = actions.registerUser(formData)

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 Login__container">
                        <h2>Registrarse</h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nombre: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Deimian"
                                    onChange={handleChange}
                                    value={user.name}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="lastname">Apellido: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Vásquez"
                                    onChange={handleChange}
                                    value={user.lastname}
                                />
                            </div>

                            <div className="form-group mt-3">
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

                            <div className="form-group mt-3">
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
                            <div className="form-group mt-3">
                                <label htmlFor="avatar">Ingresa Avatar </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="avatar"
                                    name="avatar"
                                    placeholder="avatar"
                                    onChange={handleChange}
                                //  value={user.avatar}
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-primary w-100 mt-3"
                                    onClick={() => handleRegister()}
                                >
                                    Crear Cuenta
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Register