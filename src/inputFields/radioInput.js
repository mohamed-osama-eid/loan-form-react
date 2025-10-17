export default function RadioInput({id , name , value , onChange, isRequired}){
    return (
        <div className = 'radio-item'>
            <input 
                required = {isRequired}
                name = {name}
                id = {id}
                value = {value}
                onChange = {onChange}
                type="radio"
                className="input-field"/>
            <label htmlFor = {id}>{value}</label>
        </div>
        
    )
}