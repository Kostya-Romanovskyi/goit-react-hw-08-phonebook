import { useDispatch } from "react-redux";
import { filterQuery } from 'redux/filterSlice';
import { Input, Heading } from '@chakra-ui/react';

function Filter() {

    const handleGeyValue = (e) => {
        dispatch(filterQuery(e.currentTarget.value))
    }

    const dispatch = useDispatch()

    return <label>
        <Heading as='h3' size='md' mb={4} color='#A0AEC0'>Find contact by name</Heading>
        <Input mb={4} placeholder="Enter contact name to find him" color='#A0AEC0' onChange={handleGeyValue} name="filter" type="text" />
    </label>
}

export default Filter;


