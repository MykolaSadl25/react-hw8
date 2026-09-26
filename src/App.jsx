import { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleClickOnBtn=(evt)=>{

this.setState((prev)=>{
  if (evt.target.dataset.option === "good") {
    return{
      good:prev.good+1,
    }
  }
})
this.setState((prev)=>{
  if (evt.target.dataset.option === "neutral") {
    return{
      neutral:prev.neutral+1,
    }
  }
})
this.setState((prev)=>{
  if (evt.target.dataset.option === "bad") {
    return{
      bad:prev.bad+1,
    }
  }
})
}

countTotalFeedback=()=>{
  const {good,neutral,bad}=this.state;
  const total = good+neutral+bad;
  return total
}

countPositiveFeedbackPercentage = ()=>{
  const {good}=this.state
  let percentage
  if(good === 0){
    percentage=0
    return;
  }
  else{
    percentage = Math.floor((good / this.countTotalFeedback())*100);
  return percentage
  }
}
  
  render(){
    const options = Object.keys(this.state)
    const {good,neutral,bad}=this.state
    return(
      <>
      <Section text={"Please leave feedback"}>
        <FeedbackOptions options={options} onClick={this.handleClickOnBtn}></FeedbackOptions>
{good === 0 && neutral === 0 && bad === 0 && (
  <Notification text={"There is no feedback yet"} />
)}

{(good !== 0 || neutral !== 0 || bad !== 0) && (
  <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    countTotal={this.countTotalFeedback}
    countPercentage={this.countPositiveFeedbackPercentage}
  />
)}

      </Section>
      </>
    )
  }
}

export default App