import classes from "./TopNav.module.css";
import {Link} from "react-router-dom";
import {getAuth} from "firebase/auth";
import {firebaseApp} from "../../Firebase";

const TopNav = () => {
    const auth = getAuth();

    const logoutHandler = () =>
    {
        auth.signOut()
    }
    return <div className={classes['container']}>
        <Link to={'/home'} className={classes['home']}>Home</Link>
        <div onClick={logoutHandler} className={classes['logout']}>Logout</div>
    </div>
}

export default TopNav
