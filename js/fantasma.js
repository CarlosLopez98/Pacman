var pos_fantasmas = [[192,224],[224,224]];
var fan1Direccion = 0;
var fan2Direccion = 0;

fantasma1 = [
	[[0,4],[1,4]], //derecha
	[[2,4],[3,4]], //izquierda
	[[4,4],[5,4]], //arriba
	[[6,4],[7,4]]  //abajo
];

fantasma2 = [
	[[0,5],[1,5]], //derecha
	[[2,5],[3,5]], //izquierda
	[[4,5],[5,5]], //arriba
	[[6,5],[7,5]]  //abajo
];

fantasmaLoco = [
	[8,4],[9,4],[10,4],[11,4]
];

function pintarFantasmas(){
	// Dibujar los fantasmas
	if(!fantasmaComer){
		context.drawImage(imagen, fantasma1[fan1Direccion][Math.trunc(iteraciones/10)][0]*16, fantasma1[fan1Direccion][Math.trunc(iteraciones/10)][1]*16, 16, 16, pos_fantasmas[0][0], pos_fantasmas[0][1], 32, 32);
		context.drawImage(imagen, fantasma2[fan1Direccion][Math.trunc(iteraciones/10)][0]*16, fantasma2[fan1Direccion][Math.trunc(iteraciones/10)][1]*16, 16, 16, pos_fantasmas[1][0], pos_fantasmas[1][1], 32, 32);
	}else{
		context.drawImage(imagen, fantasmaLoco[Math.trunc(iteraciones/5)][0]*16, fantasmaLoco[Math.trunc(iteraciones/5)][1]*16, 16, 16, pos_fantasmas[0][0], pos_fantasmas[0][1], 32, 32);
		context.drawImage(imagen, fantasmaLoco[Math.trunc(iteraciones/5)][0]*16, fantasmaLoco[Math.trunc(iteraciones/5)][1]*16, 16, 16, pos_fantasmas[1][0], pos_fantasmas[1][1], 32, 32);	
	}
}

function moverFantasma1(){
	if(!colision(pos_fantasmas[0], fan1Direccion)){
		if(pos_fantasmas[0][1] % 16 == 0){
			if(fan1Direccion == 0) pos_fantasmas[0][0]+=2;
			if(fan1Direccion == 1) pos_fantasmas[0][0]-=2;
		}
		if(pos_fantasmas[0][0] % 16 == 0){
			if(fan1Direccion == 2) pos_fantasmas[0][1]-=2;
			if(fan1Direccion == 3) pos_fantasmas[0][1]+=2;
		}
	}else{
		if(fan1Direccion == 0 || fan1Direccion == 1){
			fan1Direccion = Math.floor(Math.random() * 2) + 2;
		}else if(fan1Direccion == 2 || fan1Direccion == 3){
			fan1Direccion = Math.floor(Math.random() * 2);
		}
	}
}

function moverFantasma2(){
	if(!colision(pos_fantasmas[1], fan2Direccion)){
		if(pos_fantasmas[1][1] % 16 == 0){
			if(fan2Direccion == 0) pos_fantasmas[1][0]+=2;
			if(fan2Direccion == 1) pos_fantasmas[1][0]-=2;
		}
		if(pos_fantasmas[1][0] % 16 == 0){
			if(fan2Direccion == 2) pos_fantasmas[1][1]-=2;
			if(fan2Direccion == 3) pos_fantasmas[1][1]+=2;
		}
	}else{
		if(fan2Direccion == 0 || fan2Direccion == 1){
			fan2Direccion = Math.floor(Math.random() * 2) + 2;
		}else if(fan2Direccion == 2 || fan2Direccion == 3){
			fan2Direccion = Math.floor(Math.random() * 2);
		}
	}
}