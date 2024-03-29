import './style.css'
import { setupScene } from './scene.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Full Screen test</h1>

    <button id='fullscreen-btn'>Full screen</button>
    <br/>
    <br/>
    <div id='viewer'></div>    

  </div>
`

document.getElementById('fullscreen-btn')!.addEventListener('click', function() {
  var canvas = document.querySelector('canvas')!;

  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }
  
});

setupScene("viewer");