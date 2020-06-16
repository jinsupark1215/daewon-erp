import 'firebase/database'


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8STYT4dCy0Iu_y7muvDPiZTymEPz2BrE",
    authDomain: "daewon-s-erp.firebaseapp.com",
    databaseURL: "https://daewon-s-erp.firebaseio.com",
    projectId: "daewon-s-erp",
    storageBucket: "daewon-s-erp.appspot.com",
    messagingSenderId: "957489542273",
    appId: "1:957489542273:web:ed479b565f98ee3b3f4980",
    measurementId: "G-8DMMXSJ8KT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();