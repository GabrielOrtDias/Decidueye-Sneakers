import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Registrar } from "./Registrar";

export default function Login() {
    const [Register, SetRegister] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode colocar a lógica de autenticação, e depois redirecionar para a página principal
        navigate("/"); // Redireciona para a página principal
    };

    return (
        <div className="w-screen h-screen bg-forest-6 flex items-center justify-center">
            <div className="w-4/12 bg-forest-2 h-[90%] shadow-2xl shadow-forest-3">
                {Register ? (
                    <Registrar SetRegister={SetRegister} />
                ) : (
                    <form onSubmit={handleLogin} className="text-center font-montserrat flex flex-col items-center justify-center h-full gap-3">
                        <h1 className="text-forest-white text-4xl font-bold">Login</h1>
                        <input
                            type="name"
                            placeholder="Username or Email"
                            className="w-4/6 rounded-lg px-2 py-1 focus:outline-none text-forest-2 bg-forest-1"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="w-4/6 rounded-lg px-2 py-1 focus:outline-none text-forest-2 bg-forest-1"
                        />

                        <button
                            type="submit"
                            className="border-2 border-forest-1 text-forest-1 duration-300 hover:text-forest-2 hover:bg-forest-1 w-2/6 rounded-lg px-2 py-1"
                        >
                            Login
                        </button>
                        <div className="flex w-full px-5 gap-2 items-center justify-center">
                            <div className="h-[2px] w-4/12 bg-sky-3" />
                            <span className="text-sky-3">or login with</span>
                            <div className="h-[2px] w-4/12 bg-sky-3" />
                        </div>
                        <ul className="flex text-3xl text-forest-1 w-full justify-center gap-10 my-3">
                            <li><i className="ri-twitter-x-line cursor-pointer" /></li>
                            <li><i className="ri-instagram-line cursor-pointer" /></li>
                            <li><i className="ri-meta-line cursor-pointer" /></li>
                        </ul>
                        <span className="text-forest-white">
                            Don't have an account?{" "}
                            <button
                                className="text-forest-4"
                                onClick={() => {
                                    SetRegister(true);
                                }}
                            >
                                Register
                            </button>
                        </span>
                    </form>
                )}
            </div>
        </div>
    );
}
