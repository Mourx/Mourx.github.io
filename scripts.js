var currentPick = 0;
var currentBan = 0;
var bBanning = false;
var bPicking = false;
var bFinished = false;
function ShowText(){
  document.getElementById("testeo").innerHTML = "yoyo"

}

function LoadCard(row, deckname, titlecard){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var txt = this.responseText;
      var obj = JSON.parse(txt);
      var data = document.getElementById(row);
      if(obj.hasOwnProperty('image_uris')){
        data.innerHTML="<img src=" + obj.image_uris.normal + "><div id=\""+data.id+"\" onClick=\"Show99(this)\" class=\"shade\"><span>" + deckname+ "</span></div>";
      }else{
        data.innerHTML="<img src=" + obj.card_faces[0].image_uris.normal + "><div id=\""+data.id+"\" onClick=\"Show99(this)\" class=\"shade\"><span>" + deckname + "</span></div>";
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
    LoadCard("listTable"+i,"",lines[i]);
    i++;
    LoadCard("listTable"+i,"",lines[i]);
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

  LoadCard("White","Auras","Sram, Senior Edificer");
  LoadCard("Blue","Tap","Aboshan, Cephalid Emporer");
  LoadCard("Black","Spellslinger","Toshiro Umezawa");
  LoadCard("Red","Devils","Zurzoth");
  LoadCard("Green","Stompy","Selvala, Heart of the Wild");

  LoadCard("Azorious","Control","Kwain");
  LoadCard("Dimir","Mischief","Yuriko");
  LoadCard("Rakdos","Pain","Tor Wauki, The Younger");
  LoadCard("Gruul","Artifacts","Meria, Scholar");
  LoadCard("Selesnya","1/1s","Bess, Soul ");

  LoadCard("Orzhov","Lifegain","Karlov of the ghost");
  LoadCard("Izzet","Wizards","Adeliz");
  LoadCard("Golgari","Squirrels","Chatterfang");
  LoadCard("Boros","Gold Golems","General Ferrous");
  LoadCard("Simic","Frog Mill","Grolnok");

  LoadCard("Bant","Bant","fish");
  LoadCard("Esper","Zombies","Varina");
  LoadCard("Grixis","Chaos Cascade","Abaddon the despoiler");
  LoadCard("Jund","Counters","Xira, the golden");
  LoadCard("Naya","Go Wide","Kitt Kanto");

  LoadCard("Mardu","Legends","Dihada, bender of wills");
  LoadCard("Temur","Card Snakes","Xyris");
  LoadCard("Abzan","Keyword Tribal","Kathril");
  LoadCard("Jeskai","Voltron Eggs","Elsha of the infinite");
  LoadCard("Sultai","Recursion","Muldrotha the gravetide");

  LoadCard("Rainbow","Legends","Sisay, weatherlight captain");
  LoadCard("Breya","Artifacts","Breya, etherium shaper");
  LoadCard("Nono","Colourless","Kozilek the great distortion");
  LoadCard("Junji","Reanimation","Junji");
  LoadCard("Onebo","1 Mana Tribal","Valentin, dean");

  LoadCard("Cromat1","Mutate","Cromat");
  LoadCard("Cromat2","Energy","Cromat");
  LoadCard("Cromat3","Nonsense","AtogAtog");
  LoadCard("Cromat4","Protection","Cromat");
  LoadCard("Cromat5","Dinos","Cromat");


}
