firebase.initializeApp({
  apiKey: "AIzaSyBP52mREImhNf5pzrYxw2zl9WloR0mjGz0",
  authDomain: "fabulosotodohueleamifabuloso.firebaseapp.com",
  projectId: "fabulosotodohueleamifabuloso",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





