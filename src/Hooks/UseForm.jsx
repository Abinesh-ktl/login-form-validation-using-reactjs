import { useState } from 'react'

const UseForm = (Validate) => {

const[values,setvalues]=useState({
        name:"",
        email:"",
        password:"",
        comfirmpassword:"",
    })
const[errors,seterrors]=useState({})    
    
        const handlechange=(e)=>{
            const{value,name}=e.target
            setvalues((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }    

            
                
            })

        }

        const handlesubmit=(e)=>{
            e.preventDefault()
            seterrors(Validate(values))
            

        }

       
return{handlechange,values,handlesubmit,errors}        
    
         
  
}

export default UseForm