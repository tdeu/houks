import React from 'react'

function User(props) {

    const deleteUser= (id) => {
        props.deleteUser(id);
        
        }

    return (
        <div className='user'>

            <div className='photo-card'>
                <div className='photo-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXQ0R15er9jYmwDTJ41_oeTDfyd4Hlemg4elV82SCZw&s" alt="" />
                </div>
            </div>

            <div className='description-card'>
                <h3 className='name'>{props.user.name} </h3>

                <button onClick={() => deleteUser(props.user.id)}>Supprimer</button>
            </div>

        </div>)
}

export default User