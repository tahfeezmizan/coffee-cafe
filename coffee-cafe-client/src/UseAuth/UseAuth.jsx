import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";


const UseAuth = () => {
    const createContext = useContext(AuthContext)
    return createContext;
};

export default UseAuth;