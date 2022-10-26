const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Lista todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  // Obter um registro
  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  // Criar um novo registro
  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  // Atualizar um registro
  update() {

  }

  // Deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

// Singleton pattern
module.exports = new ContactController();
