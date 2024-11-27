import React, { useState } from 'react'

const Items = ({data , deleteData , editData}) => {
    const [showElipse, setshowElipse] = useState(0);
    const style = showElipse ? 'block' : 'none';
    function editThis(id) {
        editData(id);
    }
    function deleteThis(id){
        deleteData(id);
    }
    return (
    <li className='items' key={data.id}>
        <div className='item_head'>
            <h4>{data.title}</h4>
            <p>{data.desc}</p>
        </div>
        <div className='item_footer'>
            <p className='date'>{data.date}</p>
            <div className='ellipsis'>
                <i className='fas fa-ellipsis-h' onMouseEnter={() => {setshowElipse(!showElipse)}}></i>
                <ul style={{display: style}}>
                    <li className='editnote' onClick={() => editThis(data.id)}>Edit</li>
                    <li className='deletenote' onClick={() => deleteThis(data.id)}>Delete</li>
                </ul>
            </div>
        </div>
    </li>
  )
}

export default Items