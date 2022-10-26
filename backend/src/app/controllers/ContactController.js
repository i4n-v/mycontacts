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
  store() {

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
