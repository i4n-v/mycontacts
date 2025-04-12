import { ContactForm, Loader, PageHeader } from '@/components';
import { IContactFormRef, IContactFormValues } from '@/components/ContactForm/types';
import { ContactsService } from '@/services';
import { toast } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef<IContactFormRef | null>(null);

  useEffect(() => {
    async function loadContact() {
      try {
        setIsLoading(true);

        const contact = await ContactsService.getContactById(id!);

        if (contactFormRef.current) {
          contactFormRef.current.setFieldsValues(contact);
        }

        setContactName(contact.name);
        setIsLoading(false);
      } catch {
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, navigate]);

  async function handleSubmit({ categoryId, ...values }: IContactFormValues) {
    try {
      const contact = {
        ...values,
        category_id: categoryId,
      };

      const updatedContact = await ContactsService.updateContact(id!, contact);

      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm ref={contactFormRef} buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
