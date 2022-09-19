import React from "react";
import axios from "axios";
import {useEffect,useState} from "react"
import '../css/Furniture.css'
function Furniture(){
    let [users,setUsers]=useState([])
    useEffect(()=>{
        const fetchUsers=async()=>{
            let response=await axios.get("http://localhost:8000/Furniture")
            let userList=response.data
            setUsers(userList)
        }
        fetchUsers()
    },[])
    return(
        <>
        <div className="row">
        {
            users.map((userObj)=>
                <>
                <div className="col-10 col-sm-6 col-md-3 mb-3 mt-3" key={userObj.id}>
                <div className="card " >
                   <img src={userObj.image} className="card-img-top w-100 imgFurniture" alt="..." />
                     <div className="card-body">
                     <p className="lead">{userObj.title}</p>
                     <h3>Price:${userObj.price}</h3>
              </div>
              <div className="card-footer ms-auto">
                  <button className="btn btn-success text-center">Add To Cart</button>
              </div>
              </div>
              </div>
    </>
            
                )
        }
        </div>
        </>
    )
}
export default Furniture