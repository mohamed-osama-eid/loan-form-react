import '../Styles.css'
import '../popUpModal/popUpStyle.css'
import TextInput from '../inputFields/textInput'
import RadioInput from '../inputFields/radioInput'
import NumberInput from '../inputFields/numberInput'
import TelInput from '../inputFields/telInput'
import EmailInput from '../inputFields/emailInput'
import TextAreaInput from '../inputFields/textAreaInput'
import SelectElement from '../inputFields/selectElement'
import PopUpModal from '../popUpModal/popUpModal'
import { useState } from 'react'


export default function Form(){
    const [inputsValues , setInputsValues] = useState({
        firstName : '' ,
        lastName : '' ,
        phoneNumber : '' ,
        email: '',
        age : '' ,
        gender : '' ,
        employmentStatus : '' ,
        notes : '' ,
    })
    const [submitMessage , setSubmitMessage] = useState({message : '' , color : ''});
    const [showModal , setShowModal] = useState(false);

    const employmentOptions = [
        {id : 2 , title : 'currently employed' , value : 'currently employed'},
        {id : 3 , title : 'currently unemployed' , value : 'currently unemployed'},
        {id : 4 , title : 'student' , value : 'student'},
        {id : 5 , title : 'retired' , value : 'retired'},
    ]

    const employmentList = employmentOptions.map(op =>{
        return(
            <option key = {op.id} value = {op.value} >{op.title}</option>
        )
    });

    function submitForm(event){
        event.preventDefault();

        const phoneInput = event.target.elements.phoneNumber.value;
        const phoneRegex = /^(\+?2)?01[0125][0-9]{8}$/;
        const emailInput = event.target.elements.email.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // validate the phone and email inputs
        if (!phoneRegex.test(phoneInput)) {
            setSubmitMessage({message : 'invalid phone number' , color: 'rgba(212, 0, 0, 1)'});
            setShowModal(true);
            return;
        }

        if (!emailRegex.test(emailInput)) {
            setSubmitMessage({message : 'invalid email' , color: 'rgba(212, 0, 0, 1)'});
            setShowModal(true);
            return;
        }

        setSubmitMessage({message : 'The form hsa been successfully sent' , color: 'rgba(10, 143, 21, 1)'});
        setShowModal(true);
    }

    function handelChange(event){
        const {name , value} = event.target;
        setInputsValues({...inputsValues , [name]: value})
    }

    return(
        <div className = 'form-container'>
            <div id = 'header'>
                <h1>Loan Form Application</h1>
                <p>Please fill out all fields to submit your application</p>
            </div>

            <form id = 'form-control' onSubmit={(event)=>{submitForm(event);}}>
                {/* first and last name */}
                <div className = 'form-row'>
                    <div className = 'form-group'>
                        <TextInput 
                                    placeHolder = 'First Name' 
                                    name = 'firstName' 
                                    value={inputsValues.firstName} 
                                    onChange = {handelChange}  
                                    isRequired = {true}/>
                    </div>
                    <div className = 'form-group'>
                        <TextInput  
                                    placeHolder = 'Last Name' 
                                    name = 'lastName' 
                                    value={inputsValues.lastName} 
                                    onChange = {handelChange} 
                                    isRequired = {true}/>
                    </div>
                </div>

                {/* gender */}
                <label className = 'radio-header'>Gender</label>
                <div className = 'row mb-4 mt-1'>
                    <SelectElement name = 'gender' value={inputsValues.gender} onChange = {handelChange}>
                            <option value = 'male'>Male</option>
                            <option value = 'female'>female</option>
                        </SelectElement>
                    {/* <RadioInput id = 'male' 
                                isRequired = {true}
                                name = 'gender'
                                value = 'male'
                                onChange = {handelChange}/>

                    <RadioInput id = 'female' 
                                isRequired = {true}
                                name = 'gender'
                                value = 'female'
                                onChange = {handelChange}/> */}
                </div>

                {/* age and phone number */}
                <div className = 'form-row'>
                    <div className = 'form-group'>
                        <NumberInput    
                                        pattern = '^(?:(?:\+20|0) ?1[0125][ -]?\d{3}[ -]?\d{4})$'
                                        placeholder = 'Age' 
                                        min = '18' 
                                        max = '90' 
                                        name = 'age' 
                                        value={inputsValues.age} 
                                        onChange = {handelChange}
                                        isRequired = {true}/>
                    </div>
                    <div className = 'form-group'>
                        <TelInput   placeholder = 'Phone Number' 
                                    name = 'phoneNumber' 
                                    value={inputsValues.phoneNumber} 
                                    onChange = {handelChange}
                                    isRequired = {true}/>
                    </div>
                </div>

                {/* Email */}
                <div className = 'form-row'>
                    <div className = 'form-group'>
                        <EmailInput     placeholder = 'Email' 
                                        name = 'email' 
                                        value={inputsValues.email} 
                                        onChange = {handelChange}
                                        isRequired = {true}/>
                    </div>
                </div>

                {/* employment status */}
                <label className = 'employment-status'>Employment Status</label>
                <div style={{marginTop:'8px'}}>
                    <SelectElement name = 'employmentStatus' value={inputsValues.employmentStatus} onChange = {handelChange}>
                        {employmentList}
                    </SelectElement>
                </div>

                {/* why need the loan */}
                <div style={{marginTop:'20px'}}>
                    <TextAreaInput  
                                    placeholder = 'Why need the loan' 
                                    name = 'notes' 
                                    value={inputsValues.notes} 
                                    onChange = {handelChange}
                                    isRequired = {true}/>
                </div>

                <div style = {{marginTop:'20px'}}>
                    <button type = 'submit' name = 'submitBtn'>Submit Application</button>
                </div>
                
            </form>

            <PopUpModal message={submitMessage.message} messageColor = {submitMessage.color} show = {showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}