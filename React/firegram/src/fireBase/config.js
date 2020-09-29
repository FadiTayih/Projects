import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBXWjWdk12SJkojqlH-KVVCVkm1ht_QyYA',
  authDomain: 'firegram-49351.firebaseapp.com',
  databaseURL: 'https://firegram-49351.firebaseio.com',
  projectId: 'firegram-49351',
  storageBucket: 'firegram-49351.appspot.com',
  messagingSenderId: '683441630392',
  appId: '1:683441630392:web:3afd93df8f2f7aaa6a984d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };
