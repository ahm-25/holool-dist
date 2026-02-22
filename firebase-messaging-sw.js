// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyC1mcvTH7_MujjhaYfjGrKtCClcbgqJeNQ",
  authDomain: "lucky-cebd3.firebaseapp.com",
  projectId: "lucky-cebd3",
  storageBucket: "lucky-cebd3.firebasestorage.app",
  messagingSenderId: "403532191120",
  appId: "1:403532191120:web:bd4be032286cdff4900f15",
  measurementId: "G-YV5DH9RH1S",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  //   if(process.client){

  //       location.reload()
  //   }

  // Customize notification here
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   // icon: "~/assets/images/BellBing.svg",
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);

  // self.addEventListener("notificationclick", (event) => {
  //   event.notification.close();
  //   event.waitUntil(
  //     clients.openWindow("https://sadigalbia.net/") // Update with your URL
  //   );
  // });
});
