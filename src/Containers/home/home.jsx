import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../Components/heading/heading';
import './home.css'
import mainImage from '../Images/home-image.png';
const Home = (props) => {
    console.log(props);
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    
    navigate('/login');
  };
  return (
    <div className="home" >
      <div className="home__heading">
        <Heading/>
      </div>
      <div className="home__image">
        <img src={mainImage} ></img>
      </div>
      <div className='home__Info'>
        <p className='home__Info-p'>
        Say goodbye to forgotten birthdays and hello to heartfelt connections. Join Birthday Buddy today and let us be your trusty companion in spreading smiles and love!"
        </p>
        </div>
     
      <div className='home__button buttonContainer text-center mt-10 '>
        <div class="px-6 sm:px-0 max-w-sm">
          <button type="button" onClick={onButtonClick} class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
        </div>
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home