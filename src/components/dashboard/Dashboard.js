import classes from "./Dashboard.module.css"
import GMap from "./GMap";
import CarItem from "./CarItem";
import {useEffect, useState} from "react";
import {collection, getFirestore, onSnapshot, orderBy, query} from "firebase/firestore";
import {firebaseApp} from "../../Firebase";
import {useNavigate} from "react-router-dom";
import {getAuth} from "firebase/auth";


const collectionName = "v_locations"

const Dashboard = () => {
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


    const firestore = getFirestore(firebaseApp)
    const [carList, setCarList] = useState([])


    // const q = query(collection(firestore, collectionName), orderBy('createdAt', "desc"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     const cars = [];
    //     querySnapshot.forEach((doc) => {
    //         const vehicleNo = doc.data().vehicleNo;
    //         const riderName = doc.data().riderName;
    //         cars.push({
    //             vehicleNo,
    //             riderName
    //         })
    //         setCarList(cars)
    //     });
    // });

    const [vehicleList, setVehicleList] = useState([]);



    const getLocation = () => {
        const q = query(collection(firestore, collectionName));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const markers = [];
            querySnapshot.forEach((doc) => {
                const vehicleNo = (doc.data().trackerId);
                const speed = parseFloat(doc.data().speed);

                markers.push({
                    vehicleNo,
                    speed
                })
            });
            setVehicleList(markers)
        });

    }

    useEffect(()=>{
        getLocation()
    },[])

    return <div className={classes['dashboard']}>
        <div className={classes['car-list-container']}>
            <ul>
                {vehicleList.map((car, index) => (
                    <li key={index}>
                        <CarItem car={car}/>
                    </li>
                ))}

            </ul>

        </div>

        <div className={classes['map-container']}>
            <GMap/>
        </div>
    </div>
}

export default Dashboard
