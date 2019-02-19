var puntaje = 0;

var ciclos = 0;
var iteraciones = 1;

/* CONTROLES */
var KEY_LEFT  = 37;
var KEY_UP    = 38;
var KEY_RIGHT = 39;
var KEY_DOWN  = 40;
var aTecla    =  0;

window.onload=function(){
	canvas = document.getElementById("micanvas");
	canvas.width = 448;
	canvas.height = 544;
	if(canvas && canvas.getContext){
		context = canvas.getContext("2d");
		if(context){
			pintarMapa();
			ponerComida();
			imagen = new Image();
			imagen.src = "img/sprites.png";
			imagen.onload = function(){
				animar();
			}
		}else{
			alert("Error al crear el contexto");
		}
	}
}

function animar(){
	requestAnimationFrame(animar);
	if(aTecla == 37 || aTecla == 38 || aTecla == 39 || aTecla == 40){
		if(ciclos > 3){
			
				if(aTecla == KEY_RIGHT){
					pacDireccion = 0;
				}else if(aTecla == KEY_LEFT){
					pacDireccion = 1;
				}else if(aTecla == KEY_UP){
					pacDireccion = 2;
				}else if(aTecla == KEY_DOWN){
					pacDireccion = 3;
				}

			ciclos = 0;
		}else{
			ciclos++;
		}
	}else{
		if(iteraciones > 19){
			iteraciones = 0;
		}

		context.clearRect(0,0,canvas.width,canvas.height);
		pintarMapa();
		ponerComida();

		pintarPacman();

		pintarFantasmas();

		iteraciones++;

	}

	if(!colision(pos_pacman, pacDireccion)){
		if(pos_pacman[1] % 16 == 0){
			if(pacDireccion == 0) pos_pacman[0]+=2;
			if(pacDireccion == 1) pos_pacman[0]-=2;
		}
		if(pos_pacman[0] % 16 == 0){
			if(pacDireccion == 2) pos_pacman[1]-=2;
			if(pacDireccion == 3) pos_pacman[1]+=2;
		}
	}

	moverFantasma1();
	moverFantasma2();

	comer(pos_pacman, pos_fantasmas);
	ponerPuntaje();
}

document.addEventListener("keydown",function(e){
	aTecla = e.keyCode;
});

document.addEventListener("keyup",function(e){
	aTecla = 0;
	iteraciones = 0;
	ciclos = 2;
});