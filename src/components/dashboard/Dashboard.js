import react from "react"
import classes from "./Dashboard.module.css"
import GMap from "./GMap";
import CarItem from "./CarItem";

const Dashboard = (req,res) => {
    return <div className={classes['dashboard']}>
        <div className={classes['car-list-container']}>
            <ul>
                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>

                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>
                <li>
                    <CarItem/>
                </li>
            </ul>

        </div>

        <div className={classes['map-container']}>
            <GMap/>
        </div>
    </div>
}

export default Dashboard
