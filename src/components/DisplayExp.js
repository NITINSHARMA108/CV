import React from 'react'

const DisplayExp = ({exp,changeExperience}) => {
    console.log(exp);
    return (
        exp.map((e)=>{
            return(
                <div className="edu">
                <h3>{e.name}</h3>
                <h5>{e.role}</h5>
                <p><span>{e.sot}</span>-<span>{e.eot}</span></p>
                <button onClick={(e)=>{
                    e.preventDefault();
                    changeExperience(exp.id);
                }}>Delete</button>
                
            </div>
            )

        })
    )
}

export default DisplayExp
