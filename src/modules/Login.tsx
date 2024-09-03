import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Registrar } from "./Registrar";

export default function Login({red}) {
    const [Register, SetRegister] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode colocar a lógica de autenticação, e depois redirecionar para a página principal
        navigate("/"); // Redireciona para a página principal
    };

    return (
        <div className={`w-screen h-screen ${red ? "bg-crimson-2" : "bg-forest-2"}  flex items-center justify-center`}>
            <div className={`w-4/12 ${red ? "bg-crimson-1 shadow-crimson-3" : "bg-forest-2 shadow-forest-3" }  h-[90%] shadow-2xl `}>
                {Register ? (
                    <Registrar SetRegister={SetRegister} red={red}/>
                ) : (
                    <form onSubmit={handleLogin} className="text-center font-montserrat flex flex-col items-center justify-center h-full gap-3">
                        <h1 className="text-forest-white text-4xl font-bold">Login</h1>
                        <input
                            type="name"
                            placeholder="Username or Email"
                            className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-2 bg-crimson-4" : "text-forest-2 bg-forest-1"}`}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-2 bg-crimson-4" : "text-forest-2 bg-forest-1"}`}
                        />

                        <button
                            type="submit"
                            className={`border-2 ${red ? "border-crimson-4 text-crimson-4 hover:text-crimson-1 hover:bg-crimson-4" : "border-forest-1 text-forest-1 hover:text-forest-2 hover:bg-forest-1"}  duration-300 w-2/6 rounded-lg px-2 py-1`}
                        >
                            Login
                        </button>
                        <div className="flex w-full px-5 gap-2 items-center justify-center">
                            <div className={`h-[2px] w-4/12 ${red? "bg-crimson-4" : "bg-sky-3"}`} />
                            <span className={red ? "text-crimson-4" : "text-sky-3"}>or login with</span>
                            <div className={`h-[2px] w-4/12 ${red? "bg-crimson-4" : "bg-sky-3"}`} />
                        </div>
                        <ul className={`flex text-3xl ${red ? "text-crimson-4" : "text-forest-1"} w-full justify-center gap-10 my-3`}>
                            <li><i className="ri-twitter-x-line cursor-pointer" /></li>
                            <li><i className="ri-instagram-line cursor-pointer" /></li>
                            <li><i className="ri-meta-line cursor-pointer" /></li>
                        </ul>
                        <span className="text-forest-white">
                            Don't have an account?{" "}
                            <button
                                className={red ? "text-crimson-3" : "text-forest-4" }
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
