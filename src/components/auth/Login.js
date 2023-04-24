import react, {useState} from "react"
import classes from "./Login.module.css"
import {firebaseApp} from "../../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login = (props) => {

    console.log(firebaseApp)

    const navigate = useNavigate()
    const auth = getAuth(firebaseApp);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    const login = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                navigate('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return <div className={classes['login-page']}>
        <div className={classes['card']}>
            <div className={classes['card-body']}>
               <form onSubmit={login}>
                   <div className={classes['form-group']}>
                        <label htmlFor={'email'}>Email</label>
                       <input type={'email'} className={classes['form-control']} onChange={emailChangeHandler} value={email}/>
                   </div>

                   <div className={classes['form-group']}>
                       <label htmlFor={'email'}>Passwors</label>
                       <input type={'password'} className={classes['form-control']} onChange={passwordChangeHandler} value={password}/>
                   </div>

                   <button className={classes['btn']} type={'submit'}>Login</button>
               </form>
            </div>
        </div>
    </div>
}

export default Login
