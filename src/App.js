import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import Account from './pages/account';
import ProtectedRoute from './components/protectedRoute';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setCurrentUser } from './userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            dispatch(setCurrentUser(user))
        })
        return ()=> unsub();
    },[])

  return (
    <>
      
     <Navbar />    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
      </Routes>

    </>

   
  );
}

export default App;

    

