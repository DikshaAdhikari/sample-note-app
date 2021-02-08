import React, {useState} from 'react';
import Banner from './component/Banner/Banner.component';
import Main from './component/Main/Main.component';
import TableContent from './component/TableContent/TableContent.component';
import useLocalStorage from './useLocalStorage';
import './App.css';

function App() {
  const [addItem, setAddItem] = useLocalStorage('notes',[{
    title: 'Web Development',
    content: 'Learning ReactJS and sharpening frontend skills',
    date:'2/8/2021, 7:05:48 AM'
  }]);
  // adding notes on save button click
  const addNote = (note) => {
    setAddItem((old)=> {
      return [...old, note];
    });
  };

  // deleting a particular id
  const onDelete = (id) => {
    setAddItem((olddata)=>
      olddata.filter((curData, index)=>{
        return index!==id;
      })
    );
  };

  // edit function 
  const onEdit = (id) => {
    alert("edit property disabled");
  }
  
  // filtering on search
  const addSearch = (find) =>{
    addItem.map(( el, id)=>{ 
      if(el.title.toLowerCase().includes((find).toLowerCase())){  
        setAddItem((olddata)=>
          olddata.filter((curData, index)=>{
            return index===id;
        }))
      }
    })
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
                editItem={onEdit}
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
