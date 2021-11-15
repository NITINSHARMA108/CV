import React from 'react'

const DisplayEdu = ({edu,changeEducation}) => {
    console.log(edu);
    return (
        edu.map((e)=>{
            return(
                <div className="edu">
                <h3>{e.course}</h3>
                <h4>{e.institute}</h4>
                <h5>{e.specialisation}</h5>
                <p><span>From:  {e.dos}</span>&nbsp;&nbsp;&nbsp;<span> To: {e.doc}</span></p>
                <button onClick={(event)=>{
                    event.preventDefault();
                    changeEducation(e.eduid);
                }
                }>Delete</button>
                <hr />
            </div>
            )

        })
    )
       
    
}

export default DisplayEdu
