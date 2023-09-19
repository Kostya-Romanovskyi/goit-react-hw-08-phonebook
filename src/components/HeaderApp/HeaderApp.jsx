import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';
import { Link as ChakraLink, Flex, Spacer } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/authNav/AuthNav';
import { FlexContainer, Box, NavItems } from './HeaderApp.styled';

const HeaderApp = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { pathname } = useLocation();
  return (
    <div>
      <Box>
        <FlexContainer alignItems="center" justifyContent="space-between">
          <NavItems>
            <ChakraLink
              mt={1}
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
              color={pathname === '/' ? '#E2E8F0' : '#A0AEC0'}
              as={Link}
              to="/"
            >
              Home
            </ChakraLink>

            {isLoggedIn && (
              <ChakraLink
                mt={1}
                ml={4}
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                color={pathname === '/contacts' ? '#E2E8F0' : '#A0AEC0'}
                as={Link}
                to="/contacts"
              >
                Phonebook
              </ChakraLink>
            )}
          </NavItems>

          {/* <Spacer /> */}

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </FlexContainer>
      </Box>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default HeaderApp;
