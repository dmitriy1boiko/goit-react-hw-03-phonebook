import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './section/Section';
import { Bookcontact } from './bookcontact/Bookcontact';
import { nanoid } from 'nanoid';
import { Contacts } from './contacts/Contacts';
import { FilterContacts } from './filter-contacts/FilterContacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  findContact(contact) {
    return this.state.contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  }

  addContact = contact => {
    if (this.findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };
  handleChengeInput = filter => {
    this.setState({ filter });
  };
  applyFilters = () => {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.number.includes(this.state.filter)
    );
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Section title="Phone book">
          <Bookcontact addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length !== 0 ? (
            <>
              <FilterContacts
                filter={filter}
                onChangeInput={this.handleChengeInput}
              />
              <Contacts
                contacts={this.applyFilters()}
                onDeleteContact={this.handleDeleteContact}
              />
            </>
          ) : (
            <p>No contacts</p>
          )}
        </Section>
      </Container>
    );
  }
}
