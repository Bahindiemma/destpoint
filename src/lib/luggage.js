import {firebaseConfig} from "./firebaseConfig.js";
import {writable} from "svelte/store";
import {userSession} from "../../static/UserAuth.js";
import {get} from "svelte/store";

// luggage store reactive
export const all_luggage = writable([])

import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
//import {firebase} from 'https://www.gstatic.com/firebasejs'
import {
    getDatabase,
    set,
    push,
    ref,
    onValue
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const db = getDatabase(app)

export const addLuggage = (e) => {
    const data = new FormData(e.target);

    const itemName = data.get('itemName');
    const destPoint = data.get('destPoint');
    const senderPoint = data.get('senderPoint');

    const senderName = data.get('senderName');

    const senderPhone = data.get('senderPhone');

    const senderEmail = data.get('senderEmail');

    const receiverName = data.get('receiverName');

    const receiverPhone = data.get('receiverPhone');

    const receiverEmail = data.get('receiverEmail');

    const driver_id = data.get('driver_id');

    const bus_owner_id = data.get('bus_owner_id');

    let luggage_token = "LG";
    let destinationPoint = destPoint.charAt(0).toUpperCase();
    let sendingPoint = senderPoint.charAt(0).toUpperCase();
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    luggage_token += randomNumber.toString()+sendingPoint+destinationPoint
    console.log(luggage_token)
    // luggage_token.concat(randomNumber.toString(), sendingPoint, destinationPoint);


// Create a new post reference with an auto-generated id

    const postListRef = ref(db, 'luggage');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        status: 'pending',
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
        createdAt: Math.floor(Date.now() / 1000),
    }).then( () => {
        alert('Luggage Registered!')
    }).catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message

        alert(errorMessage)
    });
}

export const getAllLuggage = () => {
    let data;
    const starCountRef = ref(db, 'luggage/');
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();

        const array = [];

        Object.keys(data).forEach((key,) => {
            array.push({[key]: data[key]});
        });

        let finalArr = [];

        let message = array;
        message.forEach((value,key) => {
            for (const [ke,valu] of Object.entries(value)){
                finalArr.push(valu);
            }
        });

        all_luggage.set(finalArr)
    });

}
