export default function NumberInput({placeholder , pattern ,name , value , onChange , min , max , isRequired }){
    return (
        <div className="input-container">
            <input 
                pattern={pattern}
                required = {isRequired}
                placeholder=""
                name = {name}
                min={min}
                max={max}
                id = {name}
                value = {value}
                onChange={onChange}
                type="number"
                className="input-field"/>
            <label className = 'input-label' htmlFor = {name}>{placeholder}</label>
        </div>
        
    )
}