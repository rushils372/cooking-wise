import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBb0rwuIzxgmPpwimaGyruXgam03Wb73fw",
    authDomain: "cooking-wise-site.firebaseapp.com",
    projectId: "cooking-wise-site",
    storageBucket: "cooking-wise-site.appspot.com",
    messagingSenderId: "960975820281",
    appId: "1:960975820281:web:3e7cbaa78bc4299582d928"
  };

  // Init Firebase
 firebase.initializeApp(firebaseConfig)

 // Init Servies
 const projectFirestore = firebase.firestore()

 export { projectFirestore }