import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from '@angular/fire/app';
import {provideFirestore} from '@angular/fire/firestore'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAi9tGY_u01UGfKM_y4s1FAx0AkKqtlAa4",
  authDomain: "fir-database-65fa3.firebaseapp.com",
  projectId: "fir-database-65fa3",
  storageBucket: "fir-database-65fa3.firebasestorage.app",
  messagingSenderId: "557591832616",
  appId: "1:557591832616:web:aa991ee88a585f48e9ad1d"
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
