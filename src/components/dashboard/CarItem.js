import react from "react"
import classes from "./CartItem.module.css"


const CarItem = () => {
    return <div className={classes['cart-item']}>
        <p className={classes['rider-name']}>Ayrton Senna</p>
        <p className={classes['no-plate']}>AL - 0323</p>
    </div>
}
export default CarItem
