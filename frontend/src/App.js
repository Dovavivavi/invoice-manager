import './App.css';
import LoginHeader from './components/LoginHeader/LoginHeader';
import LoginFooter from './components/LoginFooter/LoginFooter';
import LoginForm from './components/LoginForm/LoginForm';
import Registration from './components/Registration/Registration';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  return (
    <div className="App">
      <LoginHeader />
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/menu' element={<MainMenu />} />
      </Routes>
      <LoginFooter />
    </div>
  );
}

export default App;
