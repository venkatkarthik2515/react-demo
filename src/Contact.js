import {useState} from 'react'
function Contact(){
  const [employees,setEmployees]=useState([])
  function retrieve(){
    fetch("https://reqres.in/api/users?page=2")
      .then((res)=>{
          console.log(res)
          return res.json()
      })
      .then((jsonRes)=>{
            console.log(jsonRes.data)
            setEmployees(jsonRes.data)
      })
    
  }
	  return(
          <div>
              <h1>contact page</h1>
              <button onClick={retrieve}> click here</button>
              {
                employees.map((pos)=>(
                      <div>
                          <p>Name:{pos.first_name}</p>
                          <p>Email:{pos.email}</p>
                          <img src={pos.avatar} width="30%"/>
                      </div>
                  ))
              }
          </div>
		)
}

export default Contact