import react from "react"
import classes from "./CartItem.module.css"


const CarItem = (prop) => {
    return <div className={classes['cart-item']}>
        <p className={classes['no-plate']}>{prop.car.vehicleNo}</p>
        <p className={classes['rider-name']}>{prop.car.riderName}</p>
    </div>
}
export default CarItem
