function Bloques(){
	this.tam_bloque = 16;

	this.bloques = [
		[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],
		[0,1],[13,1],[14,1],[27,1],
		[0,2],[13,2],[14,2],[27,2],
		[0,3],[3,3],[4,3],[5,3],[8,3],[9,3],[10,3],[13,3],[14,3],[17,3],[18,3],[19,3],[22,3],[23,3],[24,3],[27,3],
		[0,4],[3,4],[4,4],[5,4],[8,4],[9,4],[10,4],[13,4],[14,4],[17,4],[18,4],[19,4],[22,4],[23,4],[24,4],[27,4],
		[0,5],[27,5],
		[0,6],[27,6],
		[0,7],[3,7],[4,7],[5,7],[8,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[19,7],[22,7],[23,7],[24,7],[27,7],
		[0,8],[8,8],[13,8],[14,8],[19,8],[27,8],
		[0,9],[8,9],[13,9],[14,9],[19,9],[27,9],
		[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[8,10],[9,10],[10,10],[13,10],[14,10],[17,10],[18,10],[19,10],[22,10],[23,10],[24,10],[25,10],[26,10],[27,10],
		[5,11],[8,11],[19,11],[22,11],
		[5,12],[8,12],[19,12],[22,12],
		[0,13],[1,13],[2,13],[3,13],[4,13],[5,13],[8,13],[11,13],[16,13],[19,13],[22,13],[23,13],[24,13],[25,13],[26,13],[27,13],
		[11,14],[16,14],
		[11,15],[16,15],
		[0,16],[1,16],[2,16],[3,16],[4,16],[5,16],[8,16],[11,16],[16,16],[19,16],[22,16],[23,16],[24,16],[25,16],[26,16],[27,16],
		[5,17],[8,17],[19,17],[22,17],
		[5,18],[8,18],[19,18],[22,18],
		[0,19],[1,19],[2,19],[3,19],[4,19],[5,19],[8,19],[11,19],[12,19],[13,19],[14,19],[15,19],[16,19],[19,19],[22,19],[23,19],[24,19],[25,19],[26,19],[27,19],
		[0,20],[13,20],[14,20],[27,20],
		[0,21],[13,21],[14,21],[27,21],
		[0,22],[3,22],[4,22],[5,22],[8,22],[9,22],[10,22],[13,22],[14,22],[17,22],[18,22],[19,22],[22,22],[23,22],[24,22],[27,22],
		[0,23],[5,23],[22,23],[27,23],
		[0,24],[5,24],[22,24],[27,24],
		[0,25],[1,25],[2,25],[5,25],[8,25],[11,25],[12,25],[13,25],[14,25],[15,25],[16,25],[19,25],[22,25],[25,25],[26,25],[27,25],
		[0,26],[8,26],[13,26],[14,26],[19,26],[27,26],
		[0,27],[8,27],[13,27],[14,27],[19,27],[27,27],
		[0,28],[3,28],[4,28],[5,28],[6,28],[7,28],[8,28],[9,28],[10,28],[13,28],[14,28],[17,28],[18,28],[19,28],[20,28],[21,28],[22,28],[23,28],[24,28],[27,28],
		[0,29],[27,29],
		[0,30],[27,30],
		[0,31],[1,31],[2,31],[3,31],[4,31],[5,31],[6,31],[7,31],[8,31],[9,31],[10,31],[11,31],[12,31],[13,31],[14,31],[15,31],[16,31],[17,31],[18,31],[19,31],[20,31],[21,31],[22,31],[23,31],[24,31],[25,31],[26,31],[27,31],
	];
	
	for(var i=0; i<this.bloques.length; i++){
		this.bloques[i][0] *= 16;
		this.bloques[i][1] *= 16;
	}

	// Pintar mapa
	this.pintarMapa = function(context){
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);

		for(var i=0; i<this.bloques.length; i++){
			context.fillStyle = "blue";
			context.fillRect(this.bloques[i][0], this.bloques[i][1], this.tam_bloque, this.tam_bloque);
			context.fillStyle = "black";
			context.strokeRect(this.bloques[i][0], this.bloques[i][1], this.tam_bloque, this.tam_bloque);
		}
	}

	// Chochar con la pared
	this.colision = function(pos, direccion){
		for(var i=0; i<this.bloques.length; i++){
			if(direccion == 0){
				if(pos[0]+this.tam_bloque*2 == this.bloques[i][0] && pos[1] == this.bloques[i][1]){
					return true;
				}
			}
			if(direccion == 1){
				if(pos[0]-this.tam_bloque == this.bloques[i][0] && pos[1] == this.bloques[i][1]){
					return true;
				}
			}
			if(direccion == 2){
				if(pos[0] == this.bloques[i][0] && pos[1]-this.tam_bloque == this.bloques[i][1]){
					return true;
				}
			}
			if(direccion == 3){
				if(pos[0] == this.bloques[i][0] && pos[1]+this.tam_bloque*2 == this.bloques[i][1]){
					return true;
				}
			}
		}

		return false;	
	}
}


