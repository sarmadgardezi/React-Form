import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Formcomponent from './Formcomponent';
export default function Mainform() {

    const [formcomponent, setFormcomponent] = useState([<Formcomponent key={0} keyv={0}/>])    
    const [form2, setForm2] = useState(formcomponent);
    const duplicatethisform = (v) => {

      //  setFormfields([...formfields, { email: "", password:"", checkbox:"", text:"" }]);
      setFormcomponent([...formcomponent, <Formcomponent key={formcomponent.length} removeform={removethisform} keyv={formcomponent.length}/>]);
      
    }

    

    const createBene = () => {
      //setForm2(formcomponent);
      console.log(formcomponent)
    }

    const removethisform = index =>{
      const formm = [... formcomponent];
      formm.splice(index,1);
      setFormcomponent(formm);
      console.log(formcomponent);
     // console.log(form2);
      //console.log([...formcomponent]);
    }

  return (
<>   
        {/* {
          
             formfields.map((v,k)=>{
                    
                    <p>this is key {k} and value is {v}</p>    
                    console.log('----------key:'+k+'----------');
                    Object.keys(v).map((v,k)=>{
        
                        // <>
                        //     <p>this is key {k} and value is {v}</p>    
                          
                        //     {k=='text' && 
                            
                        //     <p>this is key {k} and value is {v}</p>    
                        //     }
                            
                        // </>

        
                    })
                })
        } */}
        
      
       {formcomponent}

        <Button onClick={(e) => {duplicatethisform(e.target)}} className="btn btnSuccess">+ add new form</Button>
        <Button style={{"float":"right"}} onClick={createBene} className="btn btn-warning">+ create beneficiary</Button>
            
        </>
      
  )
}
