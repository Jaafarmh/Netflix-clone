
import SavedShowes from "../components/savedShowes";
const Account = () => {

    return (
    <>
    <div className=" w-full text-white ">

     <img className=' w-full h-[500px] object-cover' src="https://bramptonist.com/wp-content/uploads/2018/06/netflix-image.jpg" alt="/" />
    
        <div className=" bg-black/60 absolute w-full h-[600px] top-0 left-0 "></div>
        <div className=" absolute top-[18%] p-4 md:p-8">
            <h1 className=" text-3xl font-bold md:text-5xl">My Shows</h1>
        </div>
    </div>
    <SavedShowes />
    </>

    );
}

export default Account;
 