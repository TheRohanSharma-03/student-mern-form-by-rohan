import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Show() {
  const [data,setdata] = useState([]);
  const getdata = async ()=>{
    const geturl = await fetch("https://reactbackend-8yq0.onrender.com/show",{
            method:"GET",
        });
        const studentdata = await geturl.json();
        setdata(studentdata);
  }
  useEffect(()=>{ 
    getdata();
  },[]);

  return (
    <>
    <div className="container bg-primary">
        <h2>Data</h2>
    </div>
    <Link to="/" className="btn btn-danger">Form</Link>
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
              {
                data.map((data,index)=>{
                  return(
                    <tr>
                      <td>{index}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
    </div>
    </>
  )
}
