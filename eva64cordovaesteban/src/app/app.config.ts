import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"eva64cordovaesteban","appId":"1:722492261343:web:0e22620de8cc2fa8f53a6a","storageBucket":"eva64cordovaesteban.appspot.com","apiKey":"AIzaSyDaSN_6r2Q0EZUwfW_53inWCxH1dSiNS18","authDomain":"eva64cordovaesteban.firebaseapp.com","messagingSenderId":"722492261343","measurementId":"G-ZHGYS5FRD5"})), provideFirestore(() => getFirestore())]
};
