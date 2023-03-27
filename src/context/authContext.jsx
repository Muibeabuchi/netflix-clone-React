import { createContext,useContext,useState,useEffect } from "react";
import { onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { auth,db } from "../firebase.config";
const AuthContext = createContext();

export function AuthContextProvider ({children}){

    const [user,setUser] = useState({});
    console.log(user);

    function signUp(email,password){
         createUserWithEmailAndPassword (auth,email,password)
            setDoc(doc(db,'users',email),{
            savedShows:[],
                });
    } 

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    } 
    function logOut(){
        return signOut(auth);
    } 


    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                console.log(currentUser);
            }else{
                setUser({});
            }
        })

        return ()=> unsuscribe();
    },[])

    return(
        <AuthContext.Provider value={{logOut,logIn,signUp,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthContext);
}