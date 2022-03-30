import {firebaseConfig} from "./firebaseConfig.js";
import {userSession} from "../../static/UserAuth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
import {
    getDatabase,
    set,
    ref,
    update,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const database = getDatabase(app)

export  const registerBusCompany = (e) => {
    const data = new FormData(e.target);

    const companyName = data.get('companyName');
    const numberOfRoutes = data.get('numberOfRoutes');
    const numberOfBusStops = data.get('numberOfBusStops');

    const registeredBy = data.get('registeredBy');

    const contactName = data.get('contactName');

    const contactPhoneNumber = data.get('contactPhoneNumber');

    const contactEmail = data.get('contactEmail');

    set(ref(database, 'luggage/' + luggage_token), {
        itemName: itemName,
        destPoint: destPoint,
        senderPoint: senderPoint,
        senderName: senderName,
        senderPhone: senderPhone,
        receiverName: receiverName,
        receiverPhone: receiverPhone,
        senderEmail: senderEmail,
        receiverEmail: receiverEmail,
        driver_id: driver_id,
        bus_owner_id: bus_owner_id,
        luggage_token: luggage_token,
    }).then( () => {
        alert('Luggage Registered!')
    }).catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message

        alert(errorMessage)
    });
}
