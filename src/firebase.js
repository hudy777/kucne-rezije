// Firebase layer for Kućne režije.
// Exposes window.RezijeBackend with the same small shape the page uses:
//   db.collection(path).add(data) / .onSnapshot(next, err)
//   db.doc(path).set / .update / .delete / .onSnapshot(next, err)
//   auth: onChange(cb), signIn(email, pass), signOut(), isOwner(user)
import { initializeApp } from "firebase/app";
import {
  initializeFirestore, persistentLocalCache, collection, doc, addDoc, setDoc,
  updateDoc, deleteDoc, onSnapshot
} from "firebase/firestore";
import {
  initializeAuth, indexedDBLocalPersistence, browserLocalPersistence,
  onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth";

function start(config, ownerEmail) {
  const app = initializeApp(config);
  // Local cache keeps the last data visible when the phone is offline
  const fs = initializeFirestore(app, { localCache: persistentLocalCache() });
  const auth = initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] });

  const wrapDoc = (s) => ({ id: s.id, exists: s.exists(), data: () => s.data() });

  const db = {
    collection(path) {
      const ref = collection(fs, path);
      return {
        add: (data) => addDoc(ref, data),
        onSnapshot: (next, err) => onSnapshot(ref,
          (snap) => next({ docs: snap.docs.map(wrapDoc), size: snap.size, empty: snap.empty }),
          (e) => err && err(e))
      };
    },
    doc(path) {
      const ref = doc(fs, path);
      return {
        set: (data) => setDoc(ref, data),
        update: (data) => updateDoc(ref, data),
        delete: () => deleteDoc(ref),
        onSnapshot: (next, err) => onSnapshot(ref, (s) => next(wrapDoc(s)), (e) => err && err(e))
      };
    }
  };

  const owner = (ownerEmail || "").trim().toLowerCase();
  const authApi = {
    onChange: (cb) => onAuthStateChanged(auth, cb),
    signIn: (email, pass) => signInWithEmailAndPassword(auth, email.trim(), pass),
    signOut: () => signOut(auth),
    isOwner: (user) => !!(user && user.email && user.email.toLowerCase() === owner)
  };
  return { db, auth: authApi };
}

window.RezijeBackend = { start };
