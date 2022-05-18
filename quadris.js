var quadris = {
	
	segno:"X",
	arraydinamicagioco: new Array(),
	outputVittoria: "Quadris!",
	punteggioGiocatoreX: 0,
	punteggioGiocatoreO: 0,
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
		var button_resetta = document.getElementById("resetta");
		
		if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[1] && this.arraydinamicagioco[1] == this.arraydinamicagioco[2]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[0]);
		
		}
		
		else if(this.arraydinamicagioco[3] != null && this.arraydinamicagioco[3] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[5]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[3]);
		
		}
		
		else if(this.arraydinamicagioco[6] != null && this.arraydinamicagioco[6] == this.arraydinamicagioco[7] && this.arraydinamicagioco[7] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[6]);
		
		}
		
		else if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[3] && this.arraydinamicagioco[3] == this.arraydinamicagioco[6]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[0]);
		
		}
		
		else if(this.arraydinamicagioco[1] != null && this.arraydinamicagioco[1] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[7]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[1]);
		
		}
		
		else if(this.arraydinamicagioco[2] != null && this.arraydinamicagioco[2] == this.arraydinamicagioco[5] && this.arraydinamicagioco[5] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[2]);
		
		}
		
		else if(this.arraydinamicagioco[0] != null && this.arraydinamicagioco[0] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[8]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[0]);
		
		}
		
		else if(this.arraydinamicagioco[6] != null && this.arraydinamicagioco[6] == this.arraydinamicagioco[4] && this.arraydinamicagioco[4] == this.arraydinamicagioco[2]){
			
			p_result.innerHTML = this.outputVittoria;
			this.vittoria = true;
			button_resetta.disabled = false;
			this.assegnaPunteggio(this.arraydinamicagioco[6]);
		
		}
		
		else{
			
			var numeroCaselleOccupate = 0;
			
			for(i=0;i<this.arraydinamicagioco.length;i++){
			
				if(this.arraydinamicagioco[i] != null){
				
					numeroCaselleOccupate++;
					
				}
				
			}
			
			if(numeroCaselleOccupate==this.arraydinamicagioco.length){
			
				button_resetta.disabled = false;
				
			}
			
		}
		
	},
	
	resetta: function(){
		
		for(i=1;i<this.arraydinamicagioco.length+1;i++){
		
			document.getElementById(i).value = "";
			
		}
		
		this.vittoria = false;
		
		document.getElementById("result").innerHTML = "";
		
		for(i=0;i<this.arraydinamicagioco.length;i++){
			
			this.arraydinamicagioco[i] = null;
		
		}
		
		document.getElementById("resetta").disabled = true;
		
	},
	
	assegnaPunteggio: function(segno){
		
		if(segno == "X"){
			
			this.punteggioGiocatoreX++;
			document.getElementById("punteggioGiocatoreX").innerHTML = this.punteggioGiocatoreX;
			
		}
		
		else{
			
			this.punteggioGiocatoreO++;
			document.getElementById("punteggioGiocatoreO").innerHTML = this.punteggioGiocatoreO;
		
		}
		
	}
  
};