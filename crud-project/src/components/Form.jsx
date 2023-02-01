import React, { Component } from 'react';
import s from "./Form.module.css";


const USER_STATUS = {
    Lead: 1,
    Interested:2,
    Trial:3,
    Customer:4

};

class Form extends Component {

 

   constructor(props) {
        super(props);
        this.state = { 
          isEdit: false,
          selectedUser: {},
            users: [
                {
                    id: 1,
                    status: 1,
                    fname: "Karn",
                    lname: "Yong",
                    tel: "0526840709",
                    bdate: "",
                    email: "karn.yong@melivecode.com",
                    avatar: "https://www.melivecode.com/users/1.png"
                    },
                    {
                    id: 2,
                    status: 1,
                    fname: "Ivy",
                    lname: "Cal",
                    tel: "0526804078",
                    bdate: "",
                    email: "ivy.cal@melivecode.com",
                    avatar: "https://www.melivecode.com/users/2.png"
                    },
                    {
                    id: 3,
                    status: 1,
                    fname: "Walter",
                    lname: "Beau",
                    tel: "0546804078",
                    bdate: "",
                    email: "walter.beau@melivecode.com",
                    avatar: "https://www.melivecode.com/users/3.png"
                    },
                    {
                    id: 4,
                    status: 1,
                    fname: "Gayla",
                    lname: "Bertrand",
                    tel: "0546502078",
                    bdate: "",
                    email: "gayla.bertrand@melivecode.com",
                    avatar: "https://www.melivecode.com/users/4.png"
                    },
                    {
                    id: 5,
                    status: 1,
                    fname: "Benjamin",
                    lname: "Chaz",
                    tel: "0578254078",
                    bdate: "",
                    email: "benjamin.chaz@melivecode.com",
                    avatar: "https://www.melivecode.com/users/5.png"
                    },
                    {
                    id: 6,
                    status: 1,
                    fname: "Delia",
                    lname: "Robin",
                    tel: "0546815457",
                    bdate: "",
                    email: "delia.robin@melivecode.com",
                    avatar: "https://www.melivecode.com/users/6.png"
                    },
                    {
                    id: 7,
                    status: 1,
                    fname: "Hector",
                    lname: "Graves",
                    tel: "0546894565",
                    bdate: "",
                    email: "hector.graves@melivecode.com",
                    avatar: "https://www.melivecode.com/users/7.png"
                    },
                    {
                    id: 8,
                    status: 1,
                    fname: "Diego",
                    lname: "Greene",
                    tel: "0546965236",
                    bdate: "",
                    email: "diego.greene@melivecode.com",
                    avatar: "https://www.melivecode.com/users/8.png"
                    },
                    {
                    id: 9,
                    status: 1,
                    fname: "Izzie",
                    lname: "Mooney",
                    tel: "0546786514",
                    bdate: "",
                    email: "izzie.mooney@melivecode.com",
                    avatar: "https://www.melivecode.com/users/9.png"
                    },
                    {
                    id: 10,
                    status: 1,
                    fname: "Romeo",
                    lname: "Garner",
                    tel: "0546554488",
                    bdate: "",
                    email: "romeo.garner@melivecode.com",
                    avatar: "https://www.melivecode.com/users/10.png"
                    },
                    {
                    id: 11,
                    status: 1,
                    fname: "Adrian",
                    lname: "Faisal",
                    tel: "0536454511",
                    bdate: "",
                    email: "adrian.faisal@melivecode.com",
                    avatar: "https://www.melivecode.com/users/11.png"
                    },
                    {
                    id: 12,
                    status: 1,
                    fname: "Katarina",
                    lname: "Aba",
                    tel: "0506121263",
                    bdate: "",
                    email: "katarina.aba@melivecode.com",
                    avatar: "https://www.melivecode.com/users/12.png"
                    }
            ]
         } 
     }

     onSubmitHandle(e){
    
  
      this.setState({
          users: [
              ...this.state.users, 
              {
                  id: e.target.user_id.value,
                  status: USER_STATUS[e.target.user_status.value],
                  fname: e.target.user_fname.value,
                  lname: e.target.user_lname.value,
                  tel: e.target.user_tel.value,
                  bdate: e.target.user_bdate.value,
                  email: e.target.user_email.value,
                  avatar: e.target.user_avatar.value
              }
          ]
      });
      e.target.user_id.value ='';
      e.target.user_status.value ='';
      e.target.user_fname.value ='';
      e.target.user_lname.value ='';
      e.target.user_tel.value ='';
      e.target.user_bdate.value ='';
      e.target.user_email.value ='';
      e.target.user_avatar.value ='';
  }
  
      
  onDeleteHandle(){
    if (window.confirm("Are you sure you want to delete this user?")){
  this.setState({
      users: this.state.users.filter(user => user.id !== arguments[0])
  });}
}
  
  onEditHandle(){

      const user = this.state.users.find(user => user.id === arguments[0])
  
      this.setState({
          isEdit: true,
          selectedUser: user,
          editUser: {
            id: user.id,
            status: user.status,
            fname: user.fname,
            lname: user.lname,
            tel: user.tel,
            bdate: user.bdate,
            email: user.email,
            avatar: user.avatar
          }
      });
  }
  onUpdateHandle(e) {
    e.preventDefault();

    this.setState({
        isEdit: false,
        users: this.state.users.map(user => {
          
            if (user.id === this.state.editUser.id) {
               /*  user.id = e.target.user_id.value, */
                user.status = USER_STATUS[e.target.user_status.value];
                user.fname = e.target.user_fname.value;
                user.lname = e.target.user_lname.value;
                user.tel = e.target.user_tel.value;
                user.bdate = e.target.user_bdate.value;
                user.email = e.target.user_email.value;
                user.avatar = e.target.user_avatar.value;
                return user;
            }
    

            return user;
        })
    });
}

onToggleAddMode = () => {
    this.setState({ 
      isEdit: false,
      selectedUser: {} 
    });
  };


    render() { 
        return (
        <div >

             {/* Update new user */}
             { this.state.isEdit && 
              <div>
                <form onSubmit={this.onUpdateHandle.bind(this)} className={s.userAdd+" row"} >
                <input type="text" name='user_fname' placeholder='First Name' defaultValue={this.state.editUser.fname} className='form-control col'></input>
                    <input type="text" name='user_lname' placeholder='Last Name' defaultValue={this.state.editUser.lname} className='form-control col'></input>
                    <input type="tel" name='user_tel' placeholder='0521234567' defaultValue={this.state.editUser.tel} className='form-control'></input>
                    <input type="date" name='user_bdate' defaultValue={this.state.editUser.bdate} className='form-control'></input>
                    <input type="email" name='user_email' placeholder='Email' defaultValue={this.state.editUser.email} className='form-control'></input>
                    <select className="form-select"  name='user_status' defaultValue={Object.keys(USER_STATUS)[this.state.editUser.status-1]}  >
                    <option disabled value="">User Starus</option>
                        <option value="Lead">Lead</option>
                        <option value="Interested">Interested</option>
                        <option value="Trial">Trial</option>
                        <option value="Customer">Customer</option>
                    </select>
                    <input type="url" name='user_avatar' placeholder='Image URL' defaultValue={this.state.editUser.avatar} className='form-control'/>

                    <button className='btn btn-success col'>Updete</button>
                    <button className='btn btn-secondary col-2' onClick={this.onToggleAddMode}>Close</button>
                </form>
            </div>
              }

            {/* Add new user */}
            { !this.state.isEdit && 
            <div className='container-sm' >
                <form onSubmit={this.onSubmitHandle.bind(this)} className={s.userAdd+ " row"}>
                <input type="text" name='user_id' placeholder='ID' className='form-control'></input>
                    <input type="text" name='user_fname' placeholder='First Name' className='form-control col'></input>
                    <input type="text" name='user_lname' placeholder='Last Name' className='form-control col'></input>
                    <input type="tel"  name='user_tel' placeholder='0521234567' className='form-control col'></input>
                    <input type="date" name='user_bdate' className='form-control col'></input>
                    <input type="email" name='user_email' placeholder='Email' className='form-control'></input>
                    <select className="form-select" name='user_status' required>
                    <option selected disabled value="">User Starus</option>
                        <option value="Lead">Lead</option>
                        <option value="Interested">Interested</option>
                        <option value="Trial">Trial</option>
                        <option value="Customer">Customer</option>
                    </select>
                    <input type="url" name='user_avatar' placeholder='Image URL' className='form-control'/>
                    
                    <button className='btn btn-primary' onClick={this.onToggleAddMode}>Add</button>
                </form>
            </div>
            }

                    <table className='container-md' >
           
  <tr>
    <th>Id</th>
    <th>Avatar</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Tel</th>
    <th>Birth Date</th>
    <th>Email</th>
    <th>Status</th>
  </tr>

  {this.state.users.map((user) => { return (
  <tr>
    <td>{user.id}</td>
    <td><img src={user.avatar} alt="avatar" /></td>
    <td>{user.fname}</td>
    <td>{user.lname}</td>
    <td>{user.tel}</td>
    <td>{user.bdate}</td>
    <td>{user.email}</td>
    <td>{Object.keys(USER_STATUS)[user.status-1]}</td>
    <td><div className={s.userButtons} >
                    <button onClick={this.onEditHandle.bind(this,user.id)} className='btn btn-success btn-sm'>Edit</button>
                    <button onClick={this.onDeleteHandle.bind(this,user.id)} className='btn btn-danger btn-sm'>Delete</button>
                 </div></td>
    
  </tr>
)})}

</table></div>
        );
    }
}
 
export default Form;