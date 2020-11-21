import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC_z1gld4lFPVCaOdZ0tFNJzxkfMVj59-w",
    authDomain: "petition-site.firebaseapp.com",
    databaseURL: "https://petition-site.firebaseio.com",
    projectId: "petition-site",
    storageBucket: "petition-site.appspot.com",
    messagingSenderId: "33836151360",
    appId: "1:33836151360:web:897a0f97e189bffccbe5a5",
    measurementId: "G-ZFW2MTNVV2"};

firebase.initializeApp(config);
export default firebase;

