const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      const index = contacts.findIndex((contact) => contact.id === id);
      contacts.splice(index, 1);

      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
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
