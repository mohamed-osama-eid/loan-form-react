export default function EmailInput({placeholder , value , onChange , name , isRequired}){
    return (
        <div className="input-container">
            <input 
                required = {isRequired}
                placeholder=""
                name = {name}
                id = {name}
                type="mail"
                value = {value}
                onChange = {onChange}
                className="input-field"/>
            <label className = 'input-label' htmlFor = {name}>{placeholder}</label>
        </div>
        
    )
}