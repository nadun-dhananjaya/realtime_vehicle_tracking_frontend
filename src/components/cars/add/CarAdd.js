import "./CarAdd.module.css"
import classes from "./CarAdd.module.css"
import CarItem from "./CarItem";
import {useState} from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {setDoc,getFirestore,doc} from "firebase/firestore/lite"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const firebaseConfig = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: "real-time-vehicle-tracki-62ecc.firebaseapp.com",
    projectId: "real-time-vehicle-tracki-62ecc",
    storageBucket: "real-time-vehicle-tracki-62ecc.appspot.com",
    messagingSenderId: "132350944633",
    appId: "1:132350944633:web:b537913e8f57b4f5ce3ba8",
    measurementId: "G-RFW79PHRS9"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp)
const collectionName  = "v_cars"


const CarAdd = () => {

    const [riderName,setRiderName] = useState("");
    const [vehicleNo,setVehicleNo] = useState("");
    const [isDisabled,setIsDisabled] = useState(false);
    const [isReadOnly,SetIsReadOnly] = useState()

    const riderNameChangeHandler = (event) => {
        setRiderName(event.target.value)
    }

    const vehicleNoChangeHandler = (event) => {
        setVehicleNo(event.target.value)

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const data = {
                riderName : riderName,
                vehicleNo: vehicleNo
            }
            setIsDisabled(true)
            setIsDisabled(true)
            await setDoc(doc(firestore,collectionName,vehicleNo),data)
            toast.success('🏎️ Car Successfully Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });



        } catch (error) {
            console.error(error);
            toast.success('🏎️ Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }

    return <div className={classes['car-add']}>
        <ToastContainer />
       <div className={classes['container']}>
           <h1 className={classes['heading']}>Cars</h1>
           <form className={classes['car-add-form']} onSubmit={onSubmitHandler}>
                <div className={classes['form-group']} >
                    <label className={classes['label']} htmlFor={'rider-name'}>Rider Name</label>
                    <input type={'text'} className={classes['input-control']} name={'rider-name'} readOnly={isReadOnly} onChange={riderNameChangeHandler} id={'rider-name'}/>
                </div>
               <div className={classes['form-group']} >
                   <label htmlFor={'rider-name'} className={classes['label']}>Vehicle No</label>
                   <input type={'text'}  className={classes['input-control']} name={'vehicle-no'} readOnly={isReadOnly} onChange={vehicleNoChangeHandler} id={'vehicle-no'}/>
               </div>
               <div></div>
               <button className={classes['btn-primary']} disabled={isDisabled}  type={'submit'}>Add Vehicle</button>
           </form>
           <div className={classes['car-list-container']}>
                <ul>
                    <li>
                     <CarItem/>
                    </li>
                </ul>
           </div>
       </div>
    </div>
}

export default CarAdd
