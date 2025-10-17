import '../Styles.css'

export default function SelectElement({name , value , onChange ,children}){
    return(
        <div className = 'input-container'>
            <select 
                    name = {name}
                    style={{width:'100%'}}
                    value = {value}
                    onChange = {onChange}>
                {children}
            </select>
        </div>
    )
}