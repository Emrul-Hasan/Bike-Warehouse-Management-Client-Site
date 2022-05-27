// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_apiKey,
// 	authDomain: process.env.REACT_APP_authDomain,
// 	projectId: process.env.REACT_APP_projectId,
// 	storageBucket: process.env.REACT_APP_storageBucket,
// 	messagingSenderId: process.env.REACT_APP_messagingSenderId,
// 	appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD6ScwYVz_5SECG12w-117iUUPuOq_5-zA",
	authDomain: "warehouse-management-sys-4df86.firebaseapp.com",
	projectId: "warehouse-management-sys-4df86",
	storageBucket: "warehouse-management-sys-4df86.appspot.com",
	messagingSenderId: "786648517003",
	appId: "1:786648517003:web:62c9d69d9518d97503478e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
