//Detecting Mouse Button Press
for (var i = 0; i < 7; i++) {
  // // NOTE: You Must be wondering why 2 switch cases and this one is commented out, Well because at first i thought i had to create two switch cases because
  // in "click" event listener i was dealing with only innetHTML which is "a" ,"w","s","d","j","k","l", so i created switch cases for these innerHTML
  //
  // and in "keydown" event listener i was getting code of the keyboard button which is "KeyA","KeyS","KeyA","KeyD", etc (you can see other cases below) and i couldd have
  //  used "event.key" but "event.key" will not gonna work if user presses alphabets in caps , user had to make sure that the capslock is not active or not to type wsadjkl
  //  while holding shift key OR i had to make three Cases like ;  case "KeyW":
  //                                                               case "w":
  //                                                               case "W":
  //                                                               var tom1 = new Audio("sounds/tom-1.mp3");
  //                                                                  tom1.play();
  //                                                                  break;
  //   So yeah three cases would not call you DRY code So Foloow along below you'll understand

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); //here the Inner Html which is ("w","s","a","d","j","j","l","k") is passing as a argument in makeSound funtion ..........Go down
      buttonAnimation(buttonInnerHTML); // for animation passing Inner Html which is ("w","s","a","d","j","j","l","k")
  });



  // switch(buttonInnerHTML){
  //   case "w":
  //   var tom1 = new Audio("sounds/tom-1.mp3");
  //   tom1.play();
  //   break;
  //
  //   case "s":
  //   var tom2 = new Audio("sounds/tom-2.mp3");
  //   tom2.play();
  //   break;
  //
  //   case "a":
  //   var tom3 = new Audio("sounds/tom-3.mp3");
  //   tom3.play();
  //   break;
  //
  //   case "d":
  //   var tom4 = new Audio("sounds/tom-4.mp3");
  //   tom4.play();
  //   break;
  //
  //   case "k":
  //   var kick = new Audio("sounds/kick-bass.mp3");
  //   kick.play();
  //   break;
  //
  //   case "l":
  //   var crash = new Audio("sounds/crash.mp3");
  //   crash.play();
  //   break;
  //
  //   case "j":
  //   var snare = new Audio("sounds/snare.mp3");
  //   snare.play();
  //   break;
  //
  //   default:console.log(buttonInnerHTML);
  // }
  //NUMBERING shows the steps i gone through to understand this keyWord
  // 1.this.style.color="red";
  // 2.console.log(this.innerHTML);
  // 3. var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
}
// Detecting Kyeboard Press
document.addEventListener("keydown", function(event){
  makeSound(event.code); //here the code of the keypresses (which is "KeyA","KeyD","KeyS","KeyW","KeyK",....) si passing as an argument in makeSound funtion....Go Down
  buttonAnimation(event.code); //for animation passing keypresses (which is "KeyA","KeyD","KeyS","KeyW","KeyK",....)
});
function makeSound(key){

  switch (key) {
    case "KeyW": //checking for kewboard button 'w' // yes no using '||' or 'OR' is not gonna work in switch case.
    case "w":    // checking for the mouse button clicked on 'w' button
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;


    case "KeyS": //checking for kewboard button 's'
    case "s":     // checking for the mouse button clicked on 's' button
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "KeyA":
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "KeyD":
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "KeyK":
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "KeyJ":
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "KeyL":
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(button.code);
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed"); // Now by adding this pressed class its staying there forever its like giving
                                                                  // animation of getting clikced forever unless we refresh so we need a timeout so that
                                                                  // the pressed class can remove after some time and then when we click or press W, S, a etc
                                                                  // then the press class added again
    //=============================================Here we need setTimeout() funtion ====================================================================
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
}
