
import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {currentUser} = UserAuth()

    return (
        <>
        {
            !currentUser ?
            <Navigate to='/' />
            : children
        }
            
        </>
    );
}

export default ProtectedRoute;
