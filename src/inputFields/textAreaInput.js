export default function TextAreaInput({placeholder , value , onChange ,name, isRequired}){
    return (
        <div className="input-container">
            <textarea
                placeholder=" "
                className="input-field"
                required = {isRequired}
                name = {name}
                id = {name}
                value = {value}
                onChange = {onChange}
                />
            <label className = 'input-label' htmlFor = {name}>{placeholder}</label>
        </div>
        
    )
}