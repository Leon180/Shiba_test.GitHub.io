var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/shiba_smile.jpeg') {
      myImage.setAttribute ('src','image/shiba_smile2.jpg');
    } else {
      myImage.setAttribute ('src','image/shiba_smile.jpeg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Woof!Woof!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Woof!Woof!, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}