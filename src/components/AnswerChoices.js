function AnswerChoices(props) {
  return <div class="“answer-choice">
    {/* <p>{props.answer}</p> */}
    {props.answer.map((answer,index)=> <button onClick ={()=> props.setDisplay(index)} >{answer}</button>)}
  </div>;
}

function placeHolder(answer){
  return <p>{answer}</p>
}
export default AnswerChoices;
