// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
// import "firebase/storage";
// import "firebase/firestore";
// import getFireStore from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPK1IDHazSMb6hFWSzBWfLjn0QhN4ZQ-A",
//   authDomain: "facebook-nextjs-clone-49b51.firebaseapp.com",
//   projectId: "facebook-nextjs-clone-49b51",
//   storageBucket: "facebook-nextjs-clone-49b51.appspot.com",
//   messagingSenderId: "401966621030",
//   appId: "1:401966621030:web:daa5ba43383d7aeb6da8a7",
// };

// // firebase.initializeApp(firebaseConfig);
// firebaseApp = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// // firebase.initializeApp(config);
// const db = firebase.firestore();
// const storage = firebase.storage();
// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// // const app = initializeApp(firebaseConfig);

// export { db, storage };

// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPK1IDHazSMb6hFWSzBWfLjn0QhN4ZQ-A",
//   authDomain: "facebook-nextjs-clone-49b51.firebaseapp.com",
//   projectId: "facebook-nextjs-clone-49b51",
//   storageBucket: "facebook-nextjs-clone-49b51.appspot.com",
//   messagingSenderId: "401966621030",
//   appId: "1:401966621030:web:daa5ba43383d7aeb6da8a7",
// };

// const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const storage = app.storage();

// export { db, storage };

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPK1IDHazSMb6hFWSzBWfLjn0QhN4ZQ-A",
  authDomain: "facebook-nextjs-clone-49b51.firebaseapp.com",
  projectId: "facebook-nextjs-clone-49b51",
  storageBucket: "facebook-nextjs-clone-49b51.appspot.com",
  messagingSenderId: "401966621030",
  appId: "1:401966621030:web:daa5ba43383d7aeb6da8a7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const storage = app.storage();

export { db, storage };

// let app = null;
// if (!firebase.apps.length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// firebase.initializeApp(firebaseConfig);

// if (firebase.apps === undefined) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
