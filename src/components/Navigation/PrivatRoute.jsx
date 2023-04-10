import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';
import { getUserRefresh } from 'redux/auth/authSlice';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefresh = useSelector(getUserRefresh);
    const shouldRedirect = !isRefresh && !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component
}
