import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import { Button, Text, Flex, Spacer } from '@chakra-ui/react';
import { AvatarGeneratorContacts } from 'images/avatar';


const ListItem = ({ id, name, number }) => {
    const dispatch = useDispatch()

    const handleDeleteContact = () => dispatch(deleteContact(id))

    return (
        <Flex as='li' alignItems='center' justifyContent='space-between' mb={6}>
            <AvatarGeneratorContacts />
            <Text as='b' color='#A0AEC0'>{name}</Text>
            <Text as='b' color='#A0AEC0' ml={4}>{number}</Text>
            <Spacer />
            <Button onClick={handleDeleteContact} type='button'>delete</Button>
        </Flex>
    )
}

export default ListItem

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}