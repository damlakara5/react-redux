import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
   const {
        value: enteredName, 
        isValid: enteredNameIsValid,
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: resetNameImput
    } = useInput(value => value.trim() !== '')

    const {
        value: eneteredEmail, 
        isValid: enteredEmailIsValid, 
        hasError: emailInputHasError, 
        valueChangeHandler:  emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))

    let formIsValid= false;
    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

  const formSubmissionHandler = (event) => {
    event.preventDefault()


    if(!enteredNameIsValid ){
      return
    }

    reset()
    resetEmailInput()
  }

 

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control '
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label> 
        <input  type='text' id='name'  onChange={nameChangeHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label> 
        <input  type='email' id='email'  onChange={emailChangeHandler} value={eneteredEmail} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
