function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goToNextQuestion}>Next Question</button>
      <p>Question </p>
    </div>
  );
}
export default NextQuestion;
