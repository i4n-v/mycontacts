const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Lista todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter um registro
  show() {

  }

  // Criar um novo registro
  store() {

  }

  // Atualizar um registro
  update() {

  }

  // Deletar um registro
  delete() {

  }
}

// Singleton pattern
module.exports = new ContactController();
