import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Thêm dòng này để dùng Database

const firebaseConfig = {
  apiKey: "AIzaSyDTeoMZbUF67rINsYSLKMaHMtds95PVOr8",
  authDomain: "japan-5e21f.firebaseapp.com",
  projectId: "japan-5e21f",
  storageBucket: "japan-5e21f.firebasestorage.app",
  messagingSenderId: "649326861651",
  appId: "1:649326861651:web:e96c4f6d5ed97f20d015a6",
  measurementId: "G-97RYZKLXPF"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Xuất ra database để các phần khác của web gọi dùng
export const db = getFirestore(app);