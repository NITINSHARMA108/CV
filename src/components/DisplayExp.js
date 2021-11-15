import React from 'react'

const DisplayExp = ({exp,changeExperience}) => {
    console.log(exp);
    return (
        exp.map((e)=>{
            return(
                <div className="exp">
                <h3>{e.name}</h3>
                <h5>{e.role}</h5>
                <p><span>{e.sot}</span>-<span>{e.eot}</span></p>
                <button onClick={(event)=>{
                    event.preventDefault();
                    changeExperience(e.expid);
                }}>Delete</button>
                <hr />
                
            </div>
            )

        })
    )
}

export default DisplayExp
