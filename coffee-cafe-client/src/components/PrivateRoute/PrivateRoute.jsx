import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <progress className="progress progress-error w-56"></progress>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;