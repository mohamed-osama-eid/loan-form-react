export default function TelInput({placeholder , name ,value, onChange, isRequired}){
    return (
        <div className="input-container">
            <input 
                required = {isRequired}
                placeholder=""
                name = {name}
                id = {name}
                value = {value}
                onChange = {onChange}
                type="tel"
                className="input-field"/>
            <label className = 'input-label' htmlFor = {name}>{placeholder}</label>
        </div>
        
    )
}