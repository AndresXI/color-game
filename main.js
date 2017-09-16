var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor;
var squares = document.querySelectorAll(".square");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var modeBtns = document.querySelectorAll(".mode")

init();

function init() {
  setUpModeButton();
  setUpSquares();
  reset();
}

function setUpModeButton() {
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === 'easy' ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //and compare to pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      message.textContent = 'Correct!';
      h1.style.backgroundColor = clickedColor;
      resetBtn.innerHTML = "Play Again?"
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = 'try again!';
    }
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color message
  colorDisplay.textContent = pickedColor;
  //change colors of all squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
    squares[i].style.display = 'block';
    squares[i].style.backgroundColor = colors[i];
  } else {
    squares[i].style.display = 'none';
  }
}
  h1.style.backgroundColor = 'steelblue';
  message.textContent = '';
  resetBtn.textContent = "New Colors"
}

resetBtn.addEventListener('click', function() {
  reset();
})



//Change background color of all squares to match the clicked color
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++ ) {
      //change each color to match given color
      squares[i].style.background = color;
    }

}

//generates a random number and assigns it to the the colors array index
function pickColor() {
  var ran = Math.floor(Math.random() * colors.length);
  return colors[ran];//returns the rbg string, not the background style
}

//generates a random array of rgb colors
//takes an arugument to generate the number of colors
function generateRandomColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    //get random color and push to array;
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //pick a red form 0 to 255
  var rgbString = `rgb(${r}, ${g}, ${b})`;
  return rgbString;
}
