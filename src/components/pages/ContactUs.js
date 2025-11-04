import React from 'react'

const ContactUs = (props) => {
    const formSubmitHandler =(event) =>{
        event.preventDefault();
        const enteredDetails ={
            name:event.target.name.value,
            emailId:event.target.emailId.value,
            phno:event.target.phno.value
        }
        props.onAdd(enteredDetails);
    }
  return (
    <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br /><br />
        <label htmlFor="emailId">EmailId</label>
        <input type="email" name="emailId" id="emailId" />
        <br /><br />
        <label htmlFor="phno">Phone Number</label>
        <input type="number" name="phno" id="phno" />
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactUs
