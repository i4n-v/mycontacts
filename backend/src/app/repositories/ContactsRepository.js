const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Jõao Gabriel',
    email: 'joao@email.com',
    phone: '81911111111',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Julia Rodrigues',
    email: 'julia@email.com',
    phone: '81922222222',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Maria Antonieta',
    email: 'maria@email.com',
    phone: '81933333333',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Alexa Freitas',
    email: 'alexa@email.com',
    phone: '81944444444',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Luiz Gonçalo',
    email: 'luiz@email.com',
    phone: '81955555555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
