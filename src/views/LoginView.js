import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Box,
  useToast,
} from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      return toast({
        title: `Please, fill the empty fields`,
        status: 'warning',
      });
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Heading mb={4} size="lg" color="#A0AEC0">
        Log In
      </Heading>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <Input
            placeholder="Enter e-mail"
            _placeholder={{ opacity: 0.4, color: '#90CDF4' }}
            color="#A0AEC0"
            mb={6}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <InputGroup>
            <Input
              mb={6}
              pr="4rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              _placeholder={{ opacity: 0.4, color: '#90CDF4' }}
              color="#A0AEC0"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </label>
        <Box display="flex">
          <Button ml="auto" rightIcon={<MdLogin />} type="submit">
            Log In
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginView;
