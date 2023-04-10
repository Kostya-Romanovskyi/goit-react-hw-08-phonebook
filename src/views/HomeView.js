import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import monkey from '../images/monkey.gif';

const HomeView = () => {
  return (
    <>
      <Flex mb={6} alignItems="center" justifyContent="space-around">
        <Heading mb={6} color="#A0AEC0">
          Hello!
        </Heading>

        <img src={monkey} width={200} height={300} alt="Greeting monkey" />
      </Flex>
      <Box textAlign="center">
        <Text as="b" color="#A0AEC0">
          Register or log in to your account to start using the app)
        </Text>
      </Box>
    </>
  );
};
export default HomeView;
