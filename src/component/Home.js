import React, { useState } from 'react'

const Home = () => {
let uppercase1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase1=uppercase1.toLowerCase();
let Numbers="0123456789";
let symbol="!@#$%^&*~<>/?";
const[UPPER,setKeyword]=useState(false);
const[lOWER,setlower]=useState(false);
const[SYMBOL,setsymbol]=useState(false);
const[NUMBER,setnumber]=useState(false);


 function myfunction(){
 if(UPPER!==true && lOWER!==true && SYMBOL!==true && NUMBER!==true ){
   alert("select CheckBox")
 }else{
    let str="";
    if(UPPER===true){
        str+=uppercase1;

    }if(lOWER===true){
        str+=lowercase1;

    }if(NUMBER===true){
        str+=Numbers;

    }if(SYMBOL===true){
        str+=symbol

    }
    setPassword(str);
 }


 }
 function setPassword(str){
   let inpt= document.getElementById("inptext").value;
   if(inpt<8 ||inpt>50){
    alert("select number between 8 and 50")

   }else{
    let passcode=" ";
    for(let i=0;i<inpt;i++){
        let Nindex= Math.floor(Math.random() * str.length);
    passcode+= str.charAt(Nindex);
    }

    document.getElementById("passinpt").innerText=passcode;
   }
  
   
 }


  return (
    <div style={{padding:"2% 5% 5% 5%"}}>
        <h1 style={{marginLeft:"35%", marginBottom:"5vw"}}>Password Generator</h1>
        <div style={{border:"00.1px solid grey", height:"7vh", backgroundColor:"rgb(240, 233, 233)"  }} id="passinpt"></div>
    <input style={{width:"10%", height:"5vh", marginTop:"3vw"} } id="inptext"/>
    <div style={{display:"flex",flexDirection:"column", gap:"2vh", marginTop:"3vw"}}>
    <label for="uppercase"> 
  <input type="checkbox" id="uppercase"onChange={((e)=>{
   setKeyword(e.target.checked)
  }) }/>
  Add UpperCase</label>
  <label for="LowerCase">
  <input type="checkbox" id="LowerCase"  onChange={((e)=>{
   setlower(e.target.checked)
  }) } />
   Add LowerCase</label>
   <label for="Symbol">
  <input type="checkbox" id="Symbol" onChange={((e)=>{
   setsymbol(e.target.checked)
  }) } />
   Add Symbol</label>
   <label for="number">
  <input type="checkbox" id="number" onChange={((e)=>{
   setnumber(e.target.checked)
  }) } />
   Add number</label>
 </div>

<div style={{width:"100%", textAlign:"center", height:"6vh", color:"white", backgroundColor:"blue", paddingTop:"3vh", marginTop:"4vh"}} onClick={()=>{
    myfunction()
}}  >Generate Password</div>
    </div>
    
  )
}

export default Home