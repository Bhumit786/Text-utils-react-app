import React from 'react'

export default function Aboutus(props) {
  return (
    <div className="container-fluid container my-3" style={{color:`${(props.mode==="dark")?"white":"black"}`}}><b>This is utility website used for some text utilities like converting sentense into camelcase,lowercase,counting words,removing extra spaces etc so please have a look at this made by bhumit with help of code with harry videos on react...........thank you </b></div>
  )
}
