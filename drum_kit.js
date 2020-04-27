window.addEventListener('keydown',event=>{
//now let's select the audio tag with data-key attrs
  const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`)
  //if there is no audio tag stop the keycode
  if(!audio) return;
  // else play the audio
  audio.play()
})
