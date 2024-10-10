let carx = 700
let cary = 317
let Lcar = 30
let Acar = 50 

let car2x = 900
let car2y = 260
let Lcar2 = 40
let Acar2 = 25

let num = 100
let xbot = 205
let ybot = 195
let Lbot = 150
let Abot = 60
let timecont = 0
let time = 0
let vida = 3
let ggx = 205
let ggy = 195
let Lgg = 280
let Agg = 120
let pont = 0
let pontmax = 0


function drawEnemy(){
  rect (carx, cary, Lcar, Acar)
  rect(car2x, car2y, Lcar2, Acar2)
  move()
  hits()
}

function move(){
  carx -= 5
  if(carx < -10){
    carx = 500
  }
  if(time >= 25){
    car2x -= 5
  }
  if(car2x < -20){
    car2x = random(700, 900)
  }
}

function hits(){
  //PONTUAÇÃO
  textSize(20)
  text('PONTUAÇÃO:', 83, 90)
  timecont += 1

  
  if (timecont == 100)  {
    time += 5 ;
    timecont = 0
  }
  text(time, 170, 90)
   
 //VIDA
  text('VIDAS:', 300, 90)
  text(vida, 350, 90)
  
  //COLISÃO
  if(dist(carx, cary, Xcat, Ycat)<45){
    carx += 5
    car2x += 5
    Ycat = cary + 10
    timecont -= 1 
 
    
  //BOTÃO DE RESTART
    rectMode(CENTER)
    fill('yellow')
    rect(xbot, ybot, Lbot, Abot, 15)
    

    
      if(mouseX > xbot - Lbot/2 && mouseX < xbot + Lbot/2 && mouseY > ybot - Abot/2 && mouseY < ybot + Abot/2){
    stroke('black');
    fill('blue')
    rect(xbot, ybot, Lbot, Abot, 15)
        
      
        
      if(mouseIsPressed){
        carx = 500
        car2x = 900
        Xcat = 80
        Ycat = 307
        rect (carx, cary, Lcar, Acar)
        rect(car2x, car2y, Lcar2, Acar2)
        vida -= 1
        pontmax = time
        
        if(time>pontmax){
          pontmax = time
        }
      if(vida<0){
      tela = 5
    }
      if(vida===-1){
         vida = 3  
        time = 0
          }
  } 
}  
        fill('black')
        noStroke();
        textSize(20)
        text('RECOMEÇAR', 205, 200)  
  }
  
  // COLISÃO DO SEGUNDO
else if(dist(car2x, car2y, Xcat, Ycat)<45){
    car2x += 5
    carx += 5
    Ycat = car2y
    timecont -= 1 
    
    
  //BOTÃO DE RESTART
    rectMode(CENTER)
    fill('yellow')
    rect(xbot, ybot, Lbot, Abot, 15)
    

    
      if(mouseX > xbot - Lbot/2 && mouseX < xbot + Lbot/2 && mouseY > ybot - Abot/2 && mouseY < ybot + Abot/2){
    stroke('black');
    fill('blue')
    rect(xbot, ybot, Lbot, Abot, 15)
        
      
        
      if(mouseIsPressed){
        carx = 500
        car2x = 900
        Xcat = 80
        Ycat = 307
        rect (carx, cary, Lcar, Acar)
        rect(car2x, car2y, Lcar2, Acar2)
        vida -= 1
        pontmax = time

        if(time>pontmax){
          pontmax = time
        }
      if(vida<0){
      tela = 5
    }
      if(vida===-1){
         vida = 3  
        time = 0
          }
  } 
}  
        fill('black')
        noStroke();
        textSize(20)
        text('RECOMEÇAR', 205, 200)  
   
}

}