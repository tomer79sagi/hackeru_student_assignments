import React, { Component } from 'react';

import "./MainContent.css";

class MainContent22 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hide:true,
            isEdit: false,

            editPeople:{ 
                fname: "",
                lname: "",
                phone:"",
               email: "",
               birthdate:"",
               status:"",
                avatar:""
            },

            StatusPeople:{ 
                Lead: 1,
                Interested:2 ,
                Trial:3,
                Customer:4              
            },

            people: [{id:"#",
                fname:"FIRSTNAME",
                lname: "LASTNAME",
                phone:"PHONENUMBER",
               email: "EMAIL",
               birthdate:"BIRTHDATE",
               status:"STATUS",
                avatar:"AVATAR"



            },
                {id: 1,
                    fname: "Karn",
                    lname: "Yong",
                    phone:"0546372811",
                   email: "karn.yong@melivecode.com",
                   birthdate:"24.01.1983",
                   status:"Lead",
                    avatar:"https://www.melivecode.com/users/1.png"
                    },
                    {
                    id: 2,
                    fname: "Ivy",
                    lname: "Cal",
                    phone:"0546372811",
                    email: "ivy.cal@melivecode.com",
                    birthdate:"09.11.1998",
                    status:"Lead",
                    avatar: "https://www.melivecode.com/users/2.png"
                    },
                    {
                    id: 3,
                    fname: "Walter",
                    lname: "Beau",
                    phone:"0546372811",
                    email: "walter.beau@melivecode.com",
                    birthdate:"08.05.2004",
                    status:"Lead",
                    avatar: "https://www.melivecode.com/users/3.png"
                    }
            ]
        };
    }
//create:
    onSubmitHandle(event){
        //1.prevent default behaviour=>prevent 'form' submitting
        event.preventDefault();
        //this code scope converts date value into string value to a normal day.month.year format
        let x=event.target.frm_person_birthdate.value;
        let string=[];
     
 for (let i=x.length-2,j=0;i<x.length;i++, j++){
  string[j]=x[i]; 
}
  
  for (let i=x.length-6,j=2;i<x.length-3;i++, j++)
  string[j]=x[i];
  
  for (let i=x.length-10,j=6;i<x.length-6;i++, j++)
  string[j]=x[i];
  
  for (let i=0;i<string.length;i++){
 
if (i==2||i==5)
    string[i]=".";
   }
   console.log(string);
        //2.add new person details to 'this.state. people' my db.(this.setstate())
        this.setState({
            people:[ //has to be the same name as in line 9!!!!!!!!!!!
            ...this.state.people, 
            {
             
             avatar: event.target.frm_person_avatar.value,
             fname: event.target.frm_person_name.value ,
             lname: event.target.frm_person_lname.value ,
             phone :event.target.frm_person_phone.value ,
             email :event.target.frm_person_mail.value,
            birthdate :string,
             status :event.target.personstatus.value,
            }
            ],
           
            
        
    

        });
        //3.remove the person name,to allow adding new  people.(event....)
    
        event.target.frm_person_name.value ="";
        event.target.frm_person_avatar.value ="";
        event.target.frm_person_lname.value ="";
        event.target.frm_person_phone.value="";
        event.target.frm_person_mail.value="";
        event.target.frm_person_birthdate.value="";
        event.target.personstatus.value="";
        this.state.hide=false;
        this.onStatusHandle(this.state.hide);    
        
    }


    onDeleteHandle(){
            // arguments=>saved word=actually an array who has all the parametes you transfered to.
            //argument[0]=person.id
            //1.find the person with the provided id and remove it from the 'this.state. people'
            if (window.confirm('Are you sure you wish to delete this item?')){ 
                //using window function-checking if a user want to delete an item.
                //if he approves, then we get a true boolean value then procceeds to the code inside the if scope.
            this.setState({
                people: this.state.people.filter(person=>person.id!== arguments[0]),
                      
            
                    
               
             
            })
       
}

    }

   onEditHandle(event,date) {
        // 1. Find person by person id (I received it in 'arguments[0]')
        const person = this.state.people.find(person => person.id === arguments[0]);
      //this code scope converts string  normal day.month.year to format date value to display on
      //the edit screen. 
        let y=[]=person.birthdate;
        for (let i=0;i<y.length;i++)
        if (y[i]==".")
        break;
        
          let string=[];
        
          for (let i=y.length-4,j=0;i<y.length;i++, j++){
          string[j]=y[i]; 
        }
          
          for (let i=y.length-8,j=4;i<y.length-4;i++, j++)
          string[j]=y[i];
          
          for (let i=y.length-10,j=8;i<y.length-8;i++, j++)
          string[j]=y[i];
        
        
          for (let i=0;i<string.length;i++){
         
        if (i==4||i==7)
        string[i]="-";
           }
           console.log(string)
        let r=string.join("");

        // 2. Update the ' editPeople' property in 'this.state' to contain the extracted details for editing
        this.setState({ 
            isEdit: true,
          
           
             editPeople: {
                id: person.id,
                fname: person.fname,
                lname: person.lname,
                phone :person.phone,
                email :person.email,
               birthdate :r,
                status :person.status,
            }
          
        }); 
       
         this.onStatusHandle(this.state.hide);
    }


    onUpdateHandle(event) {
        event.preventDefault();
        //this code scope converts date value into string value to a normal day.month.year format
        let x=event.target.frm_person_birthdate.value;
        let string=[];
     
 for (let i=x.length-2,j=0;i<x.length;i++, j++){
  string[j]=x[i]; 
}
  
  for (let i=x.length-6,j=2;i<x.length-3;i++, j++)
  string[j]=x[i];
  
  for (let i=x.length-10,j=6;i<x.length-6;i++, j++)
  string[j]=x[i];
  
  for (let i=0;i<string.length;i++){
 
if (i==2||i==5)
    string[i]=".";
   }
   console.log(string);
   
        this.setState({
            isEdit: false,
            
             people: this.state.people.map(person => {
                // If the id of the person in the current iteration EQUALS the 'id' in the 'this.state. editPeople'
                if (person.id === this.state.editPeople.id) {
                   
                    person.avatar = event.target.frm_person_avatar.value;
                    person.fname = event.target.frm_person_name.value;
                    person.lname = event.target.frm_person_lname.value;
                    person.phone = event.target.frm_person_phone.value;
                    person.email = event.target.frm_person_mail.value;
                    person.birthdate = string ;
                    person.status = event.target.personstatus.value;
                    return person;
                 }
        
                // Return the original person from the array (in the current iteration)
                return person;
            })
        });
    }
    onStatusHandle(event){
        if (this.state.hide===false){
        this.setState({
           hide:true
         });
         document.getElementById('stat').innerHTML="create new person";
         }

    if (this.state.hide===true){
    this.setState({
       hide:false
});
document.getElementById('stat').innerHTML="cancel";
    }
    }
   
 
    render() { 
        return (
            <article className="holy-grail__middle">
                <button className='hide' id='stat' name='stati' onClick={this.onStatusHandle.bind(this,this.state.hide)}>
                    create new person</button>
                {/* edit person */}
                {this.state.isEdit&&this.state.hide===false &&  
                // this.state.isEdit===true?

                 
                    <div className='person_edit'>
                    <form onSubmit={this.onUpdateHandle.bind(this)} > 
                     
                    {/* (this) used to refer it to the   whole class in the function submit! */} 
                   
                         <div> edit your pic (url)<input type="text" name="frm_person_avatar" 
                         defaultValue={this.state.editPeople.avatar}></input>
                     </div>
                        <div> edit person fname  <input type="text" name="frm_person_name" defaultValue= 
                        {this.state.editPeople.fname}></input> 
                        </div>
                      
                       
                        <div> edit person lname <input type="text" name="frm_person_lname" 
                        defaultValue={this.state.editPeople.lname}></input>
                        </div> 


                        <div> edit your phone number  <input type="text" name="frm_person_phone"
                        defaultValue={this.state.editPeople.phone}></input>
                       
                       </div>
                    
                       <div> edit your mail   <input type="email" name="frm_person_mail"
                       defaultValue={this.state.editPeople.email}> 
                        </input>
                      
                       </div>
                         <div> edit your birthdate   <input type="date" id="birth" name="frm_person_birthdate"
                        defaultValue={this.state.editPeople.birthdate}> 
                        {/* תזכורת לבדוק מה הערך שמקבלים מאינפוט דייט להחזיר אותו ולא דייט פשוט בסטרינג. */}
                        </input>
                        </div>
                        
                        <div> edit your status   <input type="text" name="personstatus"
                        defaultValue={this.state.editPeople.status}> 
                        </input>
                        </div>
                        <button>update</button>
                    </form>
                    </div>
                }

                {/* add new person */}
                
                {(!this.state.isEdit&&!this.state.hide) &&  
                // this.state.isEdit===false?

                <div className='person_add'>
                    <form onSubmit={this.onSubmitHandle.bind(this)} >  
                    {/* (this) used to refer it to the  whole class in the function submit! */} 
                    <ol>
                    <li>  <div> add your pic <input type="text" name="frm_person_avatar"></input>
                     </div>
                     </li>
                        <li><div> add your first name   <input type="text" name="frm_person_name"></input>
                        </div></li>
                     
                        <li> <div> add your last name   <input type="text" name="frm_person_lname"> 
                         </input>
                        </div>
                        </li>
                      
                        <li> <div> add your phone number  <input type="text" name="frm_person_phone"></input>
                       
                        </div>
                        </li>
                       
                        <li>  <div> add your mail   <input type="email" name="frm_person_mail"> 
                        </input>
                        </div>
                        </li>

                       <li><div> add your birthdate   <input type="date" id="birthday"  name="frm_person_birthdate"
                        defaultValue={this.state.editPeople.birthdate}> 
                        {/* תזכורת לבדוק מה הערך שמקבלים מאינפוט דייט להחזיר אותו ולא דייט פשוט בסטרינג. */}
                        </input>
                        </div>
                        </li>
                       <li> <span> add your status </span> 
                            <select name="personstatus" >
                            <option defaultValue={this.state.StatusPeople.Lead}>Lead</option>
                            <option defaultValue={this.state.StatusPeople.Interested}>Interested</option>
                            <option defaultValue={this.state.StatusPeople.Trial}>Trial</option>
                            <option defaultValue={this.state.StatusPeople.Customer}>Customer</option>
                            </select>
                        </li>
                        <button >Add new person</button>
                        </ol>
                    </form>
                    </div>
                 } 
                     

                { this.state.people.map((person,index) => ( 
                <div>
                      
                            <div className='person'>
                                {}
                            <span className='person_id'>{index+1} </span>
                             <span className='person_avatar'><img src={person.avatar} height="40px" 
                             width="40px"/></span>
                            <span className='person_name'> {person.fname}</span>
                            <span className='person_lname'>{person.lname}</span>
                            <span className='person_phone'>{person.phone}</span>
                            <span className='person_email'>{person.email}</span>
                            <span className='person_birthdate'>{person.birthdate}</span>
                            <span className='person_status'>{person.status}</span>

                            
                             <span className='person_id'>{index+1} </span>
                             <span className='person_avatar'><img src={person.avatar} height="40px" 
                             width="40px"/></span>
                            <span className='person_name'> {person.fname}</span>
                            <span className='person_lname'>{person.lname}</span>
                            <span className='person_phone'>{person.phone}</span>
                            <span className='person_email'>{person.email}</span>
                            <span className='person_birthdate'>{person.birthdate}</span>
                            <span className='person_status'>{person.status}</span>
                          
                                      
                           
                         
                            
                            <div className='person_actions'> 
                                <button onClick={()=>this.onDeleteHandle( person.id)}> delete </button>
                                <button onClick={this.onEditHandle.bind(this, person.id) } >
                                     edit </button>
                            </div> 
                            
                       </div>
                       </div>
                       
                    )
                ) /* this code creates a new ARRAY and hands it to REACT to display */} 
               
            </article>
        );
    }
}
 
export default MainContent22;
