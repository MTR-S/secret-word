import "./Button.css"

interface ButtonProps {
    text:string,
    functionParameter1?: string,
    functionParameter2?: string,
    functionOnClick: (functionParameter?:string, functionParameter2?:string) => void
}

const Button: React.FC<ButtonProps> = ( { text, functionOnClick, functionParameter1, functionParameter2 } ) => {

    return(
        <button 
            className="component_button"
            onClick={() => functionOnClick(functionParameter1, functionParameter2)}
        >{text}
        </button>
    );  
}

export default Button;