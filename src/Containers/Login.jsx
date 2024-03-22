import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from '@mui/material/TextField';
import 'dayjs/locale/en-gb'; // Import the en-GB locale

const Login = (props) => {
 const [startDate, setStartDate] = useState(new Date());
 const navigate = useNavigate();
 const [date, setDate] = useState(null);

 function onChange(date) {
    setDate(date);
 }

 const onButtonClick = () => {
    // You'll update this function later...
 }

 return (
    <div className="UserPage">
      <div className="UserPage__title">
        <p>Your Birthday Calendar: Keeping Your Special Moments in Check</p>
      </div>
      <div className="UserPage__form">
        <div className="UserPage__form-name">
          <textarea></textarea>
        </div>
        <div className="UserPage__form-date">
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en-GB">
            <DatePicker
              label="Select Date"
              value={date}
              onChange={onChange}
              renderInput={(props) => <TextField {...props} />}
              format="DD/MM/YYYY" // Use format prop for MUI version 6.x+
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
 );
}

export default Login;
