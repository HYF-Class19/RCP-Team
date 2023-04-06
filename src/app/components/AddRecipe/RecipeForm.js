'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./RecipeForm.css";

export const RecipeForm = () => {
    return (
    <section className="box">
        <div>
            <h1>Register here and add your favorite recipe...</h1>
        </div>
        
        <div className="row">
            <div className="column">
            <form>
                <div>
                <h2>Register with email</h2>
                </div>
                     <div className="container">
                        
                        <label for="name"><b>Name</b></label>
                        <input type="name" placeholder="Enter your name" name="name" id="name" required></input>
                        <label for="username"><b>Username</b></label>
                        <input type="name" placeholder="Enter your username" name="name" id="name" required></input>
                        <label for="email"><b>Email address</b></label>
                        <input type="text" placeholder="Enter your email address" name="email" id="email" required></input>
                        <label for="psw"><b>Enter password</b></label>
                        <input type="text" placeholder="Type your password" name="password" id="password" required></input>
                        <label for="psw"><b>Confirm password</b></label>
                        <input type="text" placeholder="Repeat your password" name="password" id="password" required></input>

                        <button type="submit" className="submitbtn">REGISTER</button>

                        <div className="field-checkbox">
                        <input type="checkbox" id="register"></input>
                        <label for="agreement">Yes, I agree to store my data in this website</label></div>
                    </div>
                </form>
                </div>
            <div className="column">
                <form>
                    <div>
                    <h2>Log in </h2>
                    </div>
                    <div className="container">
                     <label for="name"><b>Email or username</b></label>
                        <input type="name" placeholder="Enter your email or username" name="name" id="name" required></input>
                        <label for="psw"><b>Password</b></label>
                        <input type="text" placeholder="Enter your password" name="email" id="email" required></input>
                        
                        
                        <button type="submit" className="submitbtn">REGISTER</button>

                        <div className="field-checkbox">
                        <input type="checkbox" id="register"></input>
                        <label for="login">Remember me</label></div>

                        <br />
                        
                        
                        <button type="passwd" className="passwdbtn">Forgot your password</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   );
};