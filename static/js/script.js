//Challenge 1:Your Age in Days

function ageInDays(){
var birthYear = prompt('What year were you born...Good friend');
var ageInDayss = (2018 - birthYear) * 365;

var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice){

    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;


botChoice = numberToChoice(randToRpsInt());
console.log('Computer choice:', botChoice);

results = decideWinner(humanChoice, botChoice);
console.log(results);

message = finalMessage(results);
console.log(message);

rpsFrontEnd(humanChoice, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number]
}

//function rpsGame(botChoice){
//    botChoice = numberToChoice(randToRpsInt());
//    console.log(botChoice);
//}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5,'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

   var yourScore = rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

   return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
        return {'message': 'You Lost!', 'color':'red'};
       } else if (yourScore === 1) {
        return {'message': 'You Won!', 'color':'blue'};
        } else {
        return {'message': 'You Tied!', 'color':'black'};
        }
    }

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
    var ImgDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
        }

  // remove all the images

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  //create 3 elements in 3 divs

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + ImgDatabase[humanImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + ImgDatabase[botImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 40px rgba(243, 38, 24, 1);'>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change the color of All buttons!
// Red: call all to btn-danger
// Green: call all to btn-success
// reset: back to original btn
// random: button 0: primary,danger,success,warning. buton 1: ... ... button 3

/*function colorRed(){
document.getElementById('flex-box-button-div').remove();
document.getElementById('danger').remove();
document.getElementById('warning').remove();
document.getElementById('success').remove();


}



function colorGreen(){
document.getElementById('primary').remove();
document.getElementById('danger').remove();
document.getElementById('warning').remove();
document.getElementById('success').remove();
}*/






var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons= [];
for (let i=0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i]);
}

console.log(copyAllButtons);


function buttonColorChange(buttonThingy){
  if (buttonThingy.value ==='red'){
    buttonsRed();
  } else if (buttonThingy.value ==='green'){
    buttonsGreen();
  } else if (buttonThingy.value ==='reset'){
    buttonColorReset();
  } else if (buttonThingy.value ==='random'){
    randomColors();
  }
}


function buttonsRed(){
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset(){
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}


function randomColors(){
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for(let i=0; i < all_buttons.length; i++){
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

///////////////////////////////////////////////////////////////////////////////


function randomImgPlayer()
            {

              sumPlayer = "";
              var sumPlayerRec = sumPlayer;

              let cardImages =
              [['AC.png', 'AD.png', 'AH.png', 'AS.png'],
              ['2C.png', '2D.png', '2H.png', '2S.png'],
              ['3C.png', '3D.png', '3H.png', '3S.png'],
              ['4C.png', '4D.png', '4H.png', '4S.png'],
              ['5C.png', '5D.png', '5H.png', '5S.png'],
              ['6C.png', '6D.png', '6H.png', '6S.png'],
              ['7C.png', '7D.png', '7H.png', '7S.png'],
              ['8C.png', '8D.png', '8H.png', '8S.png'],
              ['9C.png', '9D.png', '9H.png', '9S.png'],
              ['10C.png', '10D.png', '10H.png', '10S.png',
              'JC.png', 'JD.png', 'JH.png', 'JS.png',
              'QC.png', 'QD.png', 'QH.png', 'QS.png',
              'KC.png', 'KD.png', 'KH.png', 'KS.png']];

                var rnd10 = Math.floor(Math.random() * 10);
                var rnd4 = Math.floor(Math.random() * 4);
                var rnd16 = Math.floor(Math.random() * 16);

        //        function sumPlayersum(){
                if (rnd10 == 0){

                        if (sumPlayer < 11) {
                            sumPlayer += 11;
                          }  else {
                              sumPlayer += 1;
                          }

              } else if  (rnd10 == 1) {
                sumPlayer += 2;
              } else if (rnd10 == 2) {
                sumPlayer += 3;
              } else if(rnd10 == 3) {
                sumPlayer += 4;
              } else if(rnd10 == 4) {
                sumPlayer += 5;
              } else if(rnd10 == 5) {
                sumPlayer += 6;
              } else if(rnd10 == 6) {
                sumPlayer += 7;
              } else if(rnd10 == 7) {
                sumPlayer += 8;
              } else if(rnd10 == 8) {
                sumPlayer += 9;
              } else if(rnd10 == 9) {
                sumPlayer += 10;
              }
            }
          //  var sumPlayersum1 = sumPlayersum();
                        var SpanU1 = document.createElement('span');
                        SpanU1.setAttribute('id', 'randomImg');
                        document.getElementById('your-blackjack-result').appendChild(SpanU1);

                        var h1 = document.createElement('h1');
                        var addSum = document.createTextNode(sumPlayerRec);
                        h1.setAttribute('id','randomImg');
                        h1.appendChild(addSum);
                        SpanU1.appendChild(h1);



                if (rnd10 < 9){

                  var Span1 = document.createElement('span');
                  Span1.setAttribute('id', 'randomImg');
                  document.getElementById('your-box').appendChild(Span1);

                  var image1 = document.createElement("img");

                  var selectedimage1 = cardImages[rnd10][rnd4];

                  image1.src = '/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage1;

                  Span1.appendChild(image1);

                } else {

                var Span2 = document.createElement('span');
                Span2.setAttribute('id', 'randomImg');
                document.getElementById('your-box').appendChild(Span2);


                var image2 = document.createElement("img");
        //      var node1 = document.createTextNode('/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage1 );
                var selectedimage2 = cardImages[rnd10][rnd16];

        //        node2.setAttribute('src'); span2appendChild(node1)
                image2.src = '/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage2;

                Span2.appendChild(image2);

              }
    //      }

function randomImgDealer()
            {

              sumDealer = "";
              var sumDealerRec = sumDealer;

              let cardImages =
              [['AC.png', 'AD.png', 'AH.png', 'AS.png'],
              ['2C.png', '2D.png', '2H.png', '2S.png'],
              ['3C.png', '3D.png', '3H.png', '3S.png'],
              ['4C.png', '4D.png', '4H.png', '4S.png'],
              ['5C.png', '5D.png', '5H.png', '5S.png'],
              ['6C.png', '6D.png', '6H.png', '6S.png'],
              ['7C.png', '7D.png', '7H.png', '7S.png'],
              ['8C.png', '8D.png', '8H.png', '8S.png'],
              ['9C.png', '9D.png', '9H.png', '9S.png'],
              ['10C.png', '10D.png', '10H.png', '10S.png',
              'JC.png', 'JD.png', 'JH.png', 'JS.png',
              'QC.png', 'QD.png', 'QH.png', 'QS.png',
              'KC.png', 'KD.png', 'KH.png', 'KS.png']];

                var rnd10 = Math.floor(Math.random() * 10);
                var rnd4 = Math.floor(Math.random() * 4);
                var rnd16 = Math.floor(Math.random() * 16);

          //    function sumDealersum(){
                if (rnd10 == 0){

                        if (sumDealer < 11) {
                            sumDealer += 11;
                          }  else {
                              sumDealer += 1;
                          }

              } else if  (rnd10 == 1) {
                sumDealer += 2;
              } else if (rnd10 == 2) {
                sumDealer += 3;
              } else if(rnd10 == 3) {
                sumDealer += 4;
              } else if(rnd10 == 4) {
                sumDealer += 5;
              } else if(rnd10 == 5) {
                sumDealer += 6;
              } else if(rnd10 == 6) {
                sumDealer += 7;
              } else if(rnd10 == 7) {
                sumDealer += 8;
              } else if(rnd10 == 8) {
                sumDealer += 9;
              } else if(rnd10 == 9) {
                sumDealer += 10;
              }
//            }
        //    var sumDealersum1 = sumDealersum();
                  var SpanU1 = document.createElement('span');
                  SpanU1.setAttribute('id', 'randomImg');
                  document.getElementById('dealer-blackjack-result').appendChild(SpanU1);

                  var h1 = document.createElement('h1');
                  var addSum = document.createTextNode(sumDealerRec);
                  h1.setAttribute('id','randomImg');
                  h1.appendChild(addSum);
                  SpanU1.appendChild(h1);


                if (rnd10 < 9){

                  var Span1 = document.createElement('span');
                  Span1.setAttribute('id', 'randomImg');
                  document.getElementById('dealer-box').appendChild(Span1);

                  var image1 = document.createElement("img");

                  var selectedimage1 = cardImages[rnd10][rnd4];

          //      var node1 = document.createTextNode('/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage1 );
                  image1.src = '/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage1;

                  Span1.appendChild(image1);


                  var Span2 = document.createElement('span');
                  Span2.setAttribute('id', 'randomImg');
                  document.getElementById('dealer-box').appendChild(Span2);

                  var image2 = document.createElement("img");

                  var selectedimage2 = cardImages[rnd10][rnd16];

        //        node2.setAttribute('src');
                  image2.src = '/home/crash/Desktop/jschallenge/static/img/cards/' + selectedimage2;

                  Span2.appendChild(image2);

              }
}

//function onStand()
