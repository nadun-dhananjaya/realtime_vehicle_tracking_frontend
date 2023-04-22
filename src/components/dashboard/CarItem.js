import react from "react"
import classes from "./CartItem.module.css"


const CarItem = (prop) => {
    console.log(prop.car.vehicleNo);

    return <div className={classes['cart-item']}>
        <p className={classes['no-plate']}>V No: {prop.car.vehicleNo}</p>
        <p className={classes['rider-name']}>{prop.car.speed} kmph</p>
    </div>
}
export default CarItem
