import React, {useState} from 'react';
import Banner from './component/Banner/Banner.component';
import Main from './component/Main/Main.component';
import TableContent from './component/TableContent/TableContent.component';

import './App.css';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((old)=> {
      return [...old, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((olddata)=>
      olddata.filter((curData, index)=>{
        return index!==id;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Main passNote={addNote}/>
      <table className='table'>
        <tr>
          <th colSpan='2'></th>
          <th>Title</th>
          <th>Content</th>
          <th>Updated Date</th>
        </tr>
        {addItem.map((val, index)=>{
          return (
            <TableContent
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
      })}
      </table>
    </div>
  );
}

export default App;
