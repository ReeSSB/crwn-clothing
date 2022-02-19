import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyAyF_sAPkBmlLA9LJMOrIVjHRem5M3xJcM",

	authDomain: "crwn-db-da815.firebaseapp.com",

	projectId: "crwn-db-da815",

	storageBucket: "crwn-db-da815.appspot.com",

	messagingSenderId: "990032173501",

	appId: "1:990032173501:web:cd9cdb639479ec35c85ad4",

	measurementId: "G-7ZXDKGB45P",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
