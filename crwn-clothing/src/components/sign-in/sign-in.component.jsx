import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in.styles.scss";
import Button from "../button/button.component.jsx"; 
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";




const SignInForm  = () =>{

    const defaultFormFields = {
        email: "",
        password: "",
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields =() =>{
        setFormFields(defaultFormFields)
   }

     const signInWithGoogle = async () => {
       try {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      alert('You closed the sign-in popup. Please try again.');
    } else {
      console.error('Google sign-in error:', error);
      alert('Something went wrong with Google Sign-In.');
    }
  }
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
            
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                case "auth/popup-closed-by-user":
                    alert("pop up closed by user");
                    break;
                default:
                    console.log("user sign in encountered an error", error);
            }
            console.log("user sign in encountered an error", error);
        }
    }

    const handleChange = (event) =>{
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

   return (
     <div className = "sign-up-container">
         
        <h2>Already have an account?</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit = {handleSubmit}>
            
            <FormInput label = "Email" type = "email" required onChange = {handleChange} name = "email" value = {email}/>

            <FormInput label = "Password" type = "password" required onChange = {handleChange} name = "password" value = {password}/>

            <div className = "buttons-container">    
            <Button type = "submit">Sign In</Button>
            <Button type = "button" buttonType = "google" onClick = {signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
   )
}

export default SignInForm;