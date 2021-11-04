
export default function Button(props) {
    
    const btnColor = props.color === 'primary' ? '-primary': "-"+props.color;
    const btnType = props.type === "outline" ? "btn-outline"+btnColor : "btn"+btnColor;
    const activeSize = props.size === "large"? "btn-lg" : props.size === "small" ? "btn-sm" : ""; 
    
    return (
        <button onClick={props.action} className={`btn ${activeSize} ${btnType} _actionBtn`} 
         disabled={props.loading && true}
         style={{width:`${props.width}`}}>
            {props.loading &&(<span className="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>)}
            {props.loading ? 'Loading...' : props.text}
        </button>
    )
}
