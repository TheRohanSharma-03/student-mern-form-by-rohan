import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const [data,setdata] = useState({
        name :"",
        email:"",
        city:"",
        state:"",
        phone:"",
        password:"",
    });
    const getvalues = (event)=>{
        const {name,value} = event.target;
        setdata((preValue)=>{
           return {
            ...preValue,
           [name]:value,
           }
        });
        
    }; 
    const onSubmit = async (event)=>{
        event.preventDefault();
        const senddata = await fetch("https://reactbackend-8yq0.onrender.com",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const send = await senddata.json();
        console.log(send);
    }
  return (
    <>
      <div className="container">
            <div className="container bg-primary">
                <div className="row">
                    <div className="col-sm-6">
                    <h2>Student Form</h2>
                    </div>
                    <Link to="/show" className="btn btn-danger">Show</Link>
                    
                </div>
            </div>
            <form action="/data" method="POST" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={getvalues}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={getvalues} />
                </div>
                <div className="form-group">
                    <label htmlFor="City">City:</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter City" name="city" onChange={getvalues} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" className="form-control" id="state" placeholder="Enter state" name="state" onChange={getvalues} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="phone" onChange={getvalues} />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" onChange={getvalues} />
                </div>
                <button type="Save" className="btn btn-success">Submit</button>
            </form>
        </div>
    </>
  )
}
