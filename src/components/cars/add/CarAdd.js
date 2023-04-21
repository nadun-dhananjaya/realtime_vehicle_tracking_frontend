import "./CarAdd.module.css"
import classes from "./CarAdd.module.css"
import CarItem from "./CarItem";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {firebaseApp} from "../../../Firebase"
import {doc, getFirestore, onSnapshot} from "firebase/firestore";
import { setDoc,query,collection,orderBy } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const collectionName = "v_cars"


const CarAdd = () => {
    const firestore = getFirestore(firebaseApp)
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


    const [carList, setCarList] = useState([])
    const [riderName, setRiderName] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false)

    const riderNameChangeHandler = (event) => {
        setRiderName(event.target.value)
    }

    const q = query(collection(firestore, collectionName),orderBy('createdAt',"desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cars = [];
        querySnapshot.forEach((doc) => {
            const vehicleNo = doc.data().vehicleNo;
            const riderName = doc.data().riderName;
            cars.push({
                vehicleNo,
                riderName
            })
            setCarList(cars)
        });
    });

    const vehicleNoChangeHandler = (event) => {
        setVehicleNo(event.target.value)

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const UUID = (new Date()).getTime();

            const data = {
                riderName: riderName,
                vehicleNo: vehicleNo,
                createdAt: UUID.toString()
            }
            setIsDisabled(true)
            setIsReadOnly(true)
            await setDoc(doc(firestore, collectionName, vehicleNo), data);


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

            setIsDisabled(false)
            setIsReadOnly(false)
            setRiderName("")
            setVehicleNo("")
        } catch (error) {
            console.error(error);
            setIsDisabled(false)
            setIsReadOnly(false)
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
        <ToastContainer/>
        <div className={classes['container']}>
            <h1 className={classes['heading']}>Cars</h1>
            <form className={classes['car-add-form']} onSubmit={onSubmitHandler}>
                <div className={classes['form-group']}>
                    <label className={classes['label']} htmlFor={'rider-name'}>Rider Name</label>
                    <input type={'text'} className={classes['input-control']} name={'rider-name'} readOnly={isReadOnly}
                           onChange={riderNameChangeHandler} id={'rider-name'} required value={riderName}/>
                </div>
                <div className={classes['form-group']}>
                    <label htmlFor={'rider-name'} className={classes['label']}>Vehicle No</label>
                    <input type={'text'} className={classes['input-control']} name={'vehicle-no'} readOnly={isReadOnly}
                           onChange={vehicleNoChangeHandler} id={'vehicle-no'} required value={vehicleNo}/>
                </div>
                <div></div>
                <button className={classes['btn-primary']} disabled={isDisabled} type={'submit'}>Add Vehicle</button>
            </form>
            <div className={classes['car-list-container']}>
                <ul>
                    {carList.map((car, index) => (
                            <li key={index}>
                                <CarItem car={car}/>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    </div>
}

export default CarAdd
