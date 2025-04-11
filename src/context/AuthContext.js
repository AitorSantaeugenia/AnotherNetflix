import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  async function createUserDocument(user) {
    if (!user) return;
    
    try {
      const userDoc = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDoc);
      
      if (!docSnap.exists()) {
        await setDoc(userDoc, {
          email: user.email,
          savedShows: []
        });
      }
    } catch (error) {
      console.error("Error creating user document:", error);
    }
  }

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await createUserDocument(userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error in signUp:", error);
      throw error;
    }
  }

  async function logIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await createUserDocument(userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error in logIn:", error);
      throw error;
    }
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await createUserDocument(currentUser);
      }
      setUser(currentUser || {});
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
