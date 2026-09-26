import { Component } from "react";

class Section extends Component{
    render(){
        const {text,children} = this.props
        return <section>
            <h1>{text}</h1>
            {children}
        </section>
    }
}
export default Section;