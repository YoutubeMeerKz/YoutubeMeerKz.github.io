function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
movimentarVaca();
  mostarVaca();
  mostarCarros();
  movimentaCarros();
  mostraPlacar();
  pontuar();
  atropelamento();
}
  
else{
    //Verifica e mostra campeão
    if(meuPlacar == 5)
      vacaVenceu();
    else
      touroVenceu();    
  }
}