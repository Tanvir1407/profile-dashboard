import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { TbDots} from "react-icons/tb";
import { IoIosArrowDown} from "react-icons/io";
import { FiEdit} from "react-icons/fi";

const Profile = () => {
  const [dropDown, setDropdown] = useState(true);
  const [openForm, setOpenForm] = useState(true);
  const [Tagline, setTagline] = useState('')
  
  const handleDropDown = () => {
    setDropdown(!dropDown);
  }
  const handleToSubmit = (e) => {
    const Tag = e.target.tag.value;
    setTagline(Tag);
    e.preventDefault();
    setOpenForm(!openForm);
  }
  const handleToCancel = () => {
    setOpenForm(!openForm);
  }
  return (
    <div className="bg-gray-200  rounded  md:mt-12 md:mx-20 md:p-4">
      <div className="lg:flex lg:justify-between">
        <div className="md:flex md:items-center md:mb-20">{/*profile left side*/}
          <div>
            <img
              className="mx-auto p-4 h-60 w-60 md:h-52 md:w-52 rounded-full md:p-0  "
              src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              alt="user"
            />
          </div>
          <div className="md:ml-16">
            <h1 className="text-center md:text-left text-3xl text-gray-800 font-serif font-bold">
              User Name
            </h1>
            <h4 className={`text-center  mb-4 md:text-left text-xl text-gray-800 font-serif ${!openForm ?"hidden":""}`}>
              {Tagline.length > 1 ? Tagline : "Input your Experience " } <FiEdit onClick={()=>setOpenForm(!openForm)} className="inline mx-3 text-gray-500 cursor-pointer hover:text-gray-700"></FiEdit>
            </h4>
            <form onSubmit={handleToSubmit} className={`mx-6 mb-6 md:mx-0 ${openForm ? "hidden":""}`}>
              <div className="mt-2">
                <input className="w-full px-2 rounded mb-2 py-1 " type="text" name="tag" />
              </div>
              <div  className='flex justify-between mb-2 '>
                  <button onClick={handleToCancel} type="reset"  className='rounded w-full mr-2 px-2 py-1 bg-slate-400 font-semibold text-white'>Cancel</button>
                  <button type='submit' className="rounded w-full ml-2 px-2 py-1 bg-green-700 font-semibold text-white disabled:bg-green-400">Update</button>
              </div>
            </form>
            <div className="flex justify-center md:justify-start">
                <button className=" p-2  border-2 border-gray-500 rounded font-serif text-gray-700 hover:text-white hover:bg-slate-700 duration-300">
              Preview Creativeator Profile
            </button>
            </div>
          </div>
        </div>
        <div className="md:p-4 md:mt-0 w-80 md:w-96 mt-10  mx-auto"> {/*profile right side*/}
          <div className="flex justify-between w-80 py-3 ">
            <div className="flex items-center">
              <IoLocationSharp className="text-gray-600"></IoLocationSharp>
              <p className="pl-4 text-gray-700 text-lg">From</p>{" "}
            </div>{" "}
            <p className="text-lg font-semibold">Bangladesh</p>
          </div>
          <div className="flex justify-between w-80 py-3 ">
            <div className="flex items-center">
              <FaUserAlt className="text-gray-600"></FaUserAlt>{" "}
              <p className="pl-4 text-gray-700 text-lg">Member since</p>{" "}
            </div>
            <p className="font-semibold text-lg">Oct 2020</p>
          </div>
          <div className="flex justify-between w-80 py-3 mt-6 border-t border-gray-400">
            <div className="flex items-center">
              <MdEventAvailable className="text-gray-600"></MdEventAvailable>
              <p className="pl-4 text-gray-700 text-lg">Available</p>
            </div>
            <button className="p-1 border-2 border-gray-500 rounded font-serif text-gray-800 hover:text-white hover:bg-slate-700 duration-300">
              set Available
            </button>
          </div>
        </div>
      </div>
    <div className="mt-4 border-t border-gray-400 pt-4 ">       
      <div  className="hidden md:flex justify-between items-center">{/*link button for large device*/}
        <div> 
          <button className="mx-1 p-1 lg:py-2 lg:px-4 font-semibold text-gray-600 text-md lg:text-lg lg:mx-4 hover:border border-gray-700 duration-300 rounded ">
            Dashboard
          </button>
          <button className="mx-1 p-1 lg:py-2 lg:px-4 font-semibold text-gray-600 text-md lg:text-lg lg:mx-4 hover:border border-gray-700 duration-300 rounded ">
            My Business
          </button>
          <button className="mx-1 p-1 lg:py-2 lg:px-4 font-semibold text-gray-600 text-md lg:text-lg lg:mx-4 hover:border border-gray-700 duration-300 rounded ">
            Growth and Marketing
          </button>
          <button className="mx-1 p-1 lg:py-2 lg:px-4 font-semibold text-gray-600 text-md lg:text-lg lg:mx-4 hover:border border-gray-700 duration-300 rounded ">
            Analytics
          </button>
        </div>
        <div>
          <TbDots size={40} className="px-2 bg-gray-300 hover:bg-gray-400 duration-300 rounded"></TbDots>
        </div>
      </div>       
     <div className="md:hidden flex justify-between px-1"> {/*link button for small device*/}
        <div className="flex "> 
            <button  className="py-2 px-4 font-semibold text-gray-700 text-lg mx-4 hover:bg-gray-600 duration-300 rounded hover:text-white ">
            Dashboard
          </button>
          <button onClick={handleDropDown}  className="flex items-center relative py-2 px-4 font-semibold text-gray-700 text-lg mx-4 duration-500 hover:bg-gray-600 duration-300 rounded hover:text-white">
              More <IoIosArrowDown className="px-1"></IoIosArrowDown>
              <div className={`absolute z-20 bg-slate-600 p-2 rounded  top-11 ${dropDown ?"hidden" :"block" } `}>
              <button className="my-1  border-2 border-stone-100 w-32 rounded ">item 1</button> <br />
              <button className="my-1  border-2 border-stone-100 w-32 rounded ">item 1</button> <br />
              <button className="my-1  border-2 border-stone-100 w-32 rounded ">item 1</button> <br />
              <button className="my-1  border-2 border-stone-100 w-32 rounded ">item 1</button> <br />
            </div>
          </button>
            
        </div>
        <div>
          <TbDots size={40} className="px-2 bg-gray-300 hover:bg-gray-400 duration-300 rounded"></TbDots>
        </div>          
      </div>
    </div>
  </div>  
  );
};

export default Profile;
