import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './TableContent.styles.css';

const TableContent = (props) => {
    const deleteNote = () => props.deleteItem(props.id); 

    return(
        <>
            <tr>
                <td><CreateOutlinedIcon /></td>
                <td><DeleteOutlineIcon onClick={deleteNote}/></td>
                <td>{props.title}</td>
                <td>{props.content}</td>
                <td>{props.date}</td>
            </tr>
        </>
    )
}

export default TableContent;