import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';
const SignUp = () => {
    const {currentUser, signUp} = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try{ 
            await signUp(email,password)
            navigate('/')
          
        }catch (e){
            console.log(e)
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
                        <h1 className=' text-center text-3xl font-bold'>Sign Up</h1>
                        <form
                            onSubmit={handleSubmit} 
                            className=' w-full py-4 flex flex-col '>
                            <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                             className=' p-3 my-2 bg-gray-700 rounded-sm'
                              type="email"
                               placeholder='email'
                               required />
                            <input
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                             className=' p-3 my-2 bg-gray-700 rounded-sm'
                                type="password"
                                 placeholder='password' 
                                    required />
                        <button
                         className=' bg-red-600 py-3 my-6 font-bold rounded'>Sign Up</button>
                         
                            <div className=' flex justify-between items-center text-sm text-gray-600'>
                                <p ><input className=' mr-1' type="checkbox" /> Remember me</p>
                                <p >Need help?</p>
                            </div>
                                
                            <p className=' py-8 text-gray-600'>Already subscribed to Netflix?
                            <Link to='/logIn'><span className=' text-white'> Sign In.</span></Link>
                            </p>
                            
                        </form>
                        </div>
                    </div>
                </div>
          </div>  
        </>
    );
}

export default SignUp;
