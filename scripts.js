var currentPick = 0;
var currentBan = 0;
var bBanning = false;
var bPicking = false;
var bFinished = false;
function ShowText(){
  document.getElementById("testeo").innerHTML = "yoyo"

}

function LoadCard(row, deckname, titlecard,func){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var txt = this.responseText;
      var obj = JSON.parse(txt);
      var data = document.getElementById(row);
      if(obj.hasOwnProperty('image_uris')){
        data.innerHTML="<img src=" + obj.image_uris.normal + "><div id=\""+data.id+"\" "+func+" class=\"shade\"><span>" + deckname+ "</span></div>";
      }else{
        data.innerHTML="<img src=" + obj.card_faces[0].image_uris.normal + "><div id=\""+data.id+"\""+func+" class=\"shade\"><span>" + deckname + "</span></div>";
      }
    }
  }

  http.open("GET","https://api.scryfall.com/cards/named?fuzzy="+titlecard, true);
  http.send();

}

async function readTextFile(file)
{
  const url1 = 'https://morx.xyz/decklists/'+file;
  const response = await fetch(url1);
  const data = await response.text();
  return data;
}

async function Show99(obj){
  var data = await readTextFile(obj.id+".txt");
  var table = document.getElementById("listTable");
  var lines = data.split("\n");
  for(var i = 0;i<99;i++){
    var html = "<tr class=\"overlap\" style=\"margin-top:"+(3.5*i)+"%;\"><td id=\"listTable"+i+"\"></td><td id=\"listTable"+(i+1)+"\"></td></tr>"
    //if(i==0) html = "<tr class=\"!overlap\" ><td id=\"listTable"+i+"\"></td><td id=\"listTable"+(i+1)+"\"></td></tr>"

    table.innerHTML += html;

    console.log(lines[i]);
    LoadCard("listTable"+i,"",lines[i],"");
    i++;
    LoadCard("listTable"+i,"",lines[i],"");
  }
  console.log(data);
}

// function StartBanPick(button){
//   if(!bFinished && !bPicking && !bBanning){
//     bBanning = true;
//     button.textContent = "Picking in Progress";
//   }else if (bFinished){
//     Init();
//     bBanning = true;
//   }
// }

// function BanPick(card){
//   if(bBanning && !card.classList.contains("Banned")){
//     BanCard(card);
//     currentBan++;
//     if(currentBan == 2){
//        bPicking = true;
//        bBanning = false;
//     }
//   }else if(bPicking && !card.classList.contains("Banned")  && !card.classList.contains("PickedP1")&& !card.classList.contains("PickedP2")){
//     PickCard(card);
//     currentPick++;
//     if(currentPick == 6){
//        bPicking = false;
//        bFinished = true;
//        document.getElementById("PickButton").textContent = "Re-Start Deck Selection";
//     }
//   }
// }
//
// function BanCard(card){
//   if(currentBan%2 == 0){
//     document.getElementById("P1Ban").textContent = card.textContent;
//   }else{
//     document.getElementById("P2Ban").textContent = card.textContent;
//   }
//   card.classList.add("Banned");
//   card.classList.remove("shade");
// }
//
// function PickCard(card){
//   if(currentPick%2 == 0){
//     card.classList.add("PickedP1");
//     var string = "P1P"+Math.floor(1+currentPick/2);
//     console.log(string);
//     document.getElementById(string).textContent = card.textContent;
//   }else{
//     card.classList.add("PickedP2");
//     var string = "P2P"+Math.floor((currentPick+1)/2);
//     console.log(string);
//     document.getElementById(string).textContent = card.textContent;
//   }
//   card.classList.remove("shade");
// }

function Init(){
  currentPick = 0;
  currentBan = 0;
  bBanning = false;
  bPicking = false;
  bFinished = false;

  LoadCard("White","Auras","Sram, Senior Edificer","onClick=\"Show99(this)\"");
  LoadCard("Blue","Tap","Aboshan, Cephalid Emporer","onClick=\"Show99(this)\"");
  LoadCard("Black","Spellslinger","Toshiro Umezawa","onClick=\"Show99(this)\"");
  LoadCard("Red","Devils","Zurzoth","onClick=\"Show99(this)\"");
  LoadCard("Green","Stompy","Selvala, Heart of the Wild","onClick=\"Show99(this)\"");

  LoadCard("Azorius","Control","Kwain","onClick=\"Show99(this)\"");
  LoadCard("Dimir","Mischief","Yuriko","onClick=\"Show99(this)\"");
  LoadCard("Rakdos","Pain","Tor Wauki, The Younger","onClick=\"Show99(this)\"");
  LoadCard("Gruul","Artifacts","Meria, Scholar","onClick=\"Show99(this)\"");
  LoadCard("Selesnya","1/1s","Bess, Soul ","onClick=\"Show99(this)\"");

  LoadCard("Orzhov","Lifegain","Karlov of the ghost","onClick=\"Show99(this)\"");
  LoadCard("Izzet","Wizards","Adeliz","onClick=\"Show99(this)\"");
  LoadCard("Golgari","Squirrels","Chatterfang","onClick=\"Show99(this)\"");
  LoadCard("Boros","Gold Golems","General Ferrous","onClick=\"Show99(this)\"");
  LoadCard("Simic","Frog Mill","Grolnok","onClick=\"Show99(this)\"");

  LoadCard("Bant","Bant","fish","onClick=\"Show99(this)\"");
  LoadCard("Esper","Zombies","Varina","onClick=\"Show99(this)\"");
  LoadCard("Grixis","Chaos Cascade","Abaddon the despoiler","onClick=\"Show99(this)\"");
  LoadCard("Jund","Counters","Xira, the golden","onClick=\"Show99(this)\"");
  LoadCard("Naya","Go Wide","Kitt Kanto","onClick=\"Show99(this)\"");

  LoadCard("Mardu","Legends","Dihada, bender of wills","onClick=\"Show99(this)\"");
  LoadCard("Temur","Card Snakes","Xyris","onClick=\"Show99(this)\"");
  LoadCard("Abzan","Keyword Tribal","Kathril","onClick=\"Show99(this)\"");
  LoadCard("Jeskai","Voltron Eggs","Elsha of the infinite","onClick=\"Show99(this)\"");
  LoadCard("Sultai","Recursion","Muldrotha the gravetide","onClick=\"Show99(this)\"");

  LoadCard("Sisay","Legends","Sisay, weatherlight captain","onClick=\"Show99(this)\"");
  LoadCard("Breya","Artifacts","Breya, etherium shaper","onClick=\"Show99(this)\"");
  LoadCard("Nono","Colourless","Kozilek the great distortion","onClick=\"Show99(this)\"");
  LoadCard("Junji","Reanimation","Junji","onClick=\"Show99(this)\"");
  LoadCard("Onebo","1 Mana Tribal","Valentin, dean","onClick=\"Show99(this)\"");

  LoadCard("Cromat1","Mutate","Cromat","onClick=\"Show99(this)\"");
  LoadCard("Cromat2","Energy","Cromat","onClick=\"Show99(this)\"");
  LoadCard("AtogAtog","Nonsense","AtogAtog","onClick=\"Show99(this)\"");
  LoadCard("Cromat4","Protection","Cromat","onClick=\"Show99(this)\"");
  LoadCard("Cromat5","Dinos","Cromat","onClick=\"Show99(this)\"");


}
