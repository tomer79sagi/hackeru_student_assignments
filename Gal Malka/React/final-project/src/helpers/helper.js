const users = [
    {
        id: 1,
        avatar: 'https://www.melivecode.com/users/1.png',
        firstname: "Gal",
        lastname: "Malka",
        phonenumber: '0546733745',
        email: 'galmalka121@gmail.com',
        birthday: '1998-08-17',
        status: 'Customer',
    }, 

    {
        id: 2,
        avatar: 'https://www.melivecode.com/users/3.png',
        firstname: "Walter",
        lastname: "White",
        phonenumber: '505-994231',
        email: 'hisenberg@gmail.com',
        birthday: '1956-04-12',
        status: 'Lead',
    },

    {
        id: 3,
        avatar: 'https://www.melivecode.com/users/5.png',
        firstname: "Benjamin",
        lastname: "Chaz",
        phonenumber: '9195-33124',
        email: 'benjamin.chaz@melivecode.com',
        birthday: '1984-03-24',
        status: 'Trial',
    },
]

const helper = {
    getUsers: function getUsers(){
        return users
    },

    getUser: function getUser(key){
        return users[key]
    },

    addUser: function addUser(user){
        let key = this.getKey()
        user.id = key + 1
        users[key] = user

    },

    deleteUser: function deleteUser(key){
        users[key] = null
    },

    updateUser: function updateUser(user,key){
        console.log(user);
        console.log(key);
        users[key].firstname = user.firstname
        users[key].lastname = user.lastname
        users[key].phonenumber = user.phonenumber
        users[key].email = user.email
        users[key].birthday = user.birthday
    },

    updateStatus: function updateStatus(status,key){
        users[key].status = status
    },

    getKey: function getKey(){
        let key = users.length
        for(let i = 0; i <= key; ++i){
            if(users[i]){
                continue
            } 
            else if(users[i] === null){
                return i
            } 
        }
        return key
    },

    change: function change(){
        users[1].firstname = 'Adam'
    }
}

export default helper