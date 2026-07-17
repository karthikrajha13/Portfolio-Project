import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIuxnDNZQce1N6YUY2ZsNAcNq3_GD0cOY",
  authDomain: "portfolio-contact-4e3f0.firebaseapp.com",
  projectId: "portfolio-contact-4e3f0",
  storageBucket: "portfolio-contact-4e3f0.firebasestorage.app",
  messagingSenderId: "2254238393",
  appId: "1:2254238393:web:6759c5f630a4539e43a168",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("Firestore Connected");

console.log("Firebase Connected");

const form = document.getElementById("contactForm");

const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    sendBtn.disabled = true;

    sendBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2"></span>
    Sending...
`;
    await addDoc(collection(db, "contactMessages"), {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      subject: document.getElementById("subject").value,

      message: document.getElementById("message").value,

      phone: document.getElementById("phone").value,

      location: document.getElementById("location").value,

      createdAt: serverTimestamp(),
    });

    Swal.fire({
      icon: "success",

      title: "Message Sent!",

      text: "Thank you for contacting me. I'll get back to you soon.",

      confirmButtonColor: "#2563eb",
    });

    form.reset();
    sendBtn.disabled = false;

    sendBtn.innerHTML = "Send Message";
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",

      title: "Oops!",

      text: "Unable to send your message.",
    });
    sendBtn.disabled = false;

    sendBtn.innerHTML = "Send Message";
  }
});
