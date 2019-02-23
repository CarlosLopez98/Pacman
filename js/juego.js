var jugando;
var mensaje;
var cont;

inicio();

function inicio(){
	jugando = true;

	canvas = document.getElementById('micanvas');
	canvas.width = 448;
	canvas.height = 544;

	contexto = canvas.getContext("2d");
	buffer = document.createElement('canvas');

	bloques = new Bloques();
	pacman = new Pacman();
	fantasmas = [new Fantasma('rojo'),new Fantasma('rosa'),new Fantasma('azul')];
	comida = new Food();

	cont = 1;
	puntaje = 0;

	run();
}

function run(){ 
	buffer.width = canvas.width;
	buffer.height = canvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){
		// Juego
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		bloques.pintarMapa(contextoBuffer);

		comida.ponerComida(contextoBuffer);
		//console.log(puntaje);
		comido = comida.comer(pacman.pos_pacman, puntaje);
		puntaje = comido[0];
		fantasmaComer = comido[1];
		
		if(comida.comida.length == 0){
			comida.reiniciar();
		}

		pacman.pintarPacman(contextoBuffer);
		pacman.moverPacman();

		for(var i=0; i<fantasmas.length; i++){
			fantasmas[i].pintarFantasma(contextoBuffer);
			fantasmas[i].moverFantasma();

			if(fantasmaComer){
				// Pacman comio la galleta grande y los fantasmas pasan a su forma debil
				fantasmas[i].estado = false;
			}
			
			// Colision de pacman con los fantasmas
			if(pacman.colisionFantasma(fantasmas[i].pos_fantasma)){
				if(fantasmas[i].estado){
					// Cuando colisionan en la forma normal de los fantasmas
					jugando = false;
				}else{
					// Cuando estan en su forma debil, se reinicia al fantasma en cuestion en la base
					fantasmas[i].reiniciar();
					puntaje += 200;
				}
			}

			// Tiempo de recuperacion de los fantasmas a su forma normal
			if(!fantasmas[i].estado){
				if(cont % 2000 == 0){
					fantasmas[i].estado = true;
				}
			}
		}
		// contador que ayuda a contar el tiempo de los fantasmas en su forma debil
		cont++;

		ponerPuntaje(contextoBuffer);
		
		
		contexto.clearRect(0,0,canvas.width,canvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",10);
		
	}else{
		// Game over
		if(pacman.vidas > 1){
			pacman.vidas--;
			jugando = true;
			reiniciar();
			mensaje = "Te quedan "+pacman.vidas+" vidas";
			alert(mensaje);
			run();
		}else{
			juego = false;
			mensaje = "Game over! Tu puntaje fue: "+puntaje;
			alert(mensaje);

			mensaje = "Quieres volver a jugar?";
			var opc = confirm(mensaje);

			if(opc){
				juego = true;
				reiniciar();
				pacman.vidas = 4;
				comida.reiniciar();
				puntaje = 0;
				run();
			}
		}

		/*contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		pacman.sprite = 0;
		pacman.pintarPacman(contextoBuffer);
		contexto.drawImage(buffer, 0, 0);*/
	}
	
}

function reiniciar(){
	pacman.reiniciar();

	for(var i=0; i<fantasmas.length; i++){
		fantasmas[i].reiniciar();
	}

}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)
		pacman.actualizar('arriba');
	if(event.which==40 || event.which==83)
		pacman.actualizar('abajo');
	if(event.which==39 || event.which==68)
		pacman.actualizar('derecha');
	if(event.which==37 || event.which==65)
		pacman.actualizar('izquierda');
	
}

function ponerPuntaje(context){
	context.fillStyle = "green";
	context.font = "bold 18px sans-serif";
	context.fillText(puntaje, 200, 530);
}

function ponerMensaje(){

}

document.addEventListener("keydown",capturaTeclado);