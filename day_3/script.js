/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

*/

let carreira = parseInt(prompt(`Qual carreira em programação você deseja seguir?\n[1] Front-end\n[2] Back-end`));
let tecnologiasParaConhecer = "";
let listaDeTecnologias = [];
let tecnologia = "";

if (carreira === 1) {
  tecnologia = prompt(`Seguindo na carreira de front-end, qual das duas tecnologias você deseja aprender? ReactJs ou VueJs?`);
} else if (carreira === 2) {
  tecnologia = prompt(`Seguindo na carreira de back-end, qual das duas linguagens você deseja aprender? Java ou C#?`);
}

let continuarCarreira = parseInt(prompt(`[1] Você deseja continuar se especializando na área de ${carreira === 1 ? 'front-end' : 'back-end'}\nou\n[2] Seguir se desenvolvendo para se tornar Fullstack?`));

if (continuarCarreira === 1) {
  alert(`Continuar se aperfeiçoando em uma área específica é essencial para se tornar um bom profissional. \nBoa sorte na sua jornada!`);
} else {
  alert(`Optar por se tornar um desenvolvedor full-stack é uma escolha ousada. Você terá muitos desafios pela frente, mas não desista, todo sacrifício será recompensado. Boa sorte na sua jornada!`);
}

while (true) {
  tecnologiasParaConhecer = prompt('Quais tecnologias você gostaria de se especializar ou conhecer?\nDigite "parar" para interromper as perguntas.');
  
  if (tecnologiasParaConhecer === 'parar') {
    break; 
  }

  listaDeTecnologias.push(tecnologiasParaConhecer);
}

alert(`Tecnologias que você deseja aprender: \n${listaDeTecnologias.join(', ')}`);