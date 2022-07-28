import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(){
  const initval ={name:"", email:"", phone:"", country:"", state:"", city:"",message:""};
  const [formvalues,setFormValues] = useState(initval);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange=(e)=>{
    const { name, value}=e.target;
    setFormValues({...formvalues, [name]:value});
    console.log(formvalues);
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   setFormErrors(validate(formvalues));
   setIsSubmit(true);
  };

  useEffect(() =>{
    console.log(formErrors);
 if(Object.keys(formErrors).length === 0 && isSubmit) {
  console.log(formvalues);
 }
  },[formErrors]);
  const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.name){
    errors.name = "Name is required";
  }
  if(!values.email){
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Not a valid Email format";
  }
  if(!values.phone){
    errors.phone = "Phone is required";
  } else if (values.phone.length != 10) {
    errors.phone = "Phone number should be 10 digits";
  }
  if(!values.country){
    errors.country = "Select a country";
  }
  return errors;
  };


     return(
<div class="container">
             {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Submitted successfully</div>) : 
             (<pre>{JSON.stringify( formvalues, undefined, 2 )}</pre>)}
            <div class="row">
                <div class="col-md-4 col-xs-12 col-sm-12">
                </div>
                <div class="col-md-4 col-xs-12 col-sm-12">
                
                <form onSubmit={handleSubmit}>
                <br /><br />
                <legend >Register</legend>



      <div class="form-outline mb-4">
        <input type="text" name="name" class="form-control" value={formvalues.name} onChange={handleChange} />
        <label class="form-label" for="registerName">Name</label>
      </div>
      <p style={{color:'red'}}>{ formErrors.name}</p>
      

    
      <div class="form-outline mb-4">
        <input type="email"  name="email" class="form-control" value={formvalues.email} onChange={handleChange} />
        <label class="form-label" for="registerEmail">Email</label>
      </div>
      <p style={{color:'red'}}>{ formErrors.email}</p>
      

 
      <div class="form-outline mb-4">
        <input type="tel"  name="phone" class="form-control" value={formvalues.phone} onChange={handleChange} />
        <label class="form-label" for="registerPhone">Mobile</label>
      </div>
      <p style={{color:'red'}}>{ formErrors.phone}</p>

            
      <div class="form-outline mb-4">
       
      <select class="form-control" name="country" value={formvalues.country} onChange={handleChange} >
        <option value="">--select--</option>
        <option value="america">America</option>
        <option value="india">India</option>
      </select>
        <label class="form-label" for="country">Country</label>
      </div>
      <p style={{color:'red'}}>{ formErrors.country}</p>
      

      <div class="form-outline mb-4">
        <input type="text" name="state" class="form-control" value={formvalues.state} onChange={handleChange} />
        <label class="form-label" for="registerState">State</label>
      </div>
      

      <div class="form-outline mb-4">
        <input type="text" name="city" class="form-control" value={formvalues.city} onChange={handleChange} />
        <label class="form-label" for="registerCity">City</label>
      </div>
      

      <div class="form-outline mb-4">
        <input type="textarea" name="message" class="form-control" value={formvalues.message} onChange={handleChange} />
        <label class="form-label" for="message">Message</label>
      </div>
      



   
      <button type="submit" class="btn btn-primary btn-block mb-3">Register</button>
    </form>
                </div>
            
            
            <div class="col-md-4 col-xs-12 col-sm-12">
            </div>    
            </div>
        </div>
     )
}
export default Register;