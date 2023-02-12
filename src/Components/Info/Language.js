import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
const Language = () => {
  const [openForm, setOpenForm] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleToSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const language = form.language.value;
    const level = form.level.value;
    const Lang = { language: language, level: level };

    const newSkills = [...skills, Lang];
    setSkills(newSkills);
    //submit data to backend

    form.reset();
    setOpenForm(false);
  };
  const handleToCancel = () => {
    setOpenForm(false);
  };
  const handleToDelete = () => {};
  return (
    <div className="border-t border-gray-500 pt-5 mb-7">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold ">Language</h1>{" "}
        <button
          className={`text-green-500 hover:underline ${
            openForm ? "hidden" : ""
          }`}
          onClick={() => setOpenForm(!openForm)}
        >
          Add New
        </button>
      </div>
      <form
        onSubmit={handleToSubmit}
        className={`p-6 bg-gray-300 rounded-md mt-5 ${
          openForm ? "block" : "hidden"
        }`}
      >
        <input
          className="w-full h-10 rounded my-1 px-2 text-gray-600  font-semibold focus:outline-0"
          type="text"
          placeholder="language"
          name="language"
        />
        <br />
        <select
          className="w-full h-10 rounded my-1 text-gray-600  font-semibold px-1 focus:outline-0"
          name="level"
        >
          <option value="0" className=" text-gray-600 font-semibold hidden">
            Language level
          </option>
          <option className="text-gray-600  font-semibold" value="Basic">
            Basic
          </option>
          <option
            className="text-gray-600  font-semibold"
            value="Conversational"
          >
            Conversational
          </option>
          <option className="text-gray-600  font-semibold" value="Fluent">
            Fluent
          </option>
          <option className="text-gray-600  font-semibold" value="Native">
            Native
          </option>
        </select>
        <div className="flex justify-between border-t border-gray-400 mt-3 pt-3">
          <button
            onClick={handleToCancel}
            type="reset"
            className="rounded w-full mr-2 p-2 bg-slate-400 font-semibold text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded w-full ml-2 p-2 bg-green-700 font-semibold text-white disabled:bg-green-400"
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {skills.map((skill) => (
          <div className="group my-3 px-4">
            <div className="flex items-center px-2 rounded bg-gray-100">
              <h1 className="font-semibold">{skill.language} - </h1>{" "}
              <span className="text-gray-600">&nbsp;{skill.level}</span>
              <div className=" items-center ml-3 hidden group-hover:flex ">
                <FaPencilAlt className="mx-1 text-gray-400 duration-500  hover:text-gray-700"></FaPencilAlt>
                <RiDeleteBinLine
                  onClick={handleToDelete}
                  className="mx-1 text-gray-400 duration-500 h-5 w-5 hover:text-gray-700"
                ></RiDeleteBinLine>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
