import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';


const Certification = () => {
      const [openForm, setOpenForm] = useState(false);
    const [Certificate, setCertificate] = useState([]);


    const handleToSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const certificate = form.certificate.value;
        const institute = form.institute.value;
        const Year = form.Year.value;

        const Award = {certificate : certificate, institute:institute, Year: Year}
        const newAward = [...Certificate, Award]
        setCertificate(newAward);    
        //submit data to backend

        form.reset();
        setOpenForm(false)
    }
    const handleToCancel = () => {
        setOpenForm(false)
    }
    const handleToDelete = () => {
        console.log()
    }
    return (
        <div className='border-t border-gray-500 pt-5 mb-7'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-semibold '>Certification</h1> <button className={`text-green-500 hover:underline ${openForm ? "hidden":""}`} onClick={()=>setOpenForm(!openForm)}>Add New</button>
            </div>
            <form onSubmit={handleToSubmit} className={`p-6 bg-gray-300 rounded-md mt-5 ${openForm ? "block" : "hidden"}`} > 
                
                <input className='w-full h-10 rounded my-1 px-2 text-gray-600  font-semibold focus:outline-0' type="text" name="certificate" placeholder='Certificate Or Award ' /><br />  
                <input className='w-full h-10 rounded-r my-1  px-2 text-gray-600  font-semibold focus:outline-0' type="text" name="institute" placeholder='Certified From (E.G. Adobe)' /><br />  
                <select className='w-1/2 h-10 rounded my-1  text-gray-600  font-semibold px-1 focus:outline-0' name="Year" >
                    <option value="0" className=' text-gray-600 font-semibold hidden' >Year</option>
                    <option className='text-gray-600  font-semibold' value="2022">2022</option>
                    <option className='text-gray-600  font-semibold' value="2023">2023</option>
                    <option className='text-gray-600  font-semibold' value="2024">2024</option>
                </select>
                <div className='flex justify-between border-t border-gray-400 mt-3 pt-3'>
                    <button onClick={handleToCancel} type="reset"  className='rounded w-full mr-2 p-2 bg-slate-400 font-semibold text-white'>Cancel</button>
                    <button type='submit' className="rounded w-full ml-2 p-2 bg-green-700 font-semibold text-white disabled:bg-green-400">Add</button>
                </div>
            </form>
            <div>
                {
                    Certificate.map(data => <div className='group'>
                        
                        <div className='flex '>
                            <h1>{data.certificate}</h1>
                            <div className=' items-center ml-3 hidden group-hover:flex'>
                                <FaPencilAlt className='mx-1 text-gray-400 duration-500  hover:text-gray-700'></FaPencilAlt>
                                <RiDeleteBinLine onClick={handleToDelete} className='mx-1 text-gray-400 duration-500 h-5 w-5 hover:text-gray-700'></RiDeleteBinLine>
                            </div>
                        </div>
                        <div className='text-gray-600'>{data.institute}, {data.Year } </div>
                    </div>)
                    }
            </div>
        </div>
    );
};

export default Certification;