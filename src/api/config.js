import firebase from 'react-native-firebase';

let db = firebase.firestore();
let storage = firebase.storage();

export {
    db, storage
};