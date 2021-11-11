import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import initilaizationAuth from "../Firebase/Firebase-init";
initilaizationAuth();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }
    // Get photoUrl
    function getPhoto(e) {
        setPhoto(e?.target?.value);
    }
    // sign up with email password
    function singUp() {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // set name and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then((result) => {
                Swal.fire(
                    "Good job!",
                    "Set Image Your Profile SuccessFull!",
                    "success"
                )
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            });
    }
    // Email sign in
    function signInWithEmail() {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // reset password
    function passwordReset() {
        setIsLoading(true)
        return sendPasswordResetEmail(auth, email);
    }
    // google sign in
    function signinGoogle() {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    // sign out
    function logOut() {
        setIsLoading(true)
        return signOut(auth);
    }
    return {
        signInWithEmail,
        logOut,
        signinGoogle,
        user,
        setUser,
        getPassword,
        getEmail,
        singUp,
        getPhoto,
        getName,
        passwordReset,
        isLoading,
        setNameAndImage,
        setIsLoading
    }
}
export default UseFirebase;