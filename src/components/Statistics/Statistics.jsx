import { Component } from "react";
import style from "./Statistics.module.css"
class Statistics extends Component{
    render(){
         const {good,neutral,bad,countTotal,countPercentage}=this.props
        return  <section>
        <h2 className={style.title}>Statistics</h2>
        <div className={style.div}>
          <p>Positive:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{countTotal()}</p>
          <p>Positive Feedback: {countPercentage()}%</p>
        </div>
      </section>
    }
}

export default Statistics