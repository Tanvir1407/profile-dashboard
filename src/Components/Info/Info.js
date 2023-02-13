import React from 'react';
import Description from './Description';
import Language from './Language';
import Skills from './Skills';
import Edu from './Edu';
import Certification from './Certification';

const Info = () => {
    return (
        <div className='grid md:grid-cols-2 md:mt-12 md:mx-20 lg:grid-cols-3'>
            <div className='bg-gray-200 col-span-1 rounded p-6'> {/*left side Profile info*/}
                <Description></Description>
                <Language></Language>
                <Skills></Skills>
                <Edu></Edu>
                <Certification></Certification>
            </div>
            <div className=' h-80 col-span-2'> {/*Right side gig card*/}
                
            </div>
        </div>
    );
};

export default Info;