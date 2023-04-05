'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./ContactForm.css";

export const ContactForm = () => {
    return (
    <section className="box">
        <div className="row">
            <div className="column-one">
                <h1>Let us hear from you</h1>
                <br />
                <p>Do you have a question? Or do you have any suggestion for our website or cooking tips? Drop your message here with your details. We will contact you as soon as possible!</p>
            </div>
            <div className="column-two">
                <form>
                     <div className="container">
                     <label for="name"><b>Name</b></label>
                        <input type="name" placeholder="Enter your name" name="name" id="name" required></input>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter your email address" name="email" id="email" required></input>
                        <label for="query"><b>Question/suggestion</b></label>
                        <input type="query" placeholder="Type your message here" name="message" id="message" required></input>

                        <div className="field-checkbox">
                        <input type="checkbox" id="newsletr"></input>
                        
                        <label for="newsletter">Please send me newsletter</label></div>
                        <button type="submit" class="submitbtn">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   );
};