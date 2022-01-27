import React, { useState } from 'react';
import './Content.css'
import ContentItem from './ContentItem';
import { v4 as uuidv4 } from 'uuid';

function Content() {

 

  const [inputContent, setInputContent] = useState('')
  const [newItem, setNewItem] = useState([])

  function onChangeInput(content) {
    setInputContent(content)
  }

  function onAddItem(e) {
    e.preventDefault()
    let newItemAdded = {
      id: uuidv4(),
      task: inputContent
    }

    setNewItem([newItemAdded, ...newItem])
    setInputContent('')
    // console.log(newItem)
  }

  

  return <div className='content-container'>
     <div className='input-container'>
        <input type="text" onChange={(e) => onChangeInput(e.target.value)} value = {inputContent}/>
        <button onClick={onAddItem}>Add</button>
     </div>

      {newItem.map((item) => 
        <ContentItem id = {item.id} task = {item.task}/>
      )}

   
  </div>;
}

export default Content;
