import { Link, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/auth/authSlice"
import { Link as ChakraLink, Flex, Spacer, Box } from '@chakra-ui/react'
import UserMenu from "components/UserMenu/UserMenu"
import AuthNav from "components/authNav/AuthNav"


const HeaderApp = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const { pathname } = useLocation()
    return (
        <div>
            <Box py={6}>
                <Flex alignItems='center'>
                    <ChakraLink
                        mt={1}
                        fontSize='lg'
                        lineHeight='normal'
                        fontWeight='semibold'
                        color={pathname === '/' ? "#E2E8F0" : "#A0AEC0"}
                        as={Link}
                        to='/'>Home</ChakraLink>


                    {isLoggedIn &&
                        <ChakraLink
                            mt={1}
                            ml={4}
                            fontSize='lg'
                            lineHeight='normal'
                            fontWeight='semibold'
                            color={pathname === '/contacts' ? "#E2E8F0" : "#A0AEC0"}
                            as={Link}
                            to="/contacts">Phonebook</ChakraLink>
                    }
                    <Spacer />

                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Flex>
            </Box>
            <Outlet />
        </div>
    )
}
export default HeaderApp