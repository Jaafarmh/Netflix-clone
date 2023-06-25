import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const LogIn = () => {
    const navigate = useNavigate();
    const {currentUser, logIn} = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [error, setError] = useState('')

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            await logIn(email, password)
            setError('')
            navigate('/account')
           
        }
        catch(e) {
            switch (e.message) {
                case 'Firebase: Error (auth/user-not-found).' :
                    setError(`User doesn't exist`)
                    
                    break
                case 'Firebase: Error (auth/wrong-password).' :
                    setError(`Password is incorrect`)
                    break
                default :
                setError(`${e.message}`)
            }

            }
            setEmail('')
            setPassword('')
            
    }

    return (
        <>
        <div className=" w-full h-screen">
          <img className=' hidden sm:block w-full h-full absolute object-cover' src="https://bramptonist.com/wp-content/uploads/2018/06/netflix-image.jpg" alt="/" />
              <div className=' bg-black/70 fixed top-0 left-0 w-full h-full'></div>
              <div className=' w-full z-20 fixed px-4 py-24'>
                  <div className=' max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>

                      <div className=' max-w-[320px] py-16 mx-auto' >
                      <h1 className=' text-center text-3xl font-bold'>Sign In</h1>
                      {error? <p className=' text-white p-3 mt-2 bg-red-900 rounded-md'>{error}</p>: null}
                      <form 
                      onSubmit={handleSubmit}
                        className=' w-full py-4 flex flex-col '>

                          <input 
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            className=' p-3 my-2 bg-gray-700 rounded-sm'
                             type="email"
                              placeholder='email'
                              required />
                          <input 
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            className=' p-3 my-2 bg-gray-700 rounded-sm'
                            type="password"
                            placeholder='password'
                            required />
                      <button className=' bg-red-600 py-3 my-6 font-bold rounded '>Sign In</button>
                          
                          <div className=' flex justify-between items-center text-sm text-gray-600'>
                              <p ><input className=' mr-1' type="checkbox" /> Remember me</p>
                              <p >Need help?</p>
                          </div>
                              
                          <p className=' py-8 text-gray-600'>New to Netflix?
                          <Link to='/signUp'><span className=' text-white'> Sign Up.</span></Link>
                          </p>
                          
                      </form>
                      </div>
                  </div>
              </div>
        </div>  
      </>
    );
}

export default LogIn;
