import React, { useState } from "react";

const Description = () => {
  const [openForm, setOpenForm] = useState(true);
  const [Discription, setDiscription] = useState('')

   const handleToSubmit = (e) => {
        e.preventDefault()
     const form = e.target;
     const data = form.discription.value;
     setDiscription(data);
     
        //submit data to backend

        form.reset();
        setOpenForm(true)
    }
      const handleToCancel = () => {
        setOpenForm(true)
    }
  return (
    <div className="mb-7">
      <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Description</h1>
            <button onClick={()=>setOpenForm(!openForm)} className="p-1 border-2 border-gray-500 rounded font-serif text-gray-800 hover:text-white hover:bg-slate-700 duration-300">
              Edit Description
            </button>
      </div>
      <div className={` bg-white p-3 rounded my-3 text-gray-600 ${openForm ?"block" : 'hidden'}`}>
        {
          Discription.length > 1 ? <div>{ Discription}</div> :<div> please tell us about any hobbies, additional expertise or anything else you'd like to add </div>
        }
      </div>
      <form onSubmit={handleToSubmit} className={`${openForm ? "hidden":""}`}>
        <div className="mt-2 md:p-3">
          <textarea className="p-2"  id="" cols="40" rows="10" name="discription"></textarea>
        </div>
        <div  className='flex justify-between  pt-3'>
            <button onClick={handleToCancel} type="reset"  className='rounded w-full mr-2 p-2 bg-slate-400 font-semibold text-white'>Cancel</button>
            <button type='submit' className="rounded w-full ml-2 p-2 bg-green-700 font-semibold text-white disabled:bg-green-400">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Description;
