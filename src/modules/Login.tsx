import React, { useState } from "react";
import { Registrar } from "./Registrar";

export default function Login(){
    const [Register, SetRegister] = useState(false)
    return (
        <div className="w-screen h-screen bg-bg flex items-center justify-center">
            <div className="w-4/12 bg-sky-2 h-[90%] shadow-2xl shadow-forest-3">
                {Register ? <Registrar /> : 
                <form>
                    <h1>Login</h1>
                </form>
                }
            </div>
        </div>
    )
}