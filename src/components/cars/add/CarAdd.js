import "./CarAdd.module.css"
import classes from "./CarAdd.module.css"
import CarItem from "./CarItem";

const CarAdd = () => {
    return <div className={classes['car-add']}>
       <div className={classes['container']}>
           <h1 className={classes['heading']}>Cars</h1>
           <form className={classes['car-add-form']}>
                <div className={classes['form-group']} >
                    <label className={classes['label']} htmlFor={'rider-name'}>Rider Name</label>
                    <input type={'text'} className={classes['input-control']} name={'rider-name'} id={'rider-name'}/>
                </div>
               <div className={classes['form-group']} >
                   <label htmlFor={'rider-name'} className={classes['label']}>Rider Name</label>
                   <input type={'text'}  className={classes['input-control']} name={'rider-name'} id={'rider-name'}/>
               </div>
               <div></div>
               <button className={classes['btn-primary']}  type={'submit'}>Add Vehicle</button>
           </form>
           <div className={classes['car-list-container']}>
                <ul>
                    <li>
                        <CarItem/>
                        <CarItem/>
                    </li>
                </ul>
           </div>
       </div>
    </div>
}

export default CarAdd
