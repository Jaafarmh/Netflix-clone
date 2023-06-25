import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home';
import { UserProvider } from './context/authContext';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import Account from './pages/account';
import ProtectedRoute from './components/protectedRoute';
function App() {
 
  return (
    <>
  <UserProvider>
     <Navbar />    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
      </Routes>
  </UserProvider>
    </>

   
  );
}

export default App;

    

