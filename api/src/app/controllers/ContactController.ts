import { Request, Response } from 'express';
import ContactsRepository from '../repositories/ContactsRepository';
import { IOderBy } from '../../@types/IDatabase';

class ContactController {
  // Lista todos os registros
  async index(request: Request, response: Response) {
    const { orderBy } = request.query as Record<'orderBy', IOderBy>;

    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  // Obter um registro
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  // Criar um novo registro
  async store(request: Request, response: Response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail) {
      return response.status(400).json({ error: 'This e-mail already in use' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  // Atualizar um registro
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  // Deletar um registro
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

// Singleton pattern
export default new ContactController();
