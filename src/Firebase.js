import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDfnYxoz5UfzAXNIAHkV8Iv7GFOnrWcPS8",
  authDomain: "noteproject-db928.firebaseapp.com",
  projectId: "noteproject-db928",
  storageBucket: "noteproject-db928.firebasestorage.app",
  messagingSenderId: "628570119325",
  appId: "1:628570119325:web:c9be113b4091f77f570874"
};


const app = initializeApp(firebaseConfig);
export default app