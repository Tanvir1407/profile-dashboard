import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';


const Edu = () => {
       const [openForm, setOpenForm] = useState(false);
    const [Education , setEducation] = useState([]);


    const handleToSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const Country = form.country.value;
        const institute = form.institute.value;
        const graduateYear = form.graduateYear.value;
        const dept = form.dept.value;
        const Title = form.title.value;
        const edu = {Country: Country, Institute: institute, graduateYear: graduateYear, Dept: dept , Title:Title}
        const newEdu = [...Education, edu];
        setEducation(newEdu);
        //submit data to backend
      
        form.reset();
        setOpenForm(false)
    }
    const handleToCancel = () => {
        setOpenForm(false)
    }
    const handleToDelete = () => {
         // delete data to server
    }
    return (
        <div className='border-t border-gray-500 pt-5 mb-7'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-semibold '>Education</h1> <button className={`text-green-500 hover:underline ${openForm ? "hidden":""}`} onClick={()=>setOpenForm(!openForm)}>Add New</button>
            </div>
            <form onSubmit={handleToSubmit} className={`p-6 bg-gray-300 rounded-md mt-5 ${openForm ? "block" : "hidden"}`} > 
                
                <select className='w-full h-10 rounded my-1 text-gray-600  font-semibold px-1 focus:outline-0' name="country" >
                    <option value="0" className=' text-gray-600 font-semibold hidden'>Country of College / University</option>
                    <option className='text-gray-600  font-semibold' value="Bangladesh">Bangladesh</option>
                    <option className='text-gray-600  font-semibold' value="India">India</option>
                    <option className='text-gray-600  font-semibold' value="Pakistan">Pakistan</option>
                </select>
                <input className='w-full h-10 rounded my-1 px-2 text-gray-600  font-semibold focus:outline-0' type="text" name="institute" placeholder='College / University Name' /><br />  
                <select className='w-2/5 h-10 rounded-l border-r my-1  text-gray-600  font-semibold px-1 focus:outline-0' name="title" >
                    <option value="0" className=' text-gray-600 font-semibold hidden' >Title</option>
                    <option className='text-gray-600  font-semibold' value="BSc">BSc</option>
                    <option className='text-gray-600  font-semibold' value="BSS">BSS</option>
                    <option className='text-gray-600  font-semibold' value="BA">BA</option>
                </select>
                <input className='w-3/5 h-10 rounded-r my-1  px-2 text-gray-600  font-semibold focus:outline-0' type="text" name="dept" placeholder='Major' /><br />  
                <select className='w-full h-10 rounded my-1  text-gray-600  font-semibold px-1 focus:outline-0' name="graduateYear" >
                    <option value="0" className=' text-gray-600 font-semibold hidden' >Year of graduation</option>
                    <option className='text-gray-600  font-semibold' value="2022">2022</option>
                    <option className='text-gray-600  font-semibold' value="2023">2023</option>
                    <option className='text-gray-600  font-semibold' value="2024">2024</option>
                </select>
                <div className='flex justify-between border-t border-gray-400 mt-3 pt-3'>
                    <button onClick={handleToCancel} type="reset"  className='rounded w-full mr-2 p-2 bg-slate-400 font-semibold text-white'>Cancel</button>
                    <button type='submit' className="rounded w-full ml-2 p-2 bg-green-700 font-semibold text-white disabled:bg-green-400">Add</button>
                </div>
            </form>
            <div className=''>
                {
                    Education.map(edu => <div className='group'>
                        <div className='flex '>
                            <h1>{edu.Title} - {edu.Dept}</h1>
                            <div className=' items-center ml-3 hidden group-hover:flex'>
                                <FaPencilAlt className='mx-1 text-gray-400 duration-500  hover:text-gray-700'></FaPencilAlt>
                                <RiDeleteBinLine onClick={handleToDelete} className='mx-1 text-gray-400 duration-500 h-5 w-5 hover:text-gray-700'></RiDeleteBinLine>
                            </div>
                        </div>
                        <p className='text-gray-600 '>{edu.Institute}, {edu.Country }</p>
                        <p className='text-gray-600 '>Graduate {edu.graduateYear }</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Edu;