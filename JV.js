function mostrarCuriosidade() {
  const curiosidades = [
    "O Creeper foi criado por acidente quando tentavam fazer um porco.",
    "Minecraft é o jogo mais vendido do mundo.",
    "Os Endermans têm um idioma próprio, baseado em inglês invertido.",
    "As primeiras versões do jogo eram apenas em preto e branco.",
    "A primeira versão do Minecraft foi criada em apenas 6 dias!"
  ];

  const sorteio = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  document.getElementById("curiosidade").innerText = sorteio;
}

