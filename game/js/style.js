
$(document).ready(function() {
  $("#opener").click(function() {
    $("#main").show();
    $("#button").show();
    $("#button1").show();
    $("#tab").show();
    $("#opener").hide();
    $("#heart").hide();
    $("#turn1").show();

  });
});


var player1=document.getElementById("1");
var player2=document.getElementById("2");
var turn = document.getElementById("turn");
var p1c=0,p2c=0;

//set event onClick
//boxes ==> all boxes
// x_or_o ==> to set x or o into the box
boxes = document.querySelectorAll("#main div"), x_or_o =0;
function selectWinnerBoxes(b1,b2,b3)
{
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML=b1.innerHTML + " Won Congrats";
  console.log(b1.innerHTML);

  // selecting the winner from two
  if(b1.innerHTML==="X")
  {
    p1c++;
    player1.innerHTML=p1c;
    setTimeout(function(){ alert(b1.innerHTML + " Won Congrats"); }, 500);

  }
  else {
    p2c++;
    player2.innerHTML=p2c;
    setTimeout(function(){ alert(b1.innerHTML + " Won Congrats"); }, 500);
  }

  // styling the turn span
  turn.style.fontSize="2em";
  // function call replay to refresh the values to null
  setTimeout(function(){ replay();},1500);
}

// finding out the winner
function getWinner()
{
  var box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");
  box3 = document.getElementById("box3");
  box4 = document.getElementById("box4");
  box5 = document.getElementById("box5");
  box6 = document.getElementById("box6");
  box7 = document.getElementById("box7");
  box8 = document.getElementById("box8");
  box9 = document.getElementById("box9");
  //get all possibilities
  if(box1.innerHTML != "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
  selectWinnerBoxes(box1,box2,box3);
  if(box4.innerHTML != "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
  selectWinnerBoxes(box4,box5,box6);
  if(box7.innerHTML != "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box7,box8,box9);
  if(box1.innerHTML != "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
  selectWinnerBoxes(box1,box4,box7);
  if(box2.innerHTML != "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
  selectWinnerBoxes(box2,box5,box8);
  if(box3.innerHTML != "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box3,box6,box9);
  if(box1.innerHTML != "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box1,box5,box9);
  if(box3.innerHTML != "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
  selectWinnerBoxes(box3,box5,box7);
}


for(var i=0; i< boxes.length; i++)
{
  boxes[i].onclick = function()
  {

    //not allow to change the value of the box
    if(this.innerHTML != "X" && this.innerHTML != "O")
    {
      // placing the values in different positions
      if(x_or_o % 2 === 0)
      {
        console.log(x_or_o);
        // placing the value x to one of the boxes
        this.innerHTML = "X";
        document.getElementById("pl1").focus();
        document.getElementById("pl2").blur();
        turn.innerHTML="O turn now";
        // method call for checking the winner
        getWinner();
        // incrementing the box from one value to the other
        x_or_o += 1;

      }
      // else for placing the value O
      else
      {
        console.log(x_or_o);
        this.innerHTML = "O";
        document.getElementById("pl1").blur();
        document.getElementById("pl2").focus();
        turn.innerHTML="X turn now";
        // method call
        getWinner();
        // incrementing the box from one value to the other
        x_or_o += 1;
      }
      // condition for checking the draw
      if(x_or_o % 10===0)
      {
        // placing the draw in the html
        turn.innerHTML="Game Drawn";
        //setting the value to the start
        x_or_o=0;
      }
    }

  };

}
//function for making the values null to default
function replay()
{
  for(var i=0; i< boxes.length; i++)
  {
    x_or_o=0;
    boxes[i].classList.remove("win");
    boxes[i].innerHTML="";
    turn.innerHTML="Tic Tac Toe";
    turn.style.fontSize="2em";
    document.getElementById('side1').innerHTML ="";


  }
}
// function to end the game
function exit()
{
  p1c=0,p2c=0;
  var p=document.getElementById("1").innerHTML;
  var q=document.getElementById("2").innerHTML;
  console.log(p);
  console.log(q);
  // checking which player won the match
  if(p==0&&q==0)
  {
    alert("please start the game");
    document.getElementById('side1').innerHTML ="";


  }
  else if(p>q)
  {


    alert("player1 has won the game by "+p+" points");
    setTimeout(function(){document.getElementById('side1').innerHTML = "<img src=\"3.gif\" width=\"500px\" height=\"600px\">";}, 1000);
    setTimeout(function(){alert("Try again");}, 3000);
    setTimeout(function(){document.getElementById('side1').innerHTML = "";}, 3000);
  }
  else if(q>p) {


    alert("player2 has won the game by "+q+" points");
    setTimeout(function(){  document.getElementById('side1').innerHTML = "<img src=\"3.gif\" width=\"500px\" height=\"600px\">";}, 1000);
    setTimeout(function(){alert("Try again");}, 3000);
    setTimeout(function(){document.getElementById('side1').innerHTML = "";}, 3000);
  }
  else {
    alert("play once more to decide the winner you are in a tie");
    document.getElementById('side1').innerHTML ="";

  }
  player1.innerHTML=0;
  player2.innerHTML=0;

  //  for making default values
  for(var i=0; i< boxes.length; i++)
  {
    x_or_o=0;
    boxes[i].classList.remove("win");
    boxes[i].innerHTML="";
    turn.innerHTML="Tic Tac Toe";
    turn.style.fontSize="2em";
  }
}
