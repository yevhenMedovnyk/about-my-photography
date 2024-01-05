import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_API_PROJECT_ID,
	messagingSenderId: process.env.FIREBASE_API_MESSAGIN_SENDER_ID,
	appId: process.env.FIREBASE_API_APP_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_API_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
