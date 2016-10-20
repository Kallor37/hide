document.addEventListener('DOMContentLoaded', AggListener,false)
var out;
function AggListener(){
  var ck=document.getElementById("ONOFF");
  console.log(ck);

  chrome.storage.local.get("Attivo", function(items) {
    if (!chrome.runtime.error) {
      //console.log(items);
    if (items["Attivo"]=="SI"){
      ck.checked=true;
    }
    }
  });
  ck.addEventListener("click",Test,false);
  var ta=document.getElementById("lista");
  ta.addEventListener("keyup",Test,false);
  ta.addEventListener("change",Test,false);

  chrome.storage.local.get("Nomi", function(items) {
    if (!chrome.runtime.error) {
    ElencoNomi=items["Nomi"];
//    var ta=document.getElementById("lista");
    ta.value=ElencoNomi;
    //ta.addEventListener("keypress",Test,false);
    }
  });
}

function Test(){
  //SeparaNomi();
  var ta=document.getElementById("lista");
  chrome.storage.local.set({ "Nomi" : ta.value });

  var ck=document.getElementById("ONOFF");
  if (ck.checked){
    console.log('Acceso');
    //storage.setItem('Attivo', 'SI');
    chrome.storage.local.set({ "Attivo" : "SI" });
  } else {
    chrome.storage.local.set({ "Attivo" : "NO" });
    //storage.setItem('Attivo', 'NO');
    console.log('Spento');
  }
}
