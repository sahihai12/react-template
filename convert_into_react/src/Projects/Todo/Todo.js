import React, { useState , useEffect } from 'react';
import Items from './Items';
import Popup from './Popup';
import './Todo.css';

const Todo = () => {
    const [showpopup, setshowpopup] = useState(false);
    const handlepop = () => setshowpopup(!showpopup);
    
    
    const [data , setdata] = useState(JSON.parse(localStorage.getItem('TodoData')) ?? []);
    
    const addpopup = (dataval) => {
        console.log(dataval);
        setdata([...data, dataval]);
    }
    
    useEffect(() => {
        localStorage.setItem('TodoData', JSON.stringify(data));
    }, [data]);
   
    const deleteData = (id) => {
        const newContactList = data.filter((contact) => {
            return contact.id !== id;
        });
        setdata(newContactList);
    }

    const editData = (id) => {
        const edit = data.filter((contact) => {
            return contact.id === id;
        });
        
        console.log(edit);
        console.log(edit[0].title);
        console.log(edit[0].desc);
        // handlepop()
    }
    
    return (
        <>
            <div className='todo'>
                <ul className='wrapper'>
                    <li className='add' onClick={() => handlepop()} key={0}>
                        <div className='add_icon'><i className='fas fa-plus'></i></div>
                        <p className='add_text'>Add new note</p>
                    </li>
                    
                    {data.map(el => <Items data={el} deleteData={deleteData} editData={editData} />)}
                    
                </ul>
            </div>
            <Popup show={showpopup} handlepop={handlepop} addpopup={addpopup} />
        </>
    )
}

export default Todo