import React, { useState } from 'react';
export default function TextForm(props) {
const handleUpClick =()=>{
    // console.log("Uppercase was clicked" +text)
    let newText = text.toUpperCase();
    setText(newText)
}
const handleLowClick =()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
}
const handleOnChange = (event)=>{
    setText(event.target.value);
}
const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    }
    
const [text,setText] = useState('Enter your text here');
return (
    <>
<div>
    <h1>{props.header}</h1>
    <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-danger mx-3" onClick={handleUpClick}>convert to uppercase</button>
   <button className="btn btn-primary" onClick={handleLowClick}>convert to lowercase</button>
   <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
</div>
<div className="container mx-3">
    <h1>your text summary</h1>
    <p>{text.split("").length} words and{text.length}characters;</p>
    <p>{0.008*text.split("").length} Minutes to read</p>
</div>
</>
  )
}
