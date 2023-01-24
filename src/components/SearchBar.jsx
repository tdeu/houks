import React, { useState } from 'react'

function SearchBar (props) {

const [name, setName] = useState("");

const handleChange = e => {
    setName(e.target.value)
}

const addChaka = () => {
        props.addUser({id: Date.now() , name: name})
    
}

return (
    <div className='search-bar'>
        <div className='form'>
            <input type="text" onChange={handleChange} />
            <button onClick={addChaka}>+</button>
        </div>
    </div>)
}

export default  SearchBar