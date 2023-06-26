
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../userSlice";

const ProtectedRoute = ({children}) => {
    const currentUser = useSelector(selectCurrentUser)

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
