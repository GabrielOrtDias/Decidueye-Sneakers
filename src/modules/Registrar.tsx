import React from "react";
import { useNavigate } from "react-router-dom";

export function Registrar({SetRegister, red}){
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode colocar a lógica de autenticação, e depois redirecionar para a página principal
        navigate("/"); // Redireciona para a página principal
    };
    return(
        <form onSubmit={handleLogin} className="text-center font-montserrat flex flex-col items-center justify-center h-full gap-3">
                    <h1 className="text-forest-white text-4xl font-bold">Register</h1>
                    <input type="name" placeholder="Username" className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-1 bg-crimson-4" : "text-forest-2 bg-forest-1"} `}/>
                    <input type="email" placeholder="E-mail" className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-1 bg-crimson-4" : "text-forest-2 bg-forest-1"}`}/>
                    <input type="password" placeholder="password" className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-1 bg-crimson-4" : "text-forest-2 bg-forest-1"}`}/>
                    <input type="password" placeholder="Confirm password" className={`w-4/6 rounded-lg px-2 py-1 focus:outline-none ${red ? "text-crimson-1 bg-crimson-4" : "text-forest-2 bg-forest-1"}`}/>

                    <button type="submit" className={`border-2 ${red? "border-crimson-4 text-crimson-4 hover:text-crimson-1 hover:bg-crimson-4" : "border-forest-1 text-forest-1 hover:text-forest-2 hover:bg-forest-1"} duration-300 w-2/6 rounded-lg px-2 py-1`}>Register</button>
                    <div className="flex w-full px-3 gap-2 items-center justify-center">
                        <div className={`h-[2px] w-4/12 ${red? "bg-crimson-4" : "bg-sky-3"}`}/>
                        <span className={red ? "text-crimson-4" : "text-sky-3"}>or Register with</span>
                        <div className={`h-[2px] w-4/12 ${red? "bg-crimson-4" : "bg-sky-3"}`}/>
                    </div>
                        <ul className={`flex text-3xl ${red ? "text-crimson-4" : "text-forest-1"} w-full justify-center gap-10 my-3`}>
                            <li><i className="ri-twitter-x-line cursor-pointer" /></li>
                            <li><i className="ri-instagram-line cursor-pointer" /></li>
                            <li><i className="ri-meta-line cursor-pointer" /></li>
                        </ul>
                        <span className="text-forest-white">do you have an account? <button className={red ? "text-crimson-3" : "text-forest-4" } onClick={()=>{SetRegister(false)}}>Login</button></span>
        </form>
    )
}