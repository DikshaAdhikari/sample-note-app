import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';

import "./Main.styles.css";

const Main = (props) =>  {
    const [expand, setExpand] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
        tag: "",
        time: ""
    });

    const modal = () => setExpand(true);
    const Shrink = () => setExpand(false);
    const hideContentErr = () => setShowContent(false);
    const hideTitleErr = () => setShowTitle(false);

    const inputEvent = (e) => {
        const {value, name} = e.target;

        setNote((prev) => {
            return{
                ...prev,
                [name]: value
            };
        });
    };
    const addEvent = () => {
        if((note.title=="") || (note.content=="")){
            if(note.title=="") setShowTitle(true);
            else setShowTitle(false);
            if(note.content=="") setShowContent(true);
            else setShowContent(false);
        }else {
            var time = new Date();
            props.passNote(note);
            setNote({
                title: "",
                content: "",
                tag: "",
                time: time
            });
            setExpand(false);
        }
    };
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

                {showTitle? 
                    <div className='title-err flex'>
                        <span>Title is required</span><ClearIcon style={{fontSize: 'smaller', cursor: 'pointer'}} onClick={hideTitleErr}/>
                    </div>
                :null}
                {showContent? 
                    <div className='content-err flex'>
                        <span>Content is required</span><ClearIcon style={{fontSize: 'smaller', cursor: 'pointer'}} onClick={hideContentErr}/>
                    </div>
                :null}

                <p>Title</p>
                <input type='text' 
                    name="title" 
                    value={note.title} 
                    onChange={inputEvent} 
                    className='title'
                />

                <p>Content</p>
                <textarea className='content' 
                    rows='5' name="content"
                    name='content'  
                    value={note.content} 
                    onChange={inputEvent}>
                </textarea>

                <p>Tags</p>
                <input type='text' 
                    name="tags" 
                    value={note.tags} 
                    onChange={inputEvent} 
                    className='tags' 
                />

                <div className='note-btn flex'>
                    <Button variant="contained" style={{backgroundColor:'green', color: 'white', marginRight:'2rem'}} onClick={addEvent} >
                    <SaveSharpIcon /> <span>Save</span>
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