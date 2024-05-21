// import { useContext, useEffect, useState } from "react";
// import { createContext } from "react";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import PropTypes from "prop-types";

// const AuthContext = createContext();

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ logIn, logOut, signUp, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export function UserAuth() {
//   return useContext(AuthContext);
// }
