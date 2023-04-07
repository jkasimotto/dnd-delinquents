import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const isProduction = process.env.NODE_ENV === 'production';

const firebaseConfig = {
  apiKey: isProduction
    ? process.env.REACT_APP_PROD_API_KEY
    : process.env.REACT_APP_DEV_API_KEY,
  authDomain: isProduction
    ? process.env.REACT_APP_PROD_AUTH_DOMAIN
    : process.env.REACT_APP_DEV_AUTH_DOMAIN,
  projectId: isProduction
    ? process.env.REACT_APP_PROD_PROJECT_ID
    : process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: isProduction
    ? process.env.REACT_APP_PROD_STORAGE_BUCKET
    : process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: isProduction
    ? process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
    : process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  appId: isProduction
    ? process.env.REACT_APP_PROD_APP_ID
    : process.env.REACT_APP_DEV_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
