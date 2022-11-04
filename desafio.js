console.log("Bem-vindo(a) ao jogo de Blackjack!")

let cartasJogador = [];
let cartasComputador = [];

if (confirm("Deseja jogar BlackJack?")) {

   let validarCarta = false

   
   while (!validarCarta) {     
      cartasJogador.push(comprarCarta(), comprarCarta())
      cartasComputador.push(comprarCarta(), comprarCarta())

      if ((cartasJogador[0].texto.includes("A") && cartasJogador[1].texto.includes("A")) || (cartasComputador[0].texto.includes("A") && cartasComputador[1].texto.includes("A"))) {
         cartasJogador = []
         cartasComputador = []
      } else {
         validarCarta = true
      }
   }

   let comprando = true
 
   while (comprando) {
      let textos = "";
      let pontos = 0;
      for(let carta of cartasJogador){
         textos += carta.texto + " "
         pontos += carta.valor
      }

      if (pontos > 21) {
         comprando = false
      }else{
         let continuarComprando = confirm(`Suas cartas são ${textos}. A carta do computador é ${cartasComputador[0].texto}.
         Deseja comprar mais uma carta?`)

         if(continuarComprando){
            cartasJogador.push(comprarCarta())
         }else{
            comprando = false
         }
      }
   }

   
   let totalPontosJogador = 0
   let totalTextosJogador = ""

   let totalPontosComputador = 0
   let totalTextosComputador = ""

   for(let carta of cartasJogador){
      totalPontosJogador += carta.valor
      totalTextosJogador += carta.texto + " "
   }

   for(let carta of cartasComputador){
      totalPontosComputador += carta.valor
      totalTextosComputador += carta.texto + " "
   }


   if(totalPontosJogador <= 21){
      while(totalPontosComputador < totalPontosJogador && totalPontosComputador <= 21){

         cartasComputador.push(comprarCarta())

          totalPontosComputador = 0
          totalTextosComputador = ""

          for(let cartaValorJogador of cartasJogador){
            totalPontosComputador += cartaValorJogador.valor
            totalTextosComputador += cartaValorJogador.texto + " "
         }
      }
   }

   let resultado = ""
  
   if(totalPontosJogador > totalPontosComputador && totalPontosJogador <=21){
      resultado = "O jogador Ganhou"
   }
   else if(totalPontosComputador > totalPontosJogador && totalPontosComputador <=21){
      resultado = "O computador ganhou"
   }
   else if(totalPontosJogador > 21 && totalPontosComputador <=21){
      resultado = "O computador ganhou"
   }else{
      resultado = "Empate"
   }

   console.log(`Valor do usuario ${totalTextosJogador} - total: ${totalPontosJogador}
   Valor do computador ${totalTextosComputador} - total: ${totalPontosComputador} 
   ${resultado}`)


} else {
   alert("O jogo acabou!")
}

