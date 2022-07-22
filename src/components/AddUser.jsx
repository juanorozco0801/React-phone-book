import {useState} from 'react';


export const AddUser = ({onNewUser}) => {

  const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
  }


  const [inputValue, setinputValue] = useState(initialState) 


  const onInputChange = ({target}) => {
  
    setinputValue({...inputValue, [target.name]: target.value})

  }

  const onAddUser = ( e ) =>{

    e.preventDefault();

    onNewUser(inputValue)

    setinputValue(initialState)

  }



  return(



    <>
      <form>
            <input className="first-name"
                name="firstName"
                type="text" 
                placeholder="First name"
                value = {inputValue.firstName}
                onChange ={ onInputChange }
            />            
            <input className="last-name"
                name="lastName"
                type="text" 
                placeholder="Last name"
                value = {inputValue.lastName}
                onChange ={ onInputChange }
            />         
            <input className="phone-number" 
                name="phoneNumber"
                type="number" 
                placeholder="Phone number"
                value = {inputValue.phoneNumber}
                onChange ={ onInputChange }
            />
        </form> 

        <button onClick={onAddUser}>Agregar contacto</button>
    </>

  )
}


