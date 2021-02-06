import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';

import "./Banner.styles.css";

const Banner = () =>  {
    return (
        <div className = 'banner flex'>
            <EventNoteIcon style={{fontSize:"3rem", paddingRight:'5px'}}/>
            <h2>  Sample Note App</h2>
        </div>
    );
};

export default Banner;
