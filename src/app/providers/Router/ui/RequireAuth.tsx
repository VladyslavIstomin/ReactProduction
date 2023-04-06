import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const authUser = useSelector(getUserData);
    const location = useLocation();

    if (!authUser) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}