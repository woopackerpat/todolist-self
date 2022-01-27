import React from 'react';
import './ContentItem.css'

function ContentItem(props) {

 let {id, task} = props
    
  return <li className='content-item-container' key = {id} id = {id}>
      
      {task}

      <div className='button-container'>
        <button className='edit-button'>Edit</button>
        <button className='delete-button'>Delete</button>
      </div>
  </li>;
}

export default ContentItem;
