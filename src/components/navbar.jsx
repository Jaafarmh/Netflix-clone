import {Link} from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const Navbar = () => {
    const {currentUser, logOut} = UserAuth();
    return (
        <div className=' absolute z-50 flex items-center p-4 justify-between w-full'>

        <Link to='/'>
            <h1 className=' text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>

          {
            currentUser ? 
            <div>
            <Link to='/account'>
                <button className=' text-white pr-4'>Account</button>
            </Link>
            <Link to='/'>
                <button
                onClick={logOut}
                className=' text-white bg-red-600 px-5 py-3 rounded'>Log Out</button>
                
            </Link>
            </div>
            :  
             <div>
            <Link to='/logIn'>
                <button className=' text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signUp'>

                <button className=' text-white bg-red-600 px-5 py-3 rounded'>Sign Up</button>
            </Link>
            </div>
          }

        </div>
    );
}

export default Navbar;
