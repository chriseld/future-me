import _ from 'lodash';
import './style.css';
import Logo from './img/logo-lg.png';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
   });
}

if(!localStorage.getItem("hasProfile")) {
  
} else {
  //do other stuff
}