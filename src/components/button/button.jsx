import "./button.css"

function Button (props) {
    const {text} = props
return(
<div className="screen1-button">
    <div className="screen1-button-content">
        <a href="#lead">{text}</a>
    </div>
</div> 

)}

export default Button;