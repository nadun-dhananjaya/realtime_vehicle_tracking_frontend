import classes from "./TopNav.module.css";
import {Link, useLocation} from "react-router-dom";
import {getAuth} from "firebase/auth";
import {firebaseApp} from "../../Firebase";

const TopNav = () => {
    const location = useLocation()
    const auth = getAuth();

    console.log(window.location.pathname)

    const logoutHandler = () =>
    {
        auth.signOut()
    }
    return <div className={classes['container']}>
        <Link to={'/'} className={classes['home']}>Home</Link>
        {location.pathname !== "/login" &&  <div onClick={logoutHandler} className={classes['logout']}>Logout</div>}

    </div>
}

export default TopNav
