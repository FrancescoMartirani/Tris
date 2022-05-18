
var creatoregioco = {
	
	numeroCasellePerLato: 0,
	
	determinaGioco: function(){
		
		var giocoScelto = document.querySelector("input[name='sceltaGioco']:checked").value;
		
		if(giocoScelto == "Tris"){
			
			this.numeroCasellePerLato = 3;

		}
		
		if(giocoScelto == "Quadris"){
			
			this.numeroCasellePerLato = 4;
			
		}	
		
		this.creaGioco();
		
	},
	
	creaGioco: function(){
		
		var grigliagioco = document.getElementById("grigliagioco");
		var table = document.createElement("table");
		
		grigliagioco.appendChild(table);
		
		var z = 1;
			
		for(i=0;i<this.numeroCasellePerLato;i++){
				
			var tr = document.createElement("tr");
			table.appendChild(tr);
				
			for(k=0;k<this.numeroCasellePerLato;k++){
					
				var td = document.createElement("td");
				tr.appendChild(td);
				var input = document.createElement("input");
				td.appendChild(input);
				input.setAttribute("class","casella");
				input.setAttribute("type","button");
				input.setAttribute("onclick","gioco.scriviSegno(this.id)");	
				input.setAttribute("id",z);
				z++;
					
				
			}

		}
		
		document.body.removeChild(document.getElementById("form"));
		document.getElementById("punteggi").style.display = "block";
		document.getElementById("displayandbutton").style.display = "block";
		
	}
	
};