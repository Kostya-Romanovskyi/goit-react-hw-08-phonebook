import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getUserRefresh, getIsLoggedIn } from 'redux/auth/authSlice';
import { Container } from '@chakra-ui/react';
import HeaderApp from 'components/HeaderApp/HeaderApp';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsListViews from 'views/ContactsListViews';
import PrivateRoute from 'components/Navigation/PrivatRoute';
import RestrictedRoute from 'components/Navigation/RestrictedRoute';




// const HeaderApp = lazy(() => import('./components/HeaderApp/HeaderApp'));
// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsListViews = lazy(() => import('./views/ContactsListViews'));



const App = () => {
    const dispatch = useDispatch()
    const isUserRefresh = useSelector(getUserRefresh)
    const IsLoggedIn = useSelector(getIsLoggedIn)
    console.log(IsLoggedIn)

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);


    return (
        !isUserRefresh && (
            <Container maxW={IsLoggedIn ? '650px' : '550px'}>
                <Routes>
                    <Route path='/' element={<HeaderApp />}>
                        {/* <Route index element={<HomeView />} /> */}
                        <Route index
                            path="/"
                            element={
                                <RestrictedRoute component={<HomeView />} redirectTo="/contacts" />
                            }
                        />
                        {/* <Route path='/register' element={<RegisterView />} /> */}
                        <Route
                            path="/register"
                            element={
                                <RestrictedRoute component={<RegisterView />} redirectTo="/contacts" />
                            }
                        />
                        {/* <Route path='/login' element={<LoginView />} /> */}
                        <Route
                            path="/login"
                            element={
                                <RestrictedRoute component={<LoginView />} redirectTo="/contacts" />
                            }
                        />
                        <Route path='/contacts' element={<PrivateRoute component={<ContactsListViews />} redirectTo='/login' />} />

                    </Route>
                </Routes>
            </Container>
        )
    );

}

export default App;
