import { useState } from "react"
import { AddUser } from "./components/AddUser"

export const App = () => {


    const [users, setUsers] = useState([])

    const addUser = ( newUser ) =>{

        setUsers([...users,newUser]);

    }

  return (

    <>
      <h1> React phone book </h1>
      <AddUser
          onNewUser = { (value) =>  addUser(value)}
      /> 

      <table className='informationTable'>
        <thead> 
          <tr>
            <th >Last name</th>
            <th >First name</th>
            <th >Phone</th>
          </tr>
        </thead> 
        <tbody>
            {users.map(user => (
              <tr>
                <td >{user.lastName}</td>
                <td >{user.firstName}</td>
                <td >{user.phoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
        

    </>


  )
}
