import React from 'react'
import '../component/main.css'

function clear() {

document.querySelector('.cavab').innerHTML="😉";

}
function sum() {
    var a=5;
    var b=10;
    var cavab=a+b;
    document.querySelector('.cavab').innerHTML=cavab;
   
}

function Content() {
  return (
    <div>
      <p className="cavab">0</p>
      <button onClick={sum} className="btn">Topla</button>
      <button onClick={clear} className='clk'>Click</button>
    </div>
  )
}

export default Content
