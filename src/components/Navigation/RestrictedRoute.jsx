import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export default function RestrictedRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? < Navigate to={redirectTo} /> : Component
}
