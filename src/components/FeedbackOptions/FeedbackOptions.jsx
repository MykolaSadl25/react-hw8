import { Component } from "react";
import style from "./FeedbackOptions.module.css"
class FeedbackOptions extends Component{
    render(){
        const {options,onClick}= this.props
        return <div className={style.div}>
          {options.map(btn=>{
            return <button className={style.button} key={btn} type="button" onClick={onClick} data-option={btn}>{btn}</button>
          })}
        </div>
    }
}

export default FeedbackOptions