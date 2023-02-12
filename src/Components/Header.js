import React from 'react';
import { BiBell } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import logo from '../utilities/logoForLiteMode.webp';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-600 p-2 md:py-5 md:px-20'>
            <div> {/*header left site*/}
                <img src={logo} alt="logo" />
            </div>
            <div> {/*header Right site*/}
                <div className='flex items-center'>
                    <BiBell className='md:mx-3 mx-1 md:text-4xl md:p-2 text-3xl p-1 rounded-full text-gray-500 bg-slate-200 '></BiBell>
                    <HiOutlineMail className='md:mx-3 mx-1 md:text-4xl md:p-2 text-3xl p-1 rounded-full text-gray-500 bg-slate-200 ' ></HiOutlineMail>
                    <FaRegQuestionCircle className='md:mx-3 mx-1 md:text-4xl md:p-2 text-3xl p-1 rounded-full text-gray-500 bg-slate-200 '></FaRegQuestionCircle>
                    <img className='md:ml-4 ml-2 p-1 text-4xl rounded-full bg-slate-200 h-11 w-11' src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user icon" />
                </div>
            </div>
        </div>
    );
};

export default Header;