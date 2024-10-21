import React, { useRef, useState } from 'react'

function SignupForm() {

  let[profilepic,setprofilepic] = useState("./images/dummy.webp")

let msgLblRef = useRef();
let stateSelectRef = useRef();
let firstNameInputRef = useRef();
let lastNameInputRef = useRef();
let maleRBRef=useRef();
let femaleRBRef=useRef();
let ageInputRef = useRef();

let selectedGender;
let salutation;
let maritalstatus;
let languagesknown ={
  eng:false,
  tel:false,
  hin:false,
  can:false,
  tam:false,
  nav:false,
  spa:false
}

let onClickSubmit = ()=>{


  if(selectedGender == "male"){
    salutation ="mr."

  }else{
    if(maritalstatus == "single"){
    salutation ="miss."
    }else{
      salutation = "mrs."
    }
  }

console.log(languagesknown)

  msgLblRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value}
  ${lastNameInputRef.current.value} from ${stateSelectRef.current.value} 
   ,your account has been created successfully and you know ${languagesknown.eng ==true?"English":""} 
   ${languagesknown.tel ==true?"Telugu":""}${languagesknown.hin ==true?"Hindi":""}
   ${languagesknown.can ==true?"Canadian french":""} ${languagesknown.tam ==true?"Tamil":""} ${languagesknown.nav ==true?"navajo":""} 
   ${languagesknown.spa ==true?"spanish":""}`;
}

  return (
    <div>
         <h2 className='heading'>SignupForm</h2>
      <form>
       
        <div>
        <label>First Name</label>
        <input ref={firstNameInputRef}></input>
        </div>
        <div>
        <label>Last Name</label>
        <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name= 'gender' ref={maleRBRef} onChange={()=>{
            if(maleRBRef.current.checked == true){
              selectedGender = "male";

            }

          }}></input>
          <label className='innerLabel'>male</label>
          <input type='radio' name= 'gender'ref={femaleRBRef} onChange={()=>{
            if(femaleRBRef.current.checked == true){
              selectedGender = "female"
            }

          }}></input>
          <label  className='innerLabel'>female</label>
        </div>
        <div>
          <label>marital status</label>
          <input type='radio' name= 'ms'onChange={(eventobject)=>{
       if(eventobject.target.checked == true){
            maritalstatus ="single"
          }
           
          }}></input>
          <label className='innerLabel'>single</label>
          <input type='radio' name= 'ms' onChange={(eventobject)=>{
            if(eventobject.target.checked == true){
              maritalstatus ="married"
            }

          }}></input>
          <label className='innerLabel'>married</label>
        </div>
        <div>
        <label>state</label>
        <select ref={stateSelectRef}>
            <option>state select</option>
            <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttar Pradesh</option>
<option>Uttarakhand</option>
<option>West Bengal</option>

        </select>
        </div>
        <div>
          <label>Language knowns</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.eng =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>English</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.tel =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>Telugu</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.hin =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>Hindi</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.can=
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>canadian french</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.tam =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>tamil</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.nav =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>navajo</label>
          <input type='checkbox'onChange={(eventobject)=>{
            languagesknown.spa =
            eventobject.target.checked;

          }}></input>
          <label className='innerLabel'>spanish</label>
        </div>
        
        <div>
        <label>Password</label>
        <input></input>
        </div>
        <div>
        <label>Age</label>
        <input ref={ageInputRef} onChange={()=>{
          let age=Number(ageInputRef.current.value);
          if(age < 3){
            console.log('Infant')
          }else if(age>3 && age<=7){
            console.log('nursery')
          }else if(age>7 && age<=11){
            console.log('primary school')
          }else if(age>11 && age<=16){
            console.log('high school')
          }else if(age>16 && age<=19){
            console.log('inter')

          }else if(age>19 && age<=21){
            console.log('degree')
          }else if(age>21 && age<=23){
            console.log('PG')
          }else{
            console.log('not a valid value')
          }

        }}></input>
        </div>
        <div>
          <label>profilepic</label>
          <input type='file' multiple onChange={(eo)=>{
            console.log(eo.target.files)
           let selectedImagepath= URL.createObjectURL(eo.target.files[0])
           console.log(selectedImagepath);
           setprofilepic(selectedImagepath);

          }}></input>
        </div>
        <div>
          <img src={profilepic} alt='' className='profilePicPreview'></img>
        </div>
        <div>
        <button type='button' onClick={()=>{
          onClickSubmit();
        }}>submit</button>
        </div>
      
       <label ref={msgLblRef} style={{width: "450px"}}></label>
      </form>

    </div>
  )
}

export default SignupForm