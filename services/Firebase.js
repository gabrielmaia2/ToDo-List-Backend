// Import the functions you need from the SDKs you need
import {initializeApp, cert} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import serviceAccount from './firebase-service-account.json' assert {type: 'json'};;

// Initialize Firebase
initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

export {db};
