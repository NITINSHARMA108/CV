import React from 'react'
import {useState} from 'react';
const Experience = ({addExperience}) => {
    const [expobject,setexpobject]=useState({
        name:'',
        role:'',
        sot:'',
        eot:''
    });
    const setExp=(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
        setexpobject((eduobject)=>{
            return {...eduobject,[name]:value}
        })
    }
    return (
        <div className="practical">
            <h1>Experience</h1>

            <form>
                <label>Name of Organisation:</label> 
                <input type="text" name="name" placeholder="Enter company name" value={expobject.name} onChange={(e)=>setExp(e)}/>
                <label>Job Role</label> 
                <input type="text" name="role" placeholder="Enter your role" value={expobject.role} onChange={(e)=>setExp(e)}/>
                <label>Start of tenure:</label>
                <input type="date" name="sot" value={expobject.sot} onChange={(e)=>setExp(e)}/>
                <label>End of Tenure:</label> 
                <input type="date" name="eot" value={expobject.eot} onChange={(e)=>setExp(e)}/>
                <div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    addExperience(expobject);
                    setexpobject({name:'',role:'',sot:'',eot:''});
                }}>Save</button>
               
                </div>
            </form>
        </div>
    )
}

export default Experience

