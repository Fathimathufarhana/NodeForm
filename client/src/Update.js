import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";



function App() {
  
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
  const {id} = useParams()
 const onsubmit = async (e) => {
  e.preventDefault()
  console.log(email,password,name);
// return true
  try {
    const response = await axios.put(`http://localhost:5000/api/update/${id}`,{
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
//   console.log(e.target.value);
 }
  
 const emailFunction= (e) => {
  setEmail(e.target.value)
//   console.log(e.target.value);
 }

 const passwordFunction= (e) => {
  setPassword(e.target.value)
//   console.log(e.target.value);
 }
  

 const fetchData=async(id) => {
    try {
        let response = await axios.get(`http://localhost:5000/${id}`)
        console.log(response.data);
        setEmail(response.data.email)
        // console.log(setEmail(),"kkkkkkkkkkkkk");
        setPassword(response.data.password)
        setName(response.data.name)
    } catch (error) {
        console.log(error.message);
    }
 }

 useEffect(()=> {
    fetchData(id)
 },[])
  
  return (
  <form onSubmit={onsubmit}> 
    <label>Name : </label>
    <input type="text" id='name' value={name} onChange={nameFunction}></input><br /><br />
     
     <label>Email : </label>
     <input type='email' id='email' value={email} onChange={emailFunction}></input><br /><br />

     <label>password : </label>
    <input type="password" id='password' value={password} onChange={passwordFunction}></input><br /><br />

    <input type="submit" ></input>
    {id}
    <Link to='/details'><button>View Details</button></Link>
  </form>
  );
}
export default App;
