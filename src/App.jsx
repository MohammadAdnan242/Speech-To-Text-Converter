import React, { useState } from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

const App=()=>{
  const[textToCopy,settextToCopy] =useState();
 const [isCopied, setCopied] = useClipboard(textToCopy);
 const StartListening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
 

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }



  return (
    <>
        <div className="container">
          <h2>Speech To Text Converter</h2>
          <br/>

       <p>A React hook that convert speech from microphone to text and make it available on your screen .  </p>

       <div className="main_style" onClick={()=>settextToCopy(transcript)}>
        {transcript}

       </div>

       <div className='btn_style'>
       <button onClick={setCopied}>
         {isCopied ? "Copied! 👍" : "Copy To Clipboard 👎"}
      </button>
         <button onClick={StartListening}>Start Listening</button>
         <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
       </div>


        </div>
    </>
  )
}


export default App
