import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {person,loading} = useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(person){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRout;