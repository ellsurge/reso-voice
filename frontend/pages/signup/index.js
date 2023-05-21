import Link from "next/link";
import style from "./style.module.css"
export default function Signup(){
    return(
        <div className={style.signupContainer}>
            <div className={style.signupDiv}>
                <h1 className={style.title}>Sign up</h1>
                <form className={style.signupForm} autoComplete="off">
                    <div className={style.inputHolder}>
                        <label className={style.label}>Email</label>
                        <input className={style.input} type="email" autoComplete="new-password" placeholder="Email" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Matric No</label>
                        <input className={style.input} type="text" autoComplete="new-password" placeholder="Matric No" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Password</label>
                        <input className={style.input} type="password" autoComplete="new-password" placeholder="Password" />
                    </div>
                    <button className={style.signupButton}>
                        Sign up
                    </button>
                    <p className={style.text}>Already have an account? <Link className={style.link} href='/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    )
}
