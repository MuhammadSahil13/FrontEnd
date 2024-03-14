import React from 'react';
import { useNavigate } from 'react-router-dom';
import './heading.css'
function heading(props){
    const {name}=props;
   
    return(
        <div className='heading'>
          <div className="heading__h1">
            <h1>BirthDay Echo</h1>
          </div>
       </div>
    )
}
export default heading;