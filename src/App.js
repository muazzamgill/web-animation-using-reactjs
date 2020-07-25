/*
import React, {useRef, useEffect} from 'react';
*/
import React from 'react';
import './App.css';
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
function App() {
/*
  const element = useRef(null);
  useEffect(() => {
      element.current.focus();
  }, [])*/


const { ref, playState, getAnimation } = useWebAnimations({ ...shakeY});
/*
const { ref, playState, getAnimation } = useWebAnimations({
   keyframes: {
        transform: ["translate(0,0)"], // Move by 500px
        transform: ["translate(600px,0)"], // Move by 500px
        //background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
        //delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
        // Triggered when the animation is ready to play (Google Chrome: available in v84+)
             },


  /!*  onUpdate: ({ playState, animate, animation }) => {
        // Triggered when the animation enters the running state or changes state
            },
    onFinish: ({ playState, animate, animation }) => {
          // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
            }*!/

    // More useful options...

});
*/

  return (

/*
    <input ref={element} type='text'></input>
*/
      <div  className="container">
        <div className="target" ref={ref}></div>
        Current animation state: {playState}
        <button onClick={() => getAnimation().pause()}>Pause</button>
        <button onClick={() => getAnimation().play()}>Play</button>
      </div>
  );
}

export default App;

