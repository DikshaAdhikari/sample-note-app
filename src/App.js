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
  const addSearch = (val) =>{
  
  }
  return (
    <div>
      <Banner />
      <Main passNote={addNote} passSearch={addSearch}/>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan='2'></th>
            <th>Title</th>
            <th>Content</th>
            <th>Updated Date</th>
          </tr>
        </thead>
        <tbody>
          {addItem.map((val, index)=>{
            return (
              <TableContent
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                date={val.date}
                deleteItem={onDelete}
              />
            );
          }).reverse()}
      </tbody>
      </table>
    </div>
  );
}

export default App;
