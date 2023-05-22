import Link from "next/link";
import style from "./style.module.css"
import { apiUrl} from "../_app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [matNumber, setMatNumber] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        name,
        email,
        matNumber,
        password,
      };
  
      try {
        const response = await fetch(`${apiUrl}/users/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        router.push('/login')
  
        // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return(
        <div className={style.signupContainer}>
            <div className={style.signupDiv}>
                <h1 className={style.title}>Sign up</h1>
                <form className={style.signupForm} onSubmit={handleSubmit}> 
                <div className={style.inputHolder}>
                        <label className={style.label}>name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className={style.input} type="text" autoComplete="new-password" placeholder="name" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={style.input} type="email" autoComplete="new-password" placeholder="Email" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Matric No</label>
                        <input value={matNumber} onChange={(e) => setMatNumber(e.target.value)} className={style.input} type="text" autoComplete="new-password" placeholder="Matric No" />
                    </div>
                    <div className={style.inputHolder}>
                        <label className={style.label}>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className={style.input} type="password" autoComplete="new-password" placeholder="Password" />
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
