import React from 'react'

export default function Alert(props) {
  const Capitalise = (word)=>{
    var lower = word.toLowerCase();
    lower = lower.charAt(0).toUpperCase() + lower.slice(1);
    return lower;
  }
  return (
props.alert&&<div class={`alert alert-${(props.alert.type)} alert-dismissible fade show`} role="alert">
<strong>{Capitalise(props.alert.type)}</strong>{props.alert.message}
</div>
  )
}
