var tris = {
	
	segno:"X",
	arraydinamicagioco: new Array(),
	outputVittoria: "Tris!",
	vittoria: false,
  
	scriviSegno: function (id){
		
		var casella = document.getElementById(id);
		
		if(casella.value == "" && this.vittoria==false){
			
			casella.value = this.segno;
			this.aggiungiSegnoArray(id,this.segno);
			
			if(this.segno == "X"){
			
				this.segno = "O";
			
			}
		
			else{
			
				this.segno = "X";
			
			}
			
		}

	},
	
	aggiungiSegnoArray: function(id,segno){
		
		this.arraydinamicagioco[id-1] = segno;
		this.controllo();
		
	},
	
	controllo: function(){
		
		var p_result = document.getElementById("result");
		
		if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[1] && this.arraydinamicagioco[1] == this.arraydinamicagioco[2]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[3] != null && this.arraydinamicagioco[3] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[5]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[6] != null && this.arraydinamicagioco[6] == this.arraydinamicagioco[7] && this.arraydinamicagioco[7] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[3] && this.arraydinamicagioco[3] == this.arraydinamicagioco[6]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[1] != null && this.arraydinamicagioco[1] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[7]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[2] != null && this.arraydinamicagioco[2] == this.arraydinamicagioco[5] && this.arraydinamicagioco[5] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
		if(this.arraydinamicagioco[6] != null && this.arraydinamicagioco[6] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[2]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
		
		}
		
	}
  
};