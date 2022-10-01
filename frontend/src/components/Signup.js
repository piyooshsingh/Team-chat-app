import { Formik } from 'formik';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

const SigUp = () => {
  
  const navigate = useNavigate();
  const userSubmit=async(formdata)=>{
    console.log(formdata);
    const response = await fetch('http://localhost:5000/user/add', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      console.log('request sent')
      Swal.fire({
        icon : 'success',
        title : 'Nice',
        text : 'User SigUp!!'
      })
      navigate('/login');
    }else{
      console.log('some error occured');
    }
  }
  
  return (
    <div className='container mt-5  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-5">
      <div className='card px-4'>
        <Formik
          initialValues={{name : '', email : '', password : ''}}
          onSubmit={userSubmit}
        >
          { ({values, handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Register</h3>
            <label htmlFor='name'>Name</label>
            <input id="name" value={values.name} onChange={handleChange} className='form-control mb-3' placeholder='Full Name' required />
            <label htmlFor='email'>Email</label>
            <input id="email" value={values.email} onChange={handleChange} className='form-control mb-3' placeholder='Enter email'  required/>
            <label htmlFor='password'>Password</label>
            <input id="password" value={values.password} onChange={handleChange} type="password" className='form-control mb-3' placeholder=' Create password' required />
            <label htmlFor='confirm password'>Confirm Password</label>
            <input id="confirm Password" value={values.age} onChange={handleChange} className='form-control mb-3' placeholder=' Confirm password' required/>

            <div class="form-check" >
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
            <div class="invalid-feedback">You must agree before submitting.</div>
            </div>
            
            <div className="text-center">
            <button type='submit' className="btn btn-primary btn-block mb-4">Submit</button>
             </div>

    

    
    <div class="text-center" >
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class ="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
 </form>
  ) }
        </Formik>
        

      </div>
    </div>
  </div>
  )
}

export default SigUp;