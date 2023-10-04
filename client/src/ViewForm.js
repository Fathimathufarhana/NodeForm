import React, { useEffect, useState } from 'react'
import Card from "./Card"

function ViewForm() {
    const [details, setDetails] = useState([]);

const getDetails = async() => {
    let response = await fetch(`http://localhost:5000/`)
    let toJSON = await response.json()
    setDetails(toJSON)
    console.log(toJSON);
}


useEffect(()=>{
getDetails()
},[])


  return (
    <div className="App">
      {
        details.map((item)=>{
          return(
            <>
            <Card data={item}/>
            </>
          )

        })
      }
    </div>
  )

    }
export default ViewForm