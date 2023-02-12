import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const Skills = () => {
    const [openForm, setOpenForm] = useState(false);
    const [skills, setSkills] = useState([]);


    const handleToSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const skill = form.skill.value;
        const level = form.level.value;

        const newSkills = [...skills, skill];
        setSkills(newSkills);
        //submit data to backend

        form.reset();
        setOpenForm(false)
    }
    const handleToCancel = () => {
        setOpenForm(false)
    }
    const handleToClick = (e) => {
        console.log(e)
    }
    return (
        <div className='border-t border-gray-500 pt-5 mb-7'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-semibold '>Skills</h1> <button className={`text-green-500 hover:underline ${openForm ? "hidden":""}`} onClick={()=>setOpenForm(!openForm)}>Add New</button>
            </div>
            <form onSubmit={handleToSubmit} className={`p-6 bg-gray-300 rounded-md mt-5 ${openForm ? "block": "hidden"}`} > 
                <input className='w-full h-10 rounded my-1 px-2 text-gray-600  font-semibold focus:outline-0' type="text" name="skill" /><br />             
                <select className='w-full h-10 rounded my-1 text-gray-600  font-semibold px-1 focus:outline-0' name="level" >
                    <option value="0" className=' text-gray-600 font-semibold hidden'>Experience level</option>
                    <option className='text-gray-600  font-semibold' value="beginner">Beginner</option>
                    <option className='text-gray-600  font-semibold' value="Intermediate">Intermediate</option>
                    <option className='text-gray-600  font-semibold' value="Expert">Expert</option>
                </select>
                <div className='flex justify-between border-t border-gray-400 mt-3 pt-3'>
                    <button onClick={handleToCancel} type="reset"  className='rounded w-full mr-2 p-2 bg-slate-400 font-semibold text-white'>Cancel</button>
                    <button type='submit' className="rounded w-full ml-2 p-2 bg-green-700 font-semibold text-white disabled:bg-green-400">Add</button>
                </div>
            </form>
            <div className='flex flex-wrap'>
                {
                    skills.map(skill => 
                        <div className=' text-gray-700 group m-2 font-semibold rounded-lg   bg-slate-50  cursor-pointer flex items-center relative'>
                            <RiDeleteBinLine onClick={handleToClick} className=' absolute hidden group-hover:block bg-gray-100 h-10 p-2 w-9 rounded-l-lg hover:text-red-600 duration-400 '></RiDeleteBinLine>
                            <h1 className='p-2 group-hover:bg-gray-300 rounded-lg '> {skill }</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;