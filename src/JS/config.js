import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyAgqlkFgkd2yC4D9riUNAje8KON87Zw7l4",
    authDomain: "practicaweb01-2020.firebaseapp.com",
    databaseURL: "https://practicaweb01-2020.firebaseio.com",
    projectId: "practicaweb01-2020",
    storageBucket: "practicaweb01-2020.appspot.com",
    messagingSenderId: "592332241728",
    appId: "1:592332241728:web:1212502c1acc39d09dd8a5",
    measurementId: "G-610EYRKX15"
}


const init = () => firebase.initializeApp(config)

init()
