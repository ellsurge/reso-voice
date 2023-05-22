import Link from "next/link";
import style from "./style.module.css"
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { apiUrl } from "../_app";
export default function Login(){
    const [matNumber, setMat]  = useState();
    const [password, setPass] = useState();
    const router = useRouter();

    const hanler = async (event)=>{
        event.preventDefault();
        const data = {matNumber, password}
        try{
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if(response.ok){
                const accessToken = await response.json();
                localStorage.setItem('accessToken', accessToken)
                console.log(response);
                console.log(accessToken);
                router.push('/complain');
            }else{
                console.error('Error:', response.statusText);
            }
        }catch(error){
            console.error('Error', error)
        }

    }


    return(
        <div className={style.loginContainer}>
            <div className={style.loginDiv}>
                <h1 className={style.title}>Login</h1>
                <form className={style.loginForm} onSubmit={hanler}>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Matric No</label>
                        <input value={matNumber} onChange={(e) => setMat(e.target.value)} className={style.input} type="text" placeholder="Matric No" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Password</label>
                        <input value={password} onChange={(e) => setPass(e.target.value)} className={style.input} type="password" placeholder="Password" />
                    </div>
                    <button className={style.loginButton}>
                        Login
                    </button>
                    <p className={style.text}>Don't have an account? <Link className={style.link} href='/signup'>Register</Link> </p>
                </form>
            </div>
        </div>
    )
}
