import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './TableContent.styles.css';

const TableContent = (props) => {
    const editNote = () => props.editItem(props.id);
    const deleteNote = () => props.deleteItem(props.id); 
    
    return(
        <>
            <tr>
                <td className='middle'><CreateOutlinedIcon style={{color:'#303F9F'}} onClick={editNote}/></td>
                <td className='middle'><DeleteOutlineIcon style={{color:'#CA0101'}} onClick={deleteNote}/></td>
                <td>{props.title}</td>
                <td>{props.content}</td>
                <td>{props.date}</td>
            </tr>
            
                
            
        </>
    )
}

export default TableContent;