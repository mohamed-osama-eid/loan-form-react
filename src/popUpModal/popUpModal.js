export default function PopUpModal({show , message , messageColor , onClose}){
    if (!show ) return null

    return (
        <div id="modal-overlay" onClick={function(e){
            if (e.target.id === "modal-overlay") {
                onClose();
            }
        }}>
            <div className="modal-popup">
                <p style={{color: messageColor}}>
                    {message}
                </p>
            </div>
        </div>
        
    )
}