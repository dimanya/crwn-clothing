import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyB93eKEKYrlG30SHrS928qcOca4yaevlC4",
        authDomain: "crwn-db-7b3da.firebaseapp.com",
        databaseURL: "https://crwn-db-7b3da.firebaseio.com",
        projectId: "crwn-db-7b3da",
        storageBucket: "crwn-db-7b3da.appspot.com",
        messagingSenderId: "388017037025",
        appId: "1:388017037025:web:642a497774a574ffd161a0",
        measurementId: "G-NDJ71BTNSW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
