import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import {
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
    FormLabel,
    useToast,
} from '@chakra-ui/react';
import { MdAddCall } from 'react-icons/md';

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const toast = useToast();

    const selectorListContacts = useSelector(getContacts);

    const handleChange = evt => {
        const inputName = evt.target.name;

        switch (inputName) {
            case 'name':
                setName(evt.target.value);
                break;
            case 'number':
                setNumber(evt.target.value);
                break;
            default:
                return '';
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        const newContact = { name, number };

        const alertContact = selectorListContacts.find(
            contact => contact.name === newContact.name
        );

        if (alertContact) {
            reset();

            return toast({
                title: `This contact is already in your book`,
                status: 'warning',
            });
        }

        if (name === '' || number === '') {
            return toast({
                title: `Please, fill the empty fields`,
                status: 'warning',
            });
        }

        dispatch(addContact(newContact));

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="name" fontSize={20} color="#A0AEC0">
                Name
            </FormLabel>

            <Input
                placeholder="Enter contact name"
                mb={4}
                color='#A0AEC0'
                onChange={handleChange}
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id="name"
            />

            <FormLabel htmlFor="number" fontSize={20} color="#A0AEC0">
                Number
            </FormLabel>

            <InputGroup>
                <InputLeftAddon children="+380" />
                <Input
                    placeholder="Enter contact number"
                    mb={6}
                    color='#A0AEC0'
                    onChange={handleChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id="number"
                />
            </InputGroup>

            <Button rightIcon={<MdAddCall />} type="submit">
                Add contact
            </Button>
        </form>
    );
};

export default Form;
