import SectionTitle from 'components/Section/SectionTitle';
import Form from 'components/Form/Form';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const ContactsListViews = () => {
  return (
    <>
      <SectionTitle title="Phonebook">
        <Form />
      </SectionTitle>

      <Section subTitle="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
export default ContactsListViews;
