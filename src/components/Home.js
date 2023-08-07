import React from 'react'

export default function Home(props) {
  return (
    <div><center><h1 style={{color:`${(props.mode==="dark")?"white":"black"}`}}>HOME</h1></center></div>
  )
}
