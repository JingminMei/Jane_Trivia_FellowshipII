function AnswerChoices(props) {
  return <div class="“answer-choice">
    {/* <p>{props.answer}</p> */}
    {props.answer.map(placeHolder)}
  </div>;
}

function placeHolder(answer){
  return <p>{answer}</p>
}
export default AnswerChoices;
