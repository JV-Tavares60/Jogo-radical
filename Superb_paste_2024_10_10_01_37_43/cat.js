const falling = 'falling';
const jumping = 'jumping';
const idle = 'idle';
var state = idle
let Xcat = 50;
let Ycat = 307
let sizecat = 60
var jmax = 160;
let flor = 310
let Jspeed = 13
let Fspeed = 6



function drawCharacter(){
  fill('black')
  rect (Xcat, Ycat, sizecat, sizecat)
  jump()
  fall()
 
}


function JumpPressed(){
  if(state===idle){
    state = jumping
  }
  console.log(state)
}

    
function jump(){
  if(state===jumping){
    Ycat -= Jspeed
  }
  if(Ycat <= jmax){
    state = falling
  }
}

function fall(){
  if(state === falling){
    Ycat += Fspeed
  }
  if(Ycat >= flor){
    state = idle
  }
}