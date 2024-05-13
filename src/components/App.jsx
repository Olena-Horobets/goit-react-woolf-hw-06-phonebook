import Filter from './Filter';
import Form from './Form';
import ContactsList from './ContactsList';

function App() {
  return (
    <div className="container">
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
}

export { App };
