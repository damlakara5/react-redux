import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
 /*  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false) */
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [eneteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid= enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsValid = eneteredEmail.includes('@')
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value)
/*       if(event.target.value.trim () !== ''){
        setEnteredNameIsValid(true)
      } */
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
/*       if(event.target.value.trim () !== ''){
      setEnteredNameIsValid(true)
    } */
}


  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)

/*     if(enteredName.trim () === ''){
      setEnteredNameIsValid(false)
    } */

  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

/*     if(enteredName.trim () == ''){
      setEnteredNameIsValid(false)
        return;
    } */
    if(!enteredNameIsValid ){
      return
    }
  /*   setEnteredNameIsValid(true) */

    //resetting 
    setEnteredName('')
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

 

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control '
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label> 
        <input  type='text' id='name'  onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label> 
        <input  type='email' id='email'  onChange={emailInputChangeHandler} value={eneteredEmail} onBlur={emailInputBlurHandler} />
        {enteredEmailIsInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
