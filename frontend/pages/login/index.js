import Link from "next/link";
import style from "./style.module.css"
export default function Login(){
    return(
        <div className={style.loginContainer}>
            <div className={style.loginDiv}>
                <h1 className={style.title}>Login</h1>
                <form className={style.loginForm} autoComplete="off">
                    <div className={style.inputHolder}>
                        <label className={style.label}>Matric No</label>
                        <input className={style.input} type="text" autoComplete="new-password" placeholder="Matric No" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Password</label>
                        <input className={style.input} type="password" autoComplete="new-password" placeholder="Password" />
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
