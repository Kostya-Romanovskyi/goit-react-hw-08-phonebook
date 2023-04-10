import { useSelector } from "react-redux"
import { getUserName } from "redux/auth/authSlice"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { Button } from '@chakra-ui/react'
import { ImExit } from 'react-icons/im'
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { AvatarGeneratorUser } from "images/avatar"


const UserMenu = () => {
    const userName = useSelector(getUserName)
    const dispatch = useDispatch()
    return (
        <Flex alignItems='center'>
            <Text as='b' color='#A0AEC0' mt={2}>Welcome, {userName}</Text>
            <AvatarGeneratorUser />


            <Spacer ml={6} />

            <Button size='sm' rightIcon={<ImExit />} type="button" onClick={() => dispatch(logOut())}>Logout</Button>
        </Flex>
    )
}
export default UserMenu