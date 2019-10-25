let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  for(let i = 0; i < imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca, yVaca, 30, 30, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaVaca){
      yVaca = 367;
      colediu.play();
      if(meuPlacar > 0){meuPlacar -= 1;
      colediu.play();                 }
    }
    
    atropelaTouro = collideRectRect(xTouro, yTouro, 30, 30, xCarro[i],yCarro[i],  50, 30);
    
    if(atropelaTouro){
      yTouro = 367;
      colediu.play();  
      if(placarOponente > 0){
      placarOponente -= 1;
      colediu.play()}

    }
    
  }
}