import { Routes as ReactRoutes, Route } from 'react-router';
import { EditContact, Home, NewContact } from './pages';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </ReactRoutes>
  );
}
