// function NextQuestion(props) {
  
 
//   return (
//     <div>
      
//       <button onClick={props.nextQuestion}>Next Question</button>
//       <p>Question {props.curQuestion}</p>
//     </div>
//   );
// }
// export default NextQuestion;

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
function NextQuestion(props) {
  const answerDisplayed = props.answerDisplayed;
  // <p>Question {props.curQuestion}</p>
 if(answerDisplayed != null){
    return (
    <div>
      
      <button onClick={props.nextQuestion}>Next Question</button>
      <p>Question {props.curQuestion}</p>
    </div>
  )
 }else{
   return(
     <p>Question {props.curQuestion}</p>
   )
 }
  }
export default NextQuestion;