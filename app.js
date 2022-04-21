


var tmBtn=document.querySelector('.tm-btn');

var virus=document.querySelector(' .virus');
var giris=document.querySelector(' .giris');
var content=document.querySelector(' .content');
var body=document.querySelector('body');


var radioCikis=document.querySelector('.radio-btn-exit');
var radioBttn=document.querySelector('.radio-btn');


body.style.overflow="hidden";

giris.addEventListener('click',function(){

  content.style.display="none";


body.style.overflow="scroll";
})


radioCikis.addEventListener('click',function(){

  radioBttn.style.display='none';

})

let phonee=document.getElementsByClassName("new");

tmBtn.addEventListener('click',function(){


let virusDn=document.querySelector('.virus-donanım');


   basarı();

        gecikmeHack();

for(let i =0;i<phonee.length;i++)
{
    if(phonee[i].checked && phonee==6){

       

    }
       else{
         
       // radioBttn.style.display='flex'
          // btn
              
    }




}


var telefon=document.getElementsByClassName('telefon');

for(let j =0;j<telefon.length;j++)
{
    if(telefon[j].checked){
        console.log(telefon[j].value);
        
       
        virusDn.textContent= `${telefon[j].value}  İşlemci Hattası`
    
          
    }
}

  


 





})

function basarı(){
 var btn=document.querySelector('.btn');
 
 var HackImage=document.querySelector(' .Hack-image');
   btn.style.display="block";

    setTimeout(() => {  
     
     btn.style.display="none";
     HackImage.style.display="block";
        
                

}, 700);
}





function gecikmeHack(){

    let from=document.querySelector(".Contener");
 setTimeout(() => {  
     var HackImage=document.querySelector(' .Hack-image');
     
          HackImage.style.display="none";
         
    
                var intervalID = window.setInterval(updateScreen, 200);
                 body.style.background='black';
                  body.style.height='auto';
                  from.style.display="none";

                virus.style.display="block";


                     setTimeout(() => {  

                        var arama=document.querySelector('.enSon');
                        arama.style.display='block';
                        

                }, 3500);



}, 1000);



}








       
var c = document.getElementById("console");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "Troyer find"
]

var docfrag = document.createDocumentFragment();

function updateScreen() {

  txt.push(txt.shift());
 
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}







