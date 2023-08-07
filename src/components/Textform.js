import React,{useState} from 'react'


export default function Textform(props) {


  const[text,setText] = useState("");
  function onChangeHandler(event){
    setText(event.target.value);
  }
  const countWords = (myarray) =>{ 
    return myarray.length;
  }
  function onupper(){
    setText(text.trim());
    if(text===""){
      props.alert("warning","! Enter some text please");
      
      return ;
    }
    let newtext = text;
    newtext = newtext.toUpperCase();
    setText(newtext);
  }
  function onlower(){
    setText(text.trim());
    if(text===""){
      props.alert("warning","! Enter some text please");
      return ;
    }
    let newtext = text;
    newtext = newtext.toLowerCase();
    setText(newtext);
  }
  function onclear(){
    setText(text.trim());
    if(text===""){
      props.alert("warning","! Enter some text please");
      
      return ;
    }
    var newtext="";
    setText(newtext);
  }
  function onSentence(){
    setText(text.trim());
    if(text===""){
      props.alert("warning","! Enter some text please");
      
      return ;
    }
    let newtext = text[0];
    newtext = newtext.toUpperCase();
    newtext = newtext + text.substring(1,text.length).toLowerCase();
    setText(newtext);
    props.alert("success","!");
  }
  function onCapitalized(){
    if(text===""){
      props.alert("warning","! Enter some text please");
      
      return ;
    }
    let textelement = document.getElementById("exampleFormControlTextarea1")
    let filstring = textelement.innerHTML;
    filstring = filstring.trim();

    let temparray = filstring.split(" ");
    console.log(temparray);
    let newtext = "";
    for(let i = 0 ;i<temparray.length;i++){
     if(temparray[i]===''){
      newtext = newtext+" ";
      continue;
     }
     let temp = temparray[i][0].toUpperCase();
     newtext = newtext +temp+temparray[i].substring(1,temparray[i].length).toLowerCase()+" ";
    }
    newtext = newtext.substring(0,newtext.length);
    setText(newtext);
    props.alert("success","!");
  }
  function onCopy(){
    if(text===""){
      props.alert("warning","! Enter some text please");
      
      return ;
    }
    navigator.clipboard.writeText(text);
    props.alert("success","! copied to clipboard");
  }
  const onRemoveExtraSpaces = ()=>{
    if(text===""){
      props.alert("warning","! Enter some text please");
      return ;
    }
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.alert("success","! copied to clipboard");
      
  }
  return (
    <>
    <div className="mb-3 py-1">
    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:(props.mode==="light")?"black":"white"}}><b>{props.heading}</b></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} 
    onChange={onChangeHandler} placeholder="Enter text here
    " style={{backgroundColor:(props.mode==="dark")?"black":"white",color:(props.mode==="light")?"black":"white"}}></textarea>
    <button className="btn btn-primary mx-1 my-2" onClick={onupper}>To Uppercase</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onlower}>To lowercase</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onSentence}>To Sentence case</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onCapitalized}>To Capitalize case</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onCopy}>copy</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onRemoveExtraSpaces}>remove extra spaces</button>
    <button className="btn btn-primary mx-1 my-2" onClick={onclear}>clear box</button>
    </div>
    <div className="container my-3" style={{color:(props.mode==="light")?"black":"white"}}>
      <h2>Your Text Summary</h2>
      <p>{countWords(text.split(" "))} words {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter some text to preview here"}</p>
    </div>
    </>
  );
}
