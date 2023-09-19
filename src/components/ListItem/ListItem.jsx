import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, Spacer } from '@chakra-ui/react';
import { AvatarGeneratorContacts } from 'images/avatar';
import { Item, Name, Number } from './ListItem.style';

const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <Item>
      <AvatarGeneratorContacts />
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Spacer />
      <Button onClick={handleDeleteContact} type="button">
        delete
      </Button>
    </Item>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
