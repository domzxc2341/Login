import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const app = firebase.initializeApp({

  apiKey: "AIzaSyCUJ8aD_DJIMLacqigIYhnhSdybwKx4pNY",
  authDomain: "authkey-73611.firebaseapp.com",
  projectId: "authkey-73611",
  storageBucket: "authkey-73611.appspot.com",
  messagingSenderId: "452850321243",
  appId: "1:452850321243:web:842734f3034c30acaafc7e"
})

export const auth = app.auth()
export default app