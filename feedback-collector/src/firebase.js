// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const submitFeedback = async (data) => {
  const feedbackRef = ref(db, "feedbacks");
  await push(feedbackRef, {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

export const getAllFeedbacks = async () => {
  const feedbackRef = ref(db, "feedbacks");
  const snapshot = await get(feedbackRef);
  return snapshot.exists() ? Object.values(snapshot.val()) : [];
};

export { db, ref, push };
