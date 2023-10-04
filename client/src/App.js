import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";



function App() {
  
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
 const onsubmit = async (e) => {
  // e.preventDefault()


  try {
    const response = await axios.post("http://localhost:5000/api/register",{
      name:name,
      email:email,
      password:password
    }) 
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
 } 
 
 const nameFunction= (e) => {
  setName(e.target.value)
  console.log(e.target.value);
 }
  
 const emailFunction= (e) => {
  setEmail(e.target.value)
  console.log(e.target.value);
 }

 const passwordFunction= (e) => {
  setPassword(e.target.value)
  console.log(e.target.value);
 }
  
  
  return (
  <form onSubmit={onsubmit}> 
    <label>Name : </label>
    <input type="text" id='name' onChange={nameFunction}></input><br /><br />
     
     <label>Email : </label>
     <input type='email' id='email' onChange={emailFunction}></input><br /><br />

     <label>password : </label>
    <input type="password" id='password' onChange={passwordFunction}></input><br /><br />

    <input type="submit" ></input>
    <Link to='/details'><button>View Details</button></Link>
  </form>
  );
}

export default App;
