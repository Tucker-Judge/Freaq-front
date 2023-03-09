
import {useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function FlashcardSet({ selectedSet, languageApp, user }) {
  
  const [truth,setTruth] = useState(false)
  const [input, setInput] = useState("")
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const [timerStart, setTimerStart] = useState(10)
  const [timerEnd, setTimerEnd] = useState(0)
  const [speechInput, setSpeechInput] = useState("")
  const {
    transcript,
    // resetTranscript,
    listening,
    browserSupportsSpeechRecognition, 
    

  } = useSpeechRecognition(
    // Pass in the language configuration object
  );

  if (!browserSupportsSpeechRecognition) {
    return (
      <div>
        no... just get off whatever browser you are on it doesnt have support for literally anything
      </div>
    )
  }
  

 

  function inputValueChanged(e) {
    e.preventDefault()
    if (e.target.value === selectedSet[index].flashcard.front) {
      setCount(count + 1);
      setInput('');
    } else {
      setInput(e.target.value);
    }
  }
  useEffect(() => {
    console.log("fucking hell")
    if (count === 1) {
      textSynthesis()
    }
    if (count === 2){
     
      const clear = setInterval(() => {
        
        // handleSpeechRecognition()
        if (transcript.includes(selectedSet[index].flashcard.front)){

        SpeechRecognition.stopListening()
        clearInterval(clear)
        if (index < 10) {

          setIndex(index+1)
          setCount(0)
          setTimerStart(10)
          console.log("genius")
        }
        else setTruth(true)
        }
      },1000)
    }
  },[count,transcript])
  // useEffect(() => {
  //   handleSpeechRecognition(selectedSet[index].flashcard.front)
  // }, [transcript])
  // text synthesis function
  function textSynthesis() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(selectedSet[index].flashcard.front);
    utterance.lang = user.lang_code
    utterance.addEventListener("end", () => {
      synth.cancel();
    });
    
    let interval = setInterval(() => {
      setTimerStart((prevTimerStart) => {
        const newTimerStart = prevTimerStart - 1;
        
        if (newTimerStart === 3 || newTimerStart === 8) {
          synth.speak(utterance);
        }
        
        if (newTimerStart <= 0) {
          clearInterval(interval);
          setCount(2)
        }
        
        return newTimerStart;
        
      });
    }, 500);
    
  }
  // function speechSynthesis(){
    //   const recognition = new SpeechRecognition()
    //   const grammarList = new SpeechGrammarList()
    //       recognition.lang = user.lang_code;
    //       recognition.interimResults = false;
    //       recognition.maxAlternatives = 1;
    //       recognition.grammars = grammarList
    //       recognition.start();
    
    //       recognition.onresult = function(event) {
      //         const speechResult = event.results[0][0].transcript.trim();
      //         setSpeechInput(speechResult);
      //         if (speechResult === selectedSet[index].flashcard.front) {
        //           setCount(count + 1);
        //           setSpeechInput('');
        //           recognition.stop();
        //         }
        //       }
        // }
        //  function handleSpeechRecognition(front) {
        //   const frontLower = front.toLowerCase();
        //    (() => {
        //     debugger;
        //     console.log(frontLower);
        //     console.log(transcript);
        //     if (transcript && transcript.includes(frontLower)) {
        //       SpeechRecognition.stopListening();
        //       console.log(transcript);
        //       setCount(count + 1);
        //     }
        //     else {
        //       console.error("idiot alert")
        //     }
        //   })();
        //   // SpeechRecognition.startListening({ language: "de-DE", continuous: true });
        //   // SpeechRecognition.onend = () => resultHandler();
        //   // recognition.onerror = () => resetTranscript();
        // }
        
        
        
        
      //    const whateva = () => {
      //     while (listening) {
      //     handleSpeechRecognition()
      //   }
      // }
      
      console.log(count)
        const GameComponent = ({flashcard}) => {
          // map through each card
          // function in map taking in card
          
          
          
    if (count === 0){
// i want to have the card displayed and it must be typed correctly to move on
// with accent keyboard below the game
return (
  <div className="card-container">
    <div className="card">
      {flashcard.front}
      {flashcard.one_back}
      <input onChange={(e) => inputValueChanged(e)} type="text" value={input} autoFocus />
    </div>
  </div>
);

    
  }
  else if (count === 1) {
    return (
      <div className="flashcard-container">
        <div className="flashcard">
          <p>{flashcard.front }</p>
          <p>{flashcard.one_back}</p>
          <button onClick={() => textSynthesis(flashcard.front)}>Again</button>
        </div>
      </div>
    );
  }
  else if (count == 2) {
    SpeechRecognition.startListening({language: "de-DE"})
    // handleSpeechRecognition(flashcard.front)

    // whateva()
    // handleSpeechRecognition()
    return (
      <div className="my-container">
        <p>Repeat the front of the card:</p>
        <p>{flashcard.front}</p>
        {listening ? <img className="my-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXb04ZJC0pLpX-xTy0nKZXYGb2QJJEI2Wg5A&usqp=CAU" /> : <p className="warning">this isn't working, I hate it here</p>}
        <p>I am losing it</p>
      </div>
    );
    
    
    }
  
  }
 

  return (
   
      
      <div> 
      
      <div key={index}>
      { <GameComponent flashcard = {selectedSet[index].flashcard }/>}
      {/* if index is 11 return a next button or an exit button */}
      </div>
      
      </div>
      
    
      );
  
}

export default FlashcardSet;

