import './App.css';
import LoginHeader from './components/LoginHeader/LoginHeader';
import LoginFooter from './components/LoginFooter/LoginFooter';
import LoginForm from './components/LoginForm/LoginForm';
import Registration from './components/Registration/Registration';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LoginHeader />
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <LoginFooter />
    </div>
  );
}

export default App;
