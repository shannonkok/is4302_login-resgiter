import Firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyAbz-Ttq5JetbxzQHSi_I9enG8TYY6TvDI",
    authDomain: "charity-71bad.firebaseapp.com",
    databaseURL: "https://charity-71bad.firebaseio.com",
    projectId: "charity-71bad",
    storageBucket: "charity-71bad.appspot.com",
    messagingSenderId: "1029879656886"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let txnRef = db.ref('transactions')

export { db, txnRef };