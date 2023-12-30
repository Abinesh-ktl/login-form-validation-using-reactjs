import React from 'react'

export   const Validate = (values) => {
    let errors={};
    if(!values.username){
        errors.username='username required'
    }
    if(!values.email)
    {
    errors.email='email required'
    }
    else if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        errors.email='email is invalid'
    }
    if(!values.password){
        errors.password='password is required'
    }
    else if(!values.password.length>6){
        errors.password='password need to be more character'
    }
     if(!values.password){
        errors.password2='password is reqiured'

     }
     else if(values.password!==values.password2){
        errors.password2='password does not match!!'
     }
     return errors;
    
    }
