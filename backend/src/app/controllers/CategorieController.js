const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategorieController {
  async index(request, response) {
    const { orderBy } = request.query;

    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const categorie = await CategoriesRepository.findById(id);
    if (!categorie) {
      return response.status(404).json({ error: 'Categorie not found' });
    }

    response.json(categorie);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorieByName = await CategoriesRepository.findByName(name);

    if (categorieByName) {
      return response.status(400).json({ error: 'This name already exists' });
    }

    const contact = await CategoriesRepository.create({
      name,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categorieExists = await CategoriesRepository.findById(id);

    if (!categorieExists) {
      return response.status(404).json({ error: 'Categorie not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorieByName = await CategoriesRepository.findByName(name);

    if (categorieByName) {
      return response.status(400).json({ error: 'This name already exists' });
    }

    const contact = await CategoriesRepository.update(id, {
      name,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categorieExists = await CategoriesRepository.findById(id);

    if (!categorieExists) {
      return response.status(404).json({ error: 'Categorie not found' });
    }

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategorieController();
