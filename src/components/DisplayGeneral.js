import React from 'react'

const DisplayGeneral = (props) => {
    console.log(props.generalProp.fname,props.generalProp.lname,props.generalProp.email,props.generalProp.phone,props.generalProp.desc);
    return (
        <div className="general-info">
            <div>
                <h1>
                    {props.generalProp.fname.toUpperCase()} {props.generalProp.lname.toUpperCase()}
                </h1>
                <p>{props.generalProp.desc}</p>
            </div>
            <div>
                <h4>Phone: +91{props.generalProp.phone}</h4>
                <h4>Email: {props.generalProp.email}</h4>
            </div>
        </div>
    )
}

export default DisplayGeneral
