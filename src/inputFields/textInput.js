export default function TextInput({placeHolder ,name , value , onChange , isRequired}){
    return (
        <div className = 'input-container'>
            <input placeholder=""
                required = {isRequired}
                name = {name}
                id = {name}
                type="text"
                value ={value}
                className="input-field"
                onChange={onChange}/>
            <label className = 'input-label' htmlFor = {name}>{placeHolder}</label>
        </div>
        
    )
}