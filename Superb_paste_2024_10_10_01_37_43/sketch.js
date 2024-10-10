let altura = 70
let largura = 250
let Xmenu = 200
let Ymenu1 = 130
let Ymenu2 = 220
let Ymenu3 = 310
let tela = 1
let Xvolta = 70
let Yvolta = 40
let alturaV = 50
let larguraV = 120

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.touchEnded(JumpPressed)
  frameRate(100)
}


function draw() {
  //Tela do Menu
  if(tela === 1 ){
    textAlign(CENTER)
    rectMode(CENTER)
    background(150)
 
    fill('yellow')
    rect(Xmenu, Ymenu1, largura, altura, 15)
    fill('yellow')
    rect(Xmenu, Ymenu2, largura, altura, 15)
    fill('yellow')
    rect(Xmenu, Ymenu3, largura, altura, 15)
    
  //Nome do Jogo
    stroke(10)
    textStyle(BOLDITALIC)
    textSize(45)
    text('JOGO RADICAL', 200, 65)
    textStyle(NORMAL)
    textSize(26)
  
  // Botão: Jogar
    if(mouseX > Xmenu - largura/2 && mouseX < Xmenu + largura/2 && mouseY > Ymenu1 - altura/2 && mouseY < Ymenu1 + altura/2){
      stroke(200);
      fill('blue')
      rect(Xmenu, Ymenu1, largura, altura, 15)
      if(mouseIsPressed){
        tela = 2
  }
}
  
    fill('black')
    noStroke();
    text('JOGAR', 200, 140)
  
  // Botão: Controles
    if(mouseX > Xmenu - largura/2 && mouseX < Xmenu + largura/2 && mouseY > Ymenu2 - altura/2 && mouseY < Ymenu2 + altura/2){
      stroke(200);
      fill('blue')
      rect(Xmenu, Ymenu2,largura, altura, 15)
      if(mouseIsPressed){
        tela = 3
  }
    }
    fill('black')
    noStroke();
    text('CONTROLES', 200, 230)
    
    //Botão: Créditos
    if(mouseX > Xmenu - largura/2 && mouseX < Xmenu + largura/2 && mouseY > Ymenu3 - altura/2 && mouseY < Ymenu3 + altura/2){
      stroke(200);
      fill('blue')
      rect(Xmenu, Ymenu3, largura, altura, 15)
      if(mouseIsPressed){
        tela = 4
  }
    }
    fill('black')
    noStroke();
    text('CRÉDITOS', 200, 320)
  
    }
  
  // TELA 2: JOGAR 
  if(tela === 2){
    textAlign(CENTER)
     rectMode(CENTER)
    background(150);
    stroke('black')
    fill('#A251FA')
    rect(200, 70, 400, 500)
    drawCharacter()
    drawEnemy()
  }
  
  // TELA 3: CONTROLES
    if(tela===3){
    textAlign(CENTER)
    textStyle(NORMAL)
    textSize(26)
    rectMode(CENTER)
    background(150)
    
    fill('yellow')
    rect(Xvolta, Yvolta, larguraV, alturaV, 15)
    
    //Botão: VOLTAR
    if(mouseX > Xvolta - larguraV/2 && mouseX < Xvolta + larguraV/2 && mouseY > Yvolta - alturaV/2 && mouseY < Yvolta + alturaV/2){
      stroke(200);
      fill('blue')
      rect(Xvolta, Yvolta, larguraV, alturaV, 15)
      if(mouseIsPressed){
        tela = 1
      }
    }
    
     // TELA 3: CONTROLES
    fill('black')
    noStroke();
    textSize(20)
    text('ESPAÇO OU TOQUE NA TELA: PULAR', 200, 200)
    
    text('VOLTAR', 70, 50)
  }
  
  // TELA 4: CRÉDITOS
    if(tela===4){
    textAlign(CENTER)
    textStyle(NORMAL)
    textSize(20)
    rectMode(CENTER)
    background(150)
    
    fill('yellow')
    rect(Xvolta, Yvolta, larguraV, alturaV, 15)
    
    //Botão: VOLTAR
    if(mouseX > Xvolta - larguraV/2 && mouseX < Xvolta + larguraV/2 && mouseY > Yvolta - alturaV/2 && mouseY < Yvolta + alturaV/2){
      stroke(200);
      fill('blue')
      rect(Xvolta, Yvolta, larguraV, alturaV, 15)
      if(mouseIsPressed){
        tela = 1
      }
    }
    // TELA 4: CRÉDITOS
    fill('black')
    noStroke();
    text('Nome: João Vitor Tavares Dantas', 200, 150)
    text('Email: joao_2005vitor@hotmail.com', 200, 200)
    text('Ideia do jogo: Novidades em breve.', 200, 250)
    textSize(25)
    text('VOLTAR', 70, 50)
  }
    fill('blue')
    circle(mouseX, mouseY, 1)
  
  if(tela===5){
    textAlign(CENTER)
    textStyle(NORMAL)
    textSize(20)
    rectMode(CENTER)
    background(150)
    
    //Botão: VOLTAR
       fill('yellow')
    rect(Xvolta, Yvolta, larguraV, alturaV, 15)
    if(mouseX > Xvolta - larguraV/2 && mouseX < Xvolta + larguraV/2 && mouseY > Yvolta - alturaV/2 && mouseY < Yvolta + alturaV/2){
      stroke(200);
      fill('blue')
      rect(Xvolta, Yvolta, larguraV, alturaV, 15)
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    fill('black')
    noStroke();
     textSize(50)
    text('FIM DE JOGO.', 200, 200)
    textSize(25)
    text('PONTUAÇÃO:', 170, 300)
    text(pontmax, 280, 300)
    
    
    textSize(25)
    text('VOLTAR', 70, 50)
  }
  
}

function keyReleased() {
    if (keyCode === 32) {
    JumpPressed()
  }
}