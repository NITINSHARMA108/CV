import React from 'react';
import {useState,useEffect} from 'react';

const General = ({changegeneralProp}) => {
    const [generalinfo,setgeneralinfo]=useState({});
    const updatevalues=(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
        setgeneralinfo((generalinfo)=>{
           return  {...generalinfo,[name]:value};
        })
    }
    
    return (
        <div>
            <h1>General</h1>
         <form>
            <label>Enter First Name:</label>
            <input type="text" name="fname" placeholder="Enter first name" onChange={(e)=>{
                updatevalues(e);
            }}
            />
            <label>Enter Last Name:</label>
            <input type="text" name="lname" placeholder="enter last name" onChange={(e)=>{
               updatevalues(e);
            }}/>
            <label>Enter email address:</label>
            <input type="email" name="email" placeholder="enter email" onChange={(e)=>{
                updatevalues(e);
            }} />
            <label>Enter Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter phone no." onChange={(e)=>{
                updatevalues(e);
            }} />
            <label>Description:</label>
            <textarea rows="5" name="desc" cols="50" maxlength="50" onChange={(e)=>{
                updatevalues(e);
            }}></textarea>
            <div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    changegeneralProp(generalinfo);
                }}>Save</button>
                
            </div>
            
        </form>
        </div>
    )
}

export default General
