import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element
}


const PrivateRoute = ({children}:Props) => {
    const {isAuthenticated} = useContext(AuthContext)!

    if(!isAuthenticated){
        return <Navigate to="/login"  replace/>
    }

    return children
}

export {PrivateRoute}