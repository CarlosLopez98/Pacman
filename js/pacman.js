var pos_pacman = [13*16,23*16];
var pacDireccion = 0;

// Sprites de pacman
pacman = [
	[[0,0],[1,0],[2,0],[1,0]], // Sprites derecha
	[[0,1],[1,1],[2,0],[1,1]], // Sprites izquierda
	[[0,2],[1,2],[2,0],[1,2]], // Sprites Arriba
	[[0,3],[1,3],[2,0],[1,3]]  // Sprites Abajo
];

muerte = [
	[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0]
];

function pintarPacman(){
	context.drawImage(imagen, 
		pacman[pacDireccion][Math.trunc(iteraciones/5)][0]*16, pacman[pacDireccion][Math.trunc(iteraciones/5)][1]*16, 
		16, 16, pos_pacman[0], pos_pacman[1], 32, 32);
}

function moverPacman(){
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
}

function colisionFantasma(posFantasma){
	posCentroPacman = [pos_pacman[0]+16,pos_pacman[1]+16];
	posCentroFantansma = [posFantasma[0]+16,posFantasma[1]+16];

	if(Math.trunc(posCentroPacman[0]/16) == Math.trunc(posCentroFantansma[0]/16) && Math.trunc(posCentroPacman[1]/16) == Math.trunc(posCentroFantansma[1]/16)){
		return true;
	}

	return false;
}