# javascript-pure
Review JS

- Regras do jogo
        
    - Existem 2 jogadores: o usuário e o computador.

    - Os jogadores usam um baralho com muitas cartas. As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K) e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).

    - Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser de qualquer uma das 52 cartas, com probabilidade igual.

    - As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). As cartas J, Q e K tem valor 10, e a carta A tem valor 11.

    - O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
    
    - O jogador com a maior pontuação ganha a rodada.



* Desafio:

- Se as duas cartas iniciais do usuário ou do computador forem dois ases (`A`), as cartas devem ser sorteadas novamente.

- Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta.

- A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu.

- Quando o jogador parar de comprar cartas (Ter clicado cancel ao receber a pergunta "Deseja comprar mais uma carta?") e tiver a pontuação menor ou igual a 21, inicia-se a rodada do computador. Ele deverá comprar cartas até que sua pontuação seja igual ou superior a do usuário. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário.

- Se a pontuação do usuário for maior que 21, ele perde o jogo. Se a pontuação do computador for maior que 21 (e a do usuário não for), o usuário ganha o jogo.  Se as pontuações do usuário e do computador forem iguais, o jogo termina em empate.
