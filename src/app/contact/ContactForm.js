'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./ContactForm.css";

export const ContactForm = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      setSuccessMsg("Thank you for contacting us! We will return to you as soon as possible.");
      reset();
    };
  
    return (
        <>
            <section className="box">
                <div className="row">
            <div className="column-one">
                <h1>Let us hear from you</h1>
                <br />
                <p>Do you have a question? Or do you have any suggestion for our website or cooking tips? Drop your message here with your details. We will contact you as soon as possible!</p>
            </div>
            
            <div className="column-two">
            <form onSubmit={handleSubmit(onSubmit)}>
          {successMsg && <p className="success-msg">{successMsg}</p>}
          <div className="container">
  
            <label>Name</label>
            <input
              type="name" placeholder="Enter your name" name="name" id="name"
              {...register("name", {
                required: "Username is required."
              })}
            />
            {errors.name && (
              <p className="errorMsg">{errors.name.message}</p>
            )}
          
            <label>Email</label>
            <input
              type="name" placeholder="Enter your email address" name="email" id="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid."
                }
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

            <label>Message</label>
            <input type="query" placeholder="Type your message here" name="message" id="message"
              {...register("message", {
                required: "Message is required."
              })}/>
              {errors.message && (
              <p className="errorMsg">{errors.message.message}</p>
            )}

                    <div className="field-checkbox">
                        <input type="checkbox" id="newsletr"></input>
                        
                        <label for="newsletter">Please send me newsletter</label></div>
        
         
                  
           <div className="form-control">
            <label></label>
            <button type="submit"  class="submitbtn">SUBMIT</button>
          </div>
          </div>
        </form>
        
        </div>

        </div>
    </section>
    </>
   );
};