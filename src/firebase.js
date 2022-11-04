import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDBpiqyfm-gZ6RhgzK7zqytwk7TxJyyRBI',
  authDomain: 'airbnb-g2.firebaseapp.com',
  projectId: 'airbnb-g2',
  storageBucket: 'airbnb-g2.appspot.com',
  messagingSenderId: '673550991636',
  appId: '1:673550991636:web:d9fc22b65d4e830f410201',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
