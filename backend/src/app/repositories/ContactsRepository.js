const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Jõao Gabriel',
    email: 'joao@email.com',
    phone: '81911111111',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Julia Rodrigues',
    email: 'julia@email.com',
    phone: '81922222222',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Maria Antonieta',
    email: 'maria@email.com',
    phone: '81933333333',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Alexa Freitas',
    email: 'alexa@email.com',
    phone: '81944444444',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Luiz Gonçalo',
    email: 'luiz@email.com',
    phone: '81955555555',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      const index = contacts.findIndex((contact) => contact.id === id);
      contacts.splice(index, 1);

      resolve();
    });
  }

  create(data) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        ...data,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id, name, email, phone, category_id,
      };

      const index = contacts.findIndex((contact) => contact.id === id);
      contacts[index] = updatedContact;

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
