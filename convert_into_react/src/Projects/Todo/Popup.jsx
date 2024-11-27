import React, { useState } from 'react'

const Popup = ({show , handlepop  , addpopup}) => {
    const date = new Date();
    let obj = {
        'id' : Date.now(),
        'title' : '',
        'desc' : '',
        'date' : date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
    }  
    const [enter , setenter] = useState(obj) 

    function saveinput (e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(enter);
        setenter((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function addnote(e) {
        e.preventDefault();
        addpopup(enter);
        setenter(obj)
        handlepop()
    }
    
    if (show) {
        return (
            <div className='popup'>
                <div className='popup_box'>
                    <p><span>Add a new note</span> <i className='fas fa-times' onClick={handlepop}></i></p>
                    <form action="">
                        <input type="text" name="title" placeholder="Enter title"  onBlur={saveinput}/>
                        <textarea name="desc" placeholder="Enter Description" onBlur={saveinput}></textarea>
                        <button className='popup_btn' type="submit" onClick={addnote}>Add Note</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Popup

