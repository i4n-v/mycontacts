class ContactController {
  // Lista todos os registros
  index(request, response) {
    response.send('rapaz menino');
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
