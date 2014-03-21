var createDeck = function() {
// based on code from http://www.brainjar.com/js/cards/default2.asp
  var ranks = ["A","Q","3","K"];
 var suits = ["♣","♠"];
  var j, k, index=0;
  var pack_size;

  // Set array of cards.
  // total number of cards
  pack_size = ranks.length * suits.length;
  var cards = [];
  

  // Fill the array with 'n' packs of cards.
  while (index < pack_size){
    for (j = 0; j < suits.length; j++){
       for (k = 0; k < ranks.length; k++){
          console.log("k:",k,"index:",index);
          cards[index] = {rank:ranks[k], suite:suits[j]};
          index++;
          }
       }
    }
  console.log(cards.length);
  return cards;
}
var showCards = function(cardJSON) {
txt = cardJSON.rank + cardJSON.suite;


  
var backcard = document.createElement("div");
//backcard.style.backgroundImage = "url('th.jpg')";
backcard.className = "cardback"; 
  
var frontcard = document.createElement("div");
frontcard.textContent = txt;
frontcard.className = "cardfront";

var cardss = document.createElement("div");
cardss.className = "flipper";

cardss.setAttribute("onclick", "flipper(this)");
   // if() 
console.log(frontcard);
console.log(backcard);
console.log(cardss);

cardss.appendChild(frontcard);
cardss.appendChild(backcard);


document.querySelector(".sideBox").appendChild(cardss);
}

var showDeck = function(deck){
    var idx;
    for (idx = 0; idx < deck.length; ++idx) {
            console.log("so far, so good",deck[idx]);
            showCards(deck[idx]);
    }
};
window.onload=function()
{



var deck = createDeck();
var deck2 = createDeck();
var cards = deck.sort( function() { return 0.5 - Math.random() } );
var cards2 = deck2.sort( function() { return 0.5 - Math.random() } );
showDeck(cards);
showDeck(cards2);
};
function flipper(flipme){
    flipme.querySelector(".cardback").setAttribute("class"," h backcard");
    flipme.querySelector(".cardfront").setAttribute("class"," h frontcard");
}