import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList';
function App() {

  const contacts = [
    {
      id: '1',
      name: 'Dipesh',
      email: 'dipesh123@gmail.com'
    },
    {
      id: '2',
      name: 'Dinesh',
      email: 'dinesh123@gmail.com'
    }
  ]
  return (
    <div className='ui container'>
     <Header />
     <AddContact />
     <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
