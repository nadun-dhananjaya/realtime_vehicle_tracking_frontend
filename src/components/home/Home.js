import classes from "./Home.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {getAuth} from "firebase/auth";
import {firebaseApp} from "../../Firebase";
import {useEffect} from "react";


const Home = () => {
    const auth = getAuth(firebaseApp);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, []);

    return <div className={classes['home']}>
        <div className={classes['container']}>
            <div className={classes['btn-container']}>
                <NavLink
                    className={classes['btn-outline']}
                    to="/car/add" end> Add Cars
                </NavLink>

                <a
                    className={classes['btn-outline']}
                    href="/dashboard" > Track Cars
                </a>

            </div>
        </div>
    </div>
}

export default Home
