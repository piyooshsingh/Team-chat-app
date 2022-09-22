import {Formik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'

const Login = () => {
   
  const SignSubmit = async(formdata ,{resetForm}) =>{
    console.log(formdata)


    const response = await fetch('http://localhost:5000/user/authenticate',{
      method:'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' :'application/json'
      }
    });

     if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Loggedin Succeddfully'
      })
     }else if(response.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Failed',
          text : 'Loggedin Failed'
        })
     }else{
      console.log('unknown error ');
     }
    
  }


  return (
    <div className='container mt-5  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-5">
      <div className='card px-4'>
        <h1 className='text-center'>Login Here</h1>
        <Formik initialValues={{
          email:"",
          password:"",
        }} onSubmit={SignSubmit}>
          {({values,handleChange,handleSubmit})=>(
     <form onSubmit={handleSubmit}>
    <div className=" mb-4">
      <label className="form-label" htmlFor="form2Example1">
        Email address:
      </label>
      <input type="email" id="form2Example1" name='email' value={values.email} onChange={handleChange} className="form-control" placeholder='Enter Here' required />
    </div>
    <div className="mb-4">
        <label className="form-label" htmlFor="form2Example2">
          Password:
        </label>
      <input type="password" id="form2Example2" name='password' value={values.password} onChange={handleChange} className="form-control" placeholder='Enter password' required />
    </div>
    <div className="row mb-4">
      <div className="col mx-2">
        <a href="#!">Forgot password?</a>
      </div>
    </div>
    <button type="submit" className="btn btn-primary btn-block mb-4">
      Sign in
    </button>

    <div class="text-center">
    <p>Not a member? <a href="SigUp">Register</a></p>
    </div>
  </form>

)}
</Formik>
  </div>
  </div>
  </div>

  )

  }

export default Login;