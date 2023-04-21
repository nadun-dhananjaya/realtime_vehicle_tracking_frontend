import classes from "./Home.module.css"
import {NavLink} from "react-router-dom";


const Home = () => {
    return <div className={classes['home']}>
        <div className={classes['container']}>
            <div className={classes['btn-container']}>
                <NavLink
                    className={classes['btn-outline']}
                    to="/car/add" end> Add Cars
                </NavLink>

                <NavLink
                    className={classes['btn-outline']}
                    to="/dashboard" end> Track Cars
                </NavLink>

            </div>
        </div>
    </div>
}

export default Home
