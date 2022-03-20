// Função start()

function start() {
	$("#inicio").hide();
	
	$("#fundo-game").append("<div id='jogador' class='anima1'></div>");
	$("#fundo-game").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundo-game").append("<div id='inimigo2'></div>");
	$("#fundo-game").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
	
	var jogo = {}
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
	movefundo();
	
	} // Fim da função loop()

    //Função que movimenta o fundo do jogo
	
	function movefundo() {
	
	esquerda = parseInt($("#fundo-game").css("background-position"));
	$("#fundo-game").css("background-position",esquerda-3);
	
	} // fim da função movefundo()
} 

