import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';

import "./Main.styles.css";

const Main = () =>  {
    const [expand, setExpand] = useState(false);

    const modal = () => setExpand(true);
    const Shrink = () => setExpand(false);

    return (
        <>
        <div className = 'main_style flex'>
            <Button variant="contained" color="primary" onClick={modal}>
                <AddIcon />
            </Button>
            <input 
                type='search'
                placeholder='Search for note by title...' 
                size='60' 
                className='search-bar'
            />
            <Button variant="contained" color="primary">
                <SearchIcon />
            </Button>
        </div>
        {expand?
        <div className='create-note'>
            <div className='note'>
                <div className='head flex'>
                    <div className='left flex'>
                        < DescriptionOutlinedIcon />
                        <span>New Note</span>
                    </div>
                    <ClearIcon onClick={Shrink} style={{color: '#CA0101', cursor: 'pointer'}}/>
                </div>
                <p>Title</p>
                <input type='text' className='title' style={{height: '4vh'}}/>
                <p>Content</p>
                <textarea className='content' rows='5' ></textarea>
                <p>Tags</p>
                <input type='text' className='tags' style={{height: '4vh'}}/>
                <div className='note-btn flex'>
                    <Button variant="contained" style={{backgroundColor:'green', color: 'white', marginRight:'2rem'}}>
                    <SaveSharpIcon/> <span>Save</span>
                    </Button>
                    <Button variant="contained" style={{backgroundColor:'#CA0101', color: 'white'}} onClick={Shrink}>
                    <ClearIcon /> <span>Cancel</span>
                    </Button>
                </div>
            </div>
            </div>
        :null}
       </>
    );
};

export default Main;