import React, { useState } from 'react'
import Data from '../data.json'
import './Users.css'
let a = 0;

function Users() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)
  return (
    <div className='tableWrap'>
        <div>
            <AddMember setData={setData}/>
            <form onSubmit={handleUpdate}>
                <table>
                    <thead>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </thead>
                    
                {
                    
                    data.map((current) => (
                        
                        editState === current.id ? <EditMember current={current} data={data} setData={setData}/> :
                        <tr>
                            
                            <td>{<img src={current.avatar} alt='avatar' width='40vw'/>}</td>
                            <td>{current.first}</td>
                            <td>{current.last}</td>
                            <td>{current.username}</td>
                            <td>
                                <button type='button' className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button type='button' className='delete' onClick={() => handleDelete(current.id)} >Delete</button>
                            </td>
                            <td style={{display:"none"}}>{a++}</td>
                        </tr>
                    ))
                }
                </table>
            </form>
        </div>
    </div>
  )


  function handleUpdate(event){
    event.preventDefault()
    const avatar = event.target.elements.avatar.value
    const first = event.target.elements.first.value
    const last = event.target.elements.last.value
    const username = event.target.elements.username.value
    const updatedData = data.map(d => d.id === editState ? {...d, avatar:avatar, first:first, last:last, username:username}: d)
    setEditState(-1)

    setData(updatedData)
  }

  function handleEdit(id){
    setEditState(id)
  }

function handleDelete(id){
    const updatedData = data.filter((d) => id !== d.id)
    setData(updatedData)
}

}

function EditMember({current, data, setData}){
    function handleAvatar(event){
        const avatar = event.target.value;
        const updatedData = data.map((d) => d.id === current.id ? {...d, avatar:avatar} : d)
        setData(updatedData)
    }

    function handleFirst(event){
        const first = event.target.value;
        const updatedData = data.map((d) => d.id === current.id ? {...d, first:first} : d)
        setData(updatedData)
    }

    function handleLast(event){
        const last = event.target.value;
        const updatedData = data.map((d) => d.id === current.id ? {...d, last:last} : d)
        setData(updatedData)
    }

    function handleUsername(event){
        const username = event.target.value;
        const updatedData = data.map((d) => d.id === current.id ? {...d, username:username} : d)
        setData(updatedData)
    }

    return(
        
        <tr>
            
            <td><input type="text" onChange={handleAvatar} value={current.avatar} name="avatar" placeholder='Enter Avatar'/></td>
            <td><input type="text" onChange={handleFirst} value={current.first} name="first" placeholder='Enter First Name'/></td>
            <td><input type="text" onChange={handleLast} value={current.last} name="last" placeholder='Enter Last Name'/></td>
            <td><input type="text" onChange={handleUsername} value={current.username} name="username" placeholder='Enter Username'/></td>
            <td><button className='update' type='submit'>Update</button></td>
        </tr>
        
    )
}

function AddMember({setData}) {
    const [isShown, setIsShown] = useState(true);

    function handleClick(event){
    setIsShown(current => !current);
  };
     
    function handleValues(event){
       event.preventDefault();
       const avatar = event.target.elements.avatar.value;
       const first = event.target.elements.first.value;
       const last = event.target.elements.last.value;
       const username = event.target.elements.username.value;
       const newMember = {
        id:a,
        avatar,
        first,
        last,
        username,
       }

       if (isShown){
       setData(prevData => prevData.concat(newMember))
       event.target.avatar.value = ""
       event.target.first.value = ""
       event.target.last.value = ""
       event.target.username.value = ""
      }

    }
    return(
        <form onSubmit={handleValues}>
            <div style={{display: "flex" , justifyContent: "center"}}>
                <div style={{marginTop: "10vh"}} className={isShown ? 'display-none' : 'display-block'}>
                    <input type="text" name="avatar" placeholder='Enter Avatar'/>
                    <input type="text" name="first" placeholder='Enter First Name'/>
                    <input type="text" name="last" placeholder='Enter Last Name'/>
                    <input type="text" name="username" placeholder='Enter Username'/>
                </div><br/>
                <button onClick={handleClick} className='addForm'>Add User</button>
            </div>
        </form>
    )
}

export default Users;
