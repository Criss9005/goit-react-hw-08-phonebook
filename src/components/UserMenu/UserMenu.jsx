import React from 'react'
import axios from 'axios';


export default function UserMenu() {

    const handleLogOut = () => {
        const token = localStorage.getItem("token")
        if (token) { 
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            axios.post('https://connections-api.herokuapp.com/users/logout')
          
            .then(function (response) {
                console.log(response)
                localStorage.clear()
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }

  return (
    <div>
          {/* <p>mango@mail.com</p>
        <button onClick={e =>handleLogOut()}>Logout</button> */}
    </div>
  )
}
