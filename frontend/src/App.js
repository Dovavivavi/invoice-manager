import './App.css';
import LoginFooter from './components/LoginFooter/LoginFooter';
import LoginForm from './components/LoginForm/LoginForm';
import Registration from './components/Registration/Registration';
import CreateBills from './components/CreateBills/CreateBills';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu';
import Billlist from './components/Billlist/Billlist';
import { UserContext } from './Contexts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/menu' element={<UserContext.Provider value="context test msg"><MainMenu /></UserContext.Provider>} />
        <Route path='/create' element={<CreateBills />} />
        <Route path='/list' element={<Billlist />} />
      </Routes>
      <LoginFooter />
    </div>
  );
}

export default App;
