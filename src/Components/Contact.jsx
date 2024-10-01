import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

const Description= styled.div`
        font-size:18px;
        color:#b1b2b3;
         @media only screen and (max-width: 768px ) {
        font-size: 15px;
    }
         @media only screen and (max-width: 400px) {
        font-size: 12px;
    }
`
const Contact = () => {
     const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            subject:"",
            message:""
        },

        onSubmit:async ({name, email, subject, message}, {resetForm}) => {
            try{
                const response=await axios.post("https://portfoliobackend-fwxr.onrender.com/mail/route",{
                   name,
                   email,
                   subject,
                   message
                  
                });
                if(response){
                    alert("Message sent successfully");
                    resetForm({
                        name:"",
                        email:"",
                        subject:"",
                        message:""
                    })
                }else{
                    alert("Failed to send message");
                }
            }catch(error){
                alert("An error occurred while sending the message");
            }
            
            
           
        
            
        },

        validationSchema:yup.object({
            name:yup.string().required("Name is required"),
            email:yup.string().email("Invalid email address").required("Email is required"),
            subject:yup.number().required("Subject is required"),
            message:yup.string().required("Message is required")
        })
     });
  return (
    <div  className='pb-5 d-flex flex-column align-items-center'> 
        <div className='text-light' style={{fontSize:"42px", fontWeight:"600"}}>Contact</div>
        <Description>Feel free to reach out to me for questions or collaboration</Description>
         <div className='p-5 border mt-5' style={{width:"60vw", borderRadius:"15px", maxWidth:"30rem" }}>
            <div className='text-center text-secondary ' style={{fontSize:"28px", fontWeight:"500"}}>
                Mail me
            </div>
            <form onSubmit={formik.handleSubmit}>
               <div className='d-flex flex-column mt-5'>
                    <input type="text" name='name' placeholder='Name' {...formik.getFieldProps("name")}  className='p-2  form-control bg-secondary'/>
                    {formik.errors.name && formik.touched.name ? ( <div className='text-danger'>{formik.errors.name}</div>):null}
                    <input type="email" name='email' placeholder='Email' {...formik.getFieldProps("email")}  className='p-2 mt-4 form-control bg-secondary'/>
                    {formik.errors.email && formik.touched.email ? ( <div className='text-danger'>{formik.errors.email}</div>):null}
                    <input type="text" name='subject' placeholder='Subject' {...formik.getFieldProps("subject")}  className='p-2 mt-4 form-control bg-secondary'/>
                    {formik.errors.subject && formik.touched.subject ? ( <div className='text-danger'>{formik.errors.subject}</div>):null}
                    <textarea name="message"  cols="30" rows="10" placeholder='Message' {...formik.getFieldProps("message")}  className='p-2 mt-4 form-control bg-secondary' style={{height:"10rem"}}></textarea>
                    {formik.errors.message && formik.touched.message ? ( <div className='text-danger'>{formik.errors.message}</div>):null}
                    <button type='submit' className='btn btn-info mt-3'>Submit</button>
                    
                </div>

            </form>
         </div>
    </div>
  )
}

export default Contact