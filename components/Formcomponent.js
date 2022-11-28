import React from 'react';


export default function Formcomponent(props) {
  return (

    
    <div key={props.keyv}>
      {console.log(props)}
      <div className="mb-5 card">
          <div className='card-header'>
            <div className='card-text'>
              <h5>form {props.keyv == 0?'1':(props.keyv+1)} 
                  {props.keyv > 0 &&
                    <h2>
                      <span onClick={() => props.removeform(props.keyv)} className="btn btn-danger" style={{"float":"right"}}>x</span>
              
                    </h2>
                  }
              </h5>

            </div>
          </div>
           
          <div className="card-body">
            <form>
              <label>name:</label><br></br>
              <input type="text" name={"form1["+props.keyv+"]name"} className='form-control'/>
              <label>email:</label><br></br>
              <input type="email" name={"form1["+props.keyv+"]email"} className='form-control'/>
              <label>password:</label><br></br>
              <input type="password" name={"form1["+props.keyv+"]password"} className='form-control'/>
              <label>Type</label>
              <select class="form-control">
                <option value="1">ali</option>
                <option value="2">baig</option>
                <option value="3">muhammad</option>
                <option value="4">asad</option>
                <option value="5">bill</option>
              </select>
              <br></br>
            </form>
          </div>
      </div>
      
    </div>
    
  )
}
