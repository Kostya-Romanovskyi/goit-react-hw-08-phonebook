import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import ListItem from '../ListItem/ListItem'
import { fetchContacts } from 'redux/operations';
import { OrderedList } from '@chakra-ui/react'


function ContactsList() {

    const contacts = useSelector(getContacts)
    const filterQuery = useSelector(getFilter);

    const dispatch = useDispatch()

    const filteredContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <OrderedList ms={0}>
            {
                filteredContact.map(contact => {
                    return (
                        <ListItem color='#A0AEC0' key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
                    )
                })
            }
        </OrderedList>
    );
}

export default ContactsList;