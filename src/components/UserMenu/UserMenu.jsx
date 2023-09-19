import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Button } from '@chakra-ui/react';
import { ImExit } from 'react-icons/im';
import { Flex, Spacer } from '@chakra-ui/react';
import { AvatarGeneratorUser } from 'images/avatar';
import { Styledtext } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center">
      <Styledtext>Welcome, {userName}</Styledtext>
      <AvatarGeneratorUser />

      <Spacer ml={6} />

      <Button
        size="sm"
        rightIcon={<ImExit />}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
export default UserMenu;
