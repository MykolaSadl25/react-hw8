import { Component } from "react";

class Notification extends Component{
    render(){
        const {text}=this.props;
        return <p>{text}</p>
    }
}

export default Notification