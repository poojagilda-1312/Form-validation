import React, { useState } from 'react'
const Form = () => {
    //creating a store for input value 
const [Formdata, setFormdata] = useState({
    firstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate:""
})
    const handleSubmit = () => {
        
    }
  return (
   <form onSubmit={handleSubmit}></form>
  )
}

export default Form
