import React from 'react';
import { useNavigate } from 'react-router-dom';
function heading(props){
    const {name}=props;
   
    return(
        <>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Yoo</span> Whatsup</h1>
        </>
    )
}
export default heading;