var pos_pacman = [13*16,23*16];
var pacDireccion = 0;

// Sprites de pacman
pacman = [
	[[0,0],[1,0],[2,0],[1,0]], // Sprites derecha
	[[0,1],[1,1],[2,0],[1,1]], // Sprites izquierda
	[[0,2],[1,2],[2,0],[1,2]], // Sprites Arriba
	[[0,3],[1,3],[2,0],[1,3]]  // Sprites Abajo
];

function pintarPacman(){
	context.drawImage(imagen, 
		pacman[pacDireccion][Math.trunc(iteraciones/5)][0]*16, pacman[pacDireccion][Math.trunc(iteraciones/5)][1]*16, 
		16, 16, pos_pacman[0], pos_pacman[1], 32, 32);
}