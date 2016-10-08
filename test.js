var elems = document.getElementsByClassName("threadbit");
var ElencoNomi;

chrome.storage.local.get("Nomi", function(items) {
    if (!chrome.runtime.error) {
      //console.log(items);
	  ElencoNomi=items["Nomi"];
	  ElencoNomi=ElencoNomi.split(";");
	  console.log(ElencoNomi);
    }
  });

chrome.storage.local.get("Attivo", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
	  if (items["Attivo"]=="SI"){
		ElencoNomi.forEach(Nascondi);
	  }
    }
  });


function Nascondi(Nome){
	console.log("Nascondere:"+Nome);
	for (i = 0; i < elems.length; i++) {
		b=elems[i].getElementsByClassName('username understate');
		c=b[0].text
		if (c==Nome){
			elems[i].style.display='none';
		}
		//console.log('Nome:'+c)
	}

	var PP=document.getElementsByClassName('postcontainer')
	for (i = 0; i < PP.length; i++) {
		b=PP[i].getElementsByClassName('registrati')
    //console.log(b);

    if (b[0]==null){
      b=PP[i].getElementsByClassName('moderatori')
      //console.log("Moderatori:"+b);
    }
    if (b[0]==null){
      b=PP[i].getElementsByClassName('bannati')
      //console.log("Bannati:"+b);
    }
    if (b[0]==null){
      b=PP[i].getElementsByClassName('admin')
      //console.log("Bannati:"+b);
    }
    if (b[0]!=null){
  		c=b[0].textContent
  		if (c==Nome){
  			//console.log('bingo');
  			PP[i].style.display='none';
  		}
    }
	
	//Elimino i quote
	//console.log('Posizione:'+i);
	Quote=PP[i].getElementsByClassName('bbcode_quote');
	//console.log(Quote);
	if (Quote[0]!=null) {
		PB=Quote[0].getElementsByClassName('bbcode_postedby');
		//console.log(PB);
		//Prende pure i quote della firma, che possono essere senza nome
		if (PB[0]!=null){
			x=PB[0].getElementsByTagName("strong");
			if (x[0].innerHTML==Nome){
				Quote[0].style.display='none';
			}
		}
	}
	
  }
}