import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icons/css/flag-icons.min.css'

import App from './App';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)// passes i18next language  detector to know the user browser language
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'fr', 'es'],
    fallbackLng: 'en',
    detection: {
      order: ['path','cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });
  
  const loadingMarkup = (
    <div className="py-4 text-center">
      <h2>Loading...</h2>
    </div>
  )
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);
