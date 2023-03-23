// import React, { useRef, useState } from "react";

// export default function test() {
//     const [inputValue, setInputValue] = useState('Type your input here');

//     function handleInput(event) {
//       setInputValue(event.target.textContent);
//       console.log(inputValue)
//     }
  
//     return (
//       <div
//         contentEditable={true}
//         onInput={handleInput}
//         dangerouslySetInnerHTML={{ __html: inputValue }}
//       />
//     );
// }

import React from 'react'
import HomeLayout from '../components/Layouts/HomeLayout'

function test() {
  return (
    <HomeLayout/>
  )
}

export default test
